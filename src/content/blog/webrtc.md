---
title: "My Experience Getting Started with WebRTC"
description: "Why the WebRTC API is harder than it looks, and how splitting my client into three modules made connection setup clear."
group: web
original: "https://kirill-novik.medium.com/my-experiences-getting-started-with-webrtc-5a7dd9c26df5"
---

Here is what I learned getting to know WebRTC, why I think it is **much** harder than it seems, and how I split a simple client into three parts to make sense of it. I hope it helps you get started with your own projects.

From MDN: [WebRTC](https://developer.mozilla.org/en-US/docs/Glossary/WebRTC) (Web Real-Time Communication) is an [API](https://developer.mozilla.org/en-US/docs/Glossary/API) that can be used by video-chat, voice-calling, and P2P-file-sharing Web apps.

## Why it looks easy

WebRTC is not a new technology, and there are many articles about it (I list some at the end). The impression I got from them is that it is **easy** to get started with simple real-world use cases.

Take this [Google I/O presentation from 2013](https://youtu.be/p2HzZkd2A40). I watched it a couple of days ago and it got me really excited. Sam Dutton and Justin Uberti explain clearly what the project accomplished and which challenges their team overcame. That video, like many other resources, made WebRTC look pretty easy to get into.

Then I started implementing a simple client and soon realized it is not that easy. I won't talk about NAT, STUN or TURN here, only about the API itself.

## Where I started

I was trying to build a simple client that could send and receive connections from RTC peers, local or remote. I started with the [peer connection sample](https://webrtc.github.io/samples/src/content/peerconnection/pc1/) from the WebRTC team. Reading the source, one thing was obvious: the event handling is a big mess. It was hard to follow what comes after what, and it was confusing to find where the most important steps of connection setup, the offer and the answer, happen.

Once I got over the confusion, understood the steps and saw how the metadata exchange works, I moved on to signaling for remote connections.

Signaling was disappointing too. Interacting with an external system is always prone to errors and hard and time-consuming to debug. I wanted to recreate my own signaling server to make sure I understood the logic.

I mocked the WebSocket server with a simple Pub/Sub interface, using an RxJS BehaviorSubject. Locally I used it as an abstraction, and I could swap the logic behind the interface when my client went into remote mode.

But the local-mode code got bulky fast. Basic signaling, RTC messages, connection management and channel handling were all tied together, and it soon became one big spaghetti-like mess. I needed to separate those concerns.

## The design

After some thought, I decided it would be great if my client object knew only one thing: when a new connection is established. I could then subscribe to the various media or data channel events. That minimal representation of WebRTC would hide the implementation details.

Here is what the client class looks like (`web-rtc-client.ts`):

```ts
export class Client {
  private id = generateId(4, 4);

  // Channels
  private dataChannels: { [id: string]: RTCDataChannel } = {};
  private streams: { [id: string]: MediaStream[] } = {};

  // Agents
  private BroadcastingAgent = new BroadcastingAgent(
    this.id,
    CommunicationSubject
  );
  private RTCMessagingAgent = new RTCMessagingAgent(this.BroadcastingAgent);
  private ConnectionManager = new ConnectionManager(this.RTCMessagingAgent);

  // Subjects
  private OnDataChannelMessageSubject = new Subject<[string, string]>();
  private OnDataChannelSubject = new Subject<[string, RTCDataChannel]>();
  private OnStreamSubject = new Subject<[string, MediaStream]>();

  constructor() {
    this.OnDataChannelMessageSubject.subscribe(
      this.onDataChannelMessageSubjectHandler
    );
    this.ConnectionManager.OnConnectionCreatedSubject.subscribe(
      this.onConnectionCreatedHandler
    );
    this.ConnectionManager.OnStreamSubject.subscribe(this.onStreamHandler);
    this.BroadcastingAgent.sendGreeting();
  }

  // Connection
  onConnectionCreatedHandler = (message: [string, RTCPeerConnection]) => {
    // ...
  };

  // Stream
  addStreamToConnection = (connection: RTCPeerConnection) => {
    // ...
  };

  addStream = (id: string, stream: MediaStream) => {
    // ...
  };

  onStreamHandler = (stream: MediaStream) => {
    // ...
  };

  onTrackHandler = (id: string) => (ev: RTCTrackEvent) => {
    // ...
  };

  // Data Channel
  sendDataToChannel = (id: string, message: string) => {
    // ...
  };

  onDataChannelHandler = (id: string) => (ev: RTCDataChannelEvent) => {
    // ...
  };

  onDataChannelMessageHandler = (id: string) => (ev: MessageEvent) => {
    // ...
  };

  onDataChannelMessageSubjectHandler = (message: [string, string]) => {
    // ...
  };
}
```

This doesn't mean I could skip the underlying logic. It also doesn't mean I would do it declaratively through some configuration. I'm against that approach for many reasons, especially the difficulty of debugging and testing.

I split the underlying logic into three parts:

- Broadcasting
- RTC messaging
- Connection management

### Broadcasting

I used the simplest broadcasting, where the broadcasting agent broadcasts to every participant. This lets us abstract away the server-side WebSocket signaling. Here is the broadcasting agent class (`web-rtc-broadcast.ts`):

```ts
export class BroadcastingAgent {
  // Participants
  public participants: string[] = [];

  // Subjects
  public addParticipantSubject = new Subject<string>();
  public removeParticipantSubject = new Subject<string>();
  private commSubject: Subject<IMessage<unknown>>;

  constructor(
    public id: string = generateId(4, 4),
    communicationChannel: Subject<IMessage<unknown>>
  ) {
    this.commSubject = communicationChannel;

    this.getCommSubject().subscribe(this.messageHandler);
    this.getCommSubject().subscribe(this.greetingHandler);
  }

  // Messaging Utils

  getCommSubject = () =>
    this.commSubject.pipe(filter(({ id: _id }) => _id !== this.id));

  getIndividualMessageCommSubject = () =>
    this.getCommSubject().pipe(filter(({ to }) => to === this.id));

  messageHandler = (message: IMessage<unknown>) => {
    console.warn(message);
  };

  sendIndividualRequest = <T>(data: T, to: string) => {
    this.commSubject.next({
      id: this.id,
      type: "individual",
      data,
      to,
    });
  };

  // Participants

  addParticipant = (id: string) => {
    this.participants.push(id);
    this.addParticipantSubject.next(id);
  };

  removeParticipant = (id: string) => {
    let participants = this.getParticipants();
    participants = participants.filter((_id) => _id !== id);
    this.removeParticipantSubject.next(id);
  };

  getParticipants = () => {
    const participants = [...this.participants];
    return participants;
  };

  // Salutations

  greetingHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "greeting") return;
    if (participants.includes(id)) return;
    console.warn(`ID: ${this.id}, Add Participant`);
    this.addParticipant(id);
    setTimeout(this.sendGreeting, 100);
  };

  farewellHandler = (message: IMessage<unknown>) => {
    const { id, type } = message;
    const participants = this.getParticipants();
    if (type !== "farewell") return;
    if (participants.includes(id)) return;
    this.removeParticipant(id);
  };

  sendGreeting = () => {
    this.commSubject.next({
      id: this.id,
      type: "greeting",
      data: {},
    });
  };

  sendFarewell = () => {
    this.commSubject.next({
      id: this.id,
      type: "farewell",
      data: {},
    });
  };
}
```

One thing to note: I delay the greeting by an arbitrary 100 ms. When a new participant greets everybody, the receivers of that greeting should send an offer first. If two parties send offers at the same time, the connection fails to establish.

### RTC messaging

This module sends the RTC connection negotiation messages. It is separate from broadcasting because these messages are very specific, and the broadcaster doesn't need to know anything about them. Here is the RTC messaging agent class (`web-rtc-messaging-agent.ts`):

```ts
export class RTCMessagingAgent {
  
  // Subjects
  public OnAddParticipantSubject = new Subject<string>();
  public OnRemoveParticipantSubject = new Subject<string>();
  public OnSetLocalDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  public OnSetRemoteDescription = new Subject<
    [string, RTCSessionDescriptionInit]
  >();
  public OnAddCandidateSubject = new Subject<[string, RTCIceCandidate]>();

  constructor(public broadcastingAgent: BroadcastingAgent) {
    this.broadcastingAgent.addParticipantSubject.subscribe(
      this.onAddParticipantHandler
    );
    this.broadcastingAgent.removeParticipantSubject.subscribe(
      this.onRemoveParticipantHandler
    );
    this.getOfferSubject().subscribe(this.onOfferHandler);
    this.getAnswerSubject().subscribe(this.onAnswerHandler);
    this.getCandidateSubject().subscribe(this.onCandidateHandler);
  }

  // Add/Remove Participants
  onAddParticipantHandler = (id: string) => {
    this.OnAddParticipantSubject.next(id);
  };

  onRemoveParticipantHandler = (id: string) => {
    this.OnRemoveParticipantSubject.next(id);
  };

  // Offer
  getOfferSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "offer")) as Subject<
        IMessage<unknown>
      >
    );
  };

  onOfferCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    console.warn(
      `Offer for ${id} Created in ${this.broadcastingAgent.id}`,
      sessionDescription
    );
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  onOfferHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    this.OnSetRemoteDescription.next([id, data as RTCSessionDescriptionInit]);
  };

  // Answer
  getAnswerSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "answer")) as Subject<
        IMessage<unknown>
      >
    );
  };

  onAnswerCreatedHandler = (id: string) => (
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    console.warn(
      `Answer for ${id} Created in ${this.broadcastingAgent.id}`,
      sessionDescription
    );
    this.OnSetLocalDescription.next([id, sessionDescription]);
    console.log("setLocalAndSendMessage sending message", sessionDescription);
    this.broadcastingAgent.sendIndividualRequest(sessionDescription, id);
  };

  onAnswerHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    this.OnSetRemoteDescription.next([id, data as RTCSessionDescriptionInit]);
  };

  // Candidate
  getCandidateSubject = () => {
    return (
      this.broadcastingAgent
        .getIndividualMessageCommSubject()
        // @ts-ignore
        .pipe(filter(({ data }) => data.type === "candidate")) as Subject<
        IMessage<unknown>
      >
    );
  };

  onCandidateHandler = (message: IMessage<unknown>) => {
    const { id, data } = message;
    var candidate = new RTCIceCandidate({
      // @ts-ignore
      sdpMLineIndex: data.label,
      // @ts-ignore
      candidate: data.candidate,
    });
    this.OnAddCandidateSubject.next([id, candidate]);
  };

  handleIceCandidate = (id: string) => (event: RTCPeerConnectionIceEvent) => {
    console.log("icecandidate event: ", event);
    if (event.candidate) {
      this.broadcastingAgent.sendIndividualRequest(
        {
          type: "candidate",
          label: event.candidate.sdpMLineIndex,
          id: event.candidate.sdpMid,
          candidate: event.candidate.candidate,
        },
        id
      );
    } else {
      console.log("End of candidates.");
    }
  };

  onCandidateCreatedHandler = (id: string) => (candidate: RTCIceCandidate) => {
    this.broadcastingAgent.sendIndividualRequest(
      {
        type: "candidate",
        label: candidate.sdpMLineIndex,
        id: candidate.sdpMid,
        candidate: candidate.candidate,
      },
      id
    );
  };
}
```

### Connection management

This module creates connections, creates offers and answers, and sets up the connection. It is separate from RTC messaging because the connection doesn't need to know how the metadata is transported. It only needs the remote and local session descriptions.

One thing to note: when a participant is added, I make sure there is no connection already. If there is one, the participant has already received an offer when it greeted the others. Here is the connection manager class (`web-rtc-connection-manager.ts`):

```ts
import { Subject } from "rxjs";
import { RTCMessagingAgent } from "./rtc-messaging-agent";

const configuration = {
  iceServers: [
    {
      urls: [
        "stun:stun.l.google.com:19302",
        "stun:stun1.l.google.com:19302",
        "stun:stun2.l.google.com:19302",
        "stun:stun3.l.google.com:19302",
        "stun:stun4.l.google.com:19302",
        "stun:stun01.sipphone.com",
        "stun:stun.ekiga.net",
        "stun:stun.fwdnet.net",
        "stun:stun.ideasip.com",
        "stun:stun.iptel.org",
        "stun:stun.rixtelecom.se",
        "stun:stun.schlund.de",
        "stun:stunserver.org",
        "stun:stun.softjoys.com",
        "stun:stun.voiparound.com",
        "stun:stun.voipbuster.com",
        "stun:stun.voipstunt.com",
        "stun:stun.voxgratia.org",
        "stun:stun.xten.com",
      ],
    },
  ],
};

export class ConnectionManager {
  // Connections
  private connections: { [id: string]: RTCPeerConnection } = {};

  // Subjects
  public OnDataChannelSubject = new Subject<RTCDataChannel>();
  public OnConnectionCreatedSubject = new Subject<
    [string, RTCPeerConnection]
  >();

  constructor(private ma: RTCMessagingAgent) {
    this.ma.OnAddParticipantSubject.subscribe(this.onAddParticipantHandler);
    this.ma.OnRemoveParticipantSubject.subscribe(
      this.onRemoveParticipantHandler
    );
    // this.ma.OnCreateAnswerSubject.subscribe(this.onCreateAnswerHandler);
    this.ma.OnSetLocalDescription.subscribe(this.onSetLocalDescriptionHandler);
    this.ma.OnSetRemoteDescription.subscribe(
      this.onSetRemoteDescriptionHandler
    );
    this.ma.OnAddCandidateSubject.subscribe(this.onAddCandidateHandler);
  }

  createConnection = (id: string) => {
    const _id = this.ma.broadcastingAgent.id;
    console.warn(
      `ID: ${id}, Create Connection in ${this.ma.broadcastingAgent.id}`
    );
    const connection = new RTCPeerConnection(configuration);
    this.connections[id] = connection;
    connection.onicecandidate = this.onICECandidateHandler(id);
    this.OnConnectionCreatedSubject.next([id, connection]);
    return connection;
  };

  // Add/Remove Participants
  onAddParticipantHandler = (id: string) => {
    console.warn(`${this.ma.broadcastingAgent.id} On Add Participant Handler`);
    const oldConnection = this.connections[id];
    if (oldConnection) return;
    const connection = this.createConnection(id);
    connection
      .createOffer()
      .then(this.ma.onOfferCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create offer for id ${id}`, e);
      });
  };

  onRemoveParticipantHandler = (id: string) => {
    delete this.connections[id];
  };

  // Session Description
  onSetLocalDescriptionHandler = (
    message: [string, RTCSessionDescriptionInit]
  ) => {
    const [id, sessionDescription] = message;
    const connection = this.connections[id];
    if (!connection) return;
    connection.setLocalDescription(sessionDescription);
  };

  onSetRemoteDescriptionHandler = (
    message: [string, RTCSessionDescriptionInit]
  ) => {
    const [id, sessionDescription] = message;
    console.warn(
      `Setting remote description in ${this.ma.broadcastingAgent.id} for ${id}`
    );
    const connection = this.connections[id];
    if (!connection) {
      // Answer
      this.onCreateAnswerHandler(id, sessionDescription);
    } else {
      // Offer
      connection.setRemoteDescription(sessionDescription);
    }
  };

  // Connection Logistics
  onICECandidateHandler = (id: string) => (ev: RTCPeerConnectionIceEvent) => {
    console.warn(`ID: ${id}, On ICE Candidate Handler`);
    const candidate = ev.candidate;
    if (!candidate) return;
    this.ma.onCandidateCreatedHandler(id)(candidate);
  };

  onCreateAnswerHandler = (
    id: string,
    sessionDescription: RTCSessionDescriptionInit
  ) => {
    const connection = this.createConnection(id);
    connection.setRemoteDescription(sessionDescription);
    connection
      .createAnswer()
      .then(this.ma.onAnswerCreatedHandler(id))
      .catch((e) => {
        console.warn(`Couldn't create answer in ID ${id}`, e);
      });
  };

  onAddCandidateHandler = (message: [string, RTCIceCandidate]) => {
    const [id, candidate] = message;
    const connection = this.connections[id];
    if (!connection) return;
    connection.addIceCandidate(candidate);
  };
}
```

Once I had a working solution with this separation of concerns, I moved much faster, and the logic of connection setup and data exchange was much easier to follow. You can see all of it in the [source code](https://github.com/kino6052/webrtc-example).

## Conclusion

This separation of concerns let me wrap my head around WebRTC and correctly negotiate connections between endpoints. It took much more time than I expected, and I didn't even get to NAT and the rest in this article.

My conclusion on why the API is harder than I expected is that you need to know quite a bit about how two endpoints communicate. Despite its seeming minimalism, `RTCPeerConnection` is just the tip of the ICEberg (no pun intended). It doesn't give enough abstraction over the underlying logic.

I hope that at some point a few extra API interfaces will make WebRTC easier to use, maybe in the way some DOM interfaces made jQuery obsolete. Who knows?

I hope you found this helpful, and maybe even agree with some of my arguments.

## Further reading

Wrappers that hide the implementation well:

- [PeerJS](https://peerjs.com/docs.html#start)
- [Current state of JavaScript WebRTC libraries (Stack Overflow)](https://stackoverflow.com/questions/24857637/current-state-of-javascript-webrtc-libraries)

Articles:

- [WebRTC basics (HTML5 Rocks)](https://www.html5rocks.com/en/tutorials/webrtc/basics/)
- [How JavaScript works: WebRTC and the mechanics of peer to peer networking](https://blog.sessionstack.com)
- [The fifteen-minute WebRTC demo](https://medium.com/hackernoon/the-fifteen-minute-webrtc-demo-3f5cf3a71fc4)
