import { StrictMode } from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import {
  getCurrentState,
  IState,
  subscribeToStateChange,
} from "./utils/bridge";
import { EventSubject } from "./utils/EventWrapper";
import { getCurrentPathState, getLocationSubject } from "./utils/router";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

getLocationSubject().subscribe((path) => {
  const currentState = getCurrentState();
  const { language } = getCurrentPathState(path);
  const nextState: IState = {
    ...currentState,
    language,
    path,
  };
  EventSubject.next(["state", "", JSON.stringify(nextState)]);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

subscribeToStateChange((state) =>
  root.render(
    <StrictMode>
      <App state={state} />
    </StrictMode>
  )
);
