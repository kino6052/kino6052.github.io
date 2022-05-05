import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import {
  getCurrentState,
  IState,
  setState,
  subscribeToStateChange,
} from "./utils/bridge";
import { getLocationSubject } from "./utils/utils";

import { App } from "./App";
import { EventSubject } from "./utils/EventWrapper";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

getLocationSubject().subscribe((route) => {
  const currentState = getCurrentState;
  const nextState: IState = {
    ...currentState,
    route,
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
