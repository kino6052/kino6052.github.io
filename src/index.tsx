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

window.addEventListener("load", () => {
  const body = document.querySelector("body");
  if (!body) return;
  body.setAttribute("style", "margin: 0; padding: 0;");
  const bodyInnerHTML = body.innerHTML;
  const hasAnalytics = bodyInnerHTML.includes("Yandex.Metrika");
  if (hasAnalytics) return;
  const nextInnerHTML = `${bodyInnerHTML} <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

     ym(89261329, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/89261329" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->`;
  body.innerHTML = nextInnerHTML;
});
