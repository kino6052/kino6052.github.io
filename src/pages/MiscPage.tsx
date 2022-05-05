import styled from "styled-components";
import { CardContainer, ICard } from "../components/CardContainer";

const other: ICard[] = [
  {
    title: "Interview Article",
    subtitle: "Level Up Coding Publication",
    description: "Interviewed by Marina Vorontsova",
    url: "https://levelup.gitconnected.com/kirill-novik-career-is-not-always-linear-it-is-a-journey-or-a-lab-experiment-132a72e74f4f",
    imageUrl: "https://miro.medium.com/max/1400/1*YdNh4UOlefbG1tAXFp7LLg.png",
  },
];

const frontEndBlog: ICard[] = [
  {
    title: "React + RxJS",
    subtitle: "How React is meant to be",
    description: "Opinion on State Management",
    url: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/",
    imageUrl:
      "https://soshace.com/wp-content/uploads/2019/07/React-Hooks-RxJS-or-How-React-Is-Meant-to-Be-react-ecosystem.jpg",
  },
  {
    title: "React TDD",
    subtitle: "Test Driven Development in React",
    description: "Opinion on TDD in React",
    url: "https://kirill-novik.medium.com/test-driven-development-and-react-347487c9610a",
    imageUrl:
      "https://blogs.zeiss.com/digital-innovation/de/wp-content/uploads/sites/2/2015/04/201504_Test_Driven_Development_2_neu_fi.png",
  },
  {
    title: "I Don't Like GraphQL",
    subtitle: "So How About JSON and TS?",
    description: "Opinion on Declarative Data Access",
    url: "https://kirill-novik.medium.com/i-dont-like-graphql-so-how-about-json-and-typescript-69765ca9e620",
    imageUrl: "https://miro.medium.com/max/670/1*KFlPmF76jX_m7-iGNL5c0g.png",
  },
  {
    title: "My Experience with WebRTC",
    subtitle: "Some Lessons Learned",
    description: "Sharing WebRTC lessons learned",
    url: "https://kirill-novik.medium.com/my-experiences-getting-started-with-webrtc-5a7dd9c26df5",
    imageUrl: "https://miro.medium.com/max/700/0*vzViH1oTnBSymXrN.png",
  },
];

const machineLearningBlog: ICard[] = [
  {
    title: "React + RxJS",
    subtitle: "How React is meant to be",
    description: "Opinion on State Management",
    url: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/",
    imageUrl:
      "https://soshace.com/wp-content/uploads/2019/07/React-Hooks-RxJS-or-How-React-Is-Meant-to-Be-react-ecosystem.jpg",
  },
];

export const MiscPage = () => (
  <>
    <section className="container">
      <h1>Misc</h1>
      <h2>Blog</h2>
      <p>
        I enjoy writing articles about various topics. My favorite topics are
        philosophy and programming. Usually, the motivation when I write an
        article is to use the process to assist me in learning and thinking, as
        it is much easier to get a better understanding of a particular topic
        when you try to explain it to someone. Even if it is a rubber duck,
        which technically makes me a practicioner of the "rubber duck debugging"
        methodology. I also use it as a way to keep memories of how my thinking
        process changes over time, as well as to kindle a conversation with
        those who are kind enough to read it.
      </p>
      <br />
      <p>Here are a few articles I would like to share.</p>
      <br />
      <h2>Web Development</h2>
      <br />
      <CardContainer cards={frontEndBlog} />
      <br />
      <h2>Machine Learning</h2>
      <br />
      <CardContainer cards={machineLearningBlog} />
      <br />
      <br />
      <br />
      <h2>Other</h2>
      <p>
        There are a few items that I find relevant to share here as they provide
        extra details that could help to better tell my story.
      </p>
      <br />
      <p>
        <a href="https://soshace.com/aboutus" target="_blank" rel="noreferrer">
          Soshace freelancer agency
        </a>{" "}
        wanted to interview me and share my story of becoming a successful
        freelance developer on their platform, and I have gladly taken up on
        this opportunity. Here is the resulting article:
      </p>
      <br />
      <CardContainer cards={other} />
      <br />
      <br />
      <h2>Interests</h2>
      <p>
        I believe that curiosity is one of the traits a good problem-solver
        needs to possess as it encourages exploration that is vital when solving
        problems. I find that these various interests have only been helping me
        in this regard.
      </p>
      <br />
      <h3>Languages</h3>
      <p>
        There are a very few things that could compare in their ability to
        broaden one's horizons as much as language learning does. The may lesson
        is that it is through play and learning from mistakes you organically
        get better and keep your motivation.
      </p>
      <br />
      <h3>Philosophy</h3>
      <p>
        Learning languages also helps in becoming more familiar with
        abstractions and abstract thinking that is the crucial for successful
        problem solving. There are no fields of knowledge more abstract than
        logic and grammar. They are both related to language. The deeper in
        abstractions you go, the more fun things become.
      </p>
      <br />
      <p>
        On the more practical side, I practice the way of minimalism, or trying
        to keep my attention on what's necessary and sufficient in a given
        circumstance. If something isn't necesary in a given circumstance, it
        usually doesn't get much of my attention or energy.
      </p>
      <br />
      <h3>Music</h3>
      <p>
        My brother and I have been playing off and on in a tiny band together.
        It taught me that creative collaboration takes a lot of energy, and that
        you have to learn to make sure that you can practice a lot on your own
        before doing something meaningful as a group.
      </p>
      <a
        href="https://soundcloud.com/kirill-novik"
        target="_blank"
        rel="noreferrer"
      >
        Some of our tracks can be found here.
      </a>
      <br />
      <h3>Mathematics</h3>
      <p>
        Mathematics is of interest to me as part of the broader study of
        philosophy. It is the most obvious field where you can build more
        complex knowledge from a small set of foundational pieces. It is my
        passion to build ontologies to store my knowledge.
      </p>
      <br />
      <p>
        I have also undertaken a very interesting{" "}
        <a
          href="https://medium.com/math-simplified/twin-prime-conjecture-proof-ef4b5c2c65e0"
          target="_blank"
          rel="noreferrer"
        >
          journey reasoning about the nature of primes and twin primes
        </a>
        .
      </p>
      <br />
      <h3>Workout</h3>
      <p>
        As part of minimalist approach, I find that calisthenics is extremely
        powerful in this regard. With the minimum set of equipment one can
        perform a comprehensive training routine.
      </p>
      <br />
      <h3>Self-sufficient Living</h3>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.canva.com/design/DADq1XGg6M8/0aNlIyfMxS4a1HGAoa40uw/view?utm_content=DADq1XGg6M8&utm_campaign=designshare&utm_medium=link&utm_source=postdownload#1"
        >
          Here is the ebook
        </a>{" "}
        I wrote for my non-profit company Aeroaquaponic. It summarizes the
        results of my philosophical musings on the topics of meaning of life and
        happiness. It describes a minimalist approach to life that isn't only
        beneficial to the practicioner but also to the larger context.
        Self-sufficiency is my long-term goal.
      </p>
      <br />
      <br />
    </section>
    <br />
    <br />
    <br />
  </>
);
