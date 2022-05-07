import { StrictMode } from "react";
// @ts-ignore
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import {
  ERoute,
  getCurrentState,
  IState,
  subscribeToStateChange,
} from "./utils/bridge";
import { EventSubject } from "./utils/EventWrapper";
import { getLocationSubject } from "./utils/utils";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

getLocationSubject().subscribe((route) => {
  const currentState = getCurrentState();
  const nextState: IState = {
    ...currentState,
    route: route as ERoute,
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
