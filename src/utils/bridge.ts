import { BehaviorSubject, filter } from "rxjs";
import { EventSubject, IEvent } from "./EventWrapper";

export enum ERoute {
  Resume = "",
  Projects = "projects",
  Misc = "misc",
  Contact = "contact",
}

export enum ELanguage {
  English = "English",
  Russian = "Русский",
  Chinese = "中文",
}

export enum Ids {
  RouteChange,
}

export interface IState {
  route: ERoute;
  language: ELanguage;
}

export const initialState: IState = {
  route: ERoute.Resume,
  language: ELanguage.English,
};

const StateSubject = new BehaviorSubject<IState>(initialState);

export const subscribeToStateChange = (fn: (state: IState) => void) =>
  StateSubject.subscribe(fn);

export const getCurrentState = () => StateSubject.getValue();
export const setState = (state: IState) => {
  const currentState = { ...getCurrentState() };
  const nextState = { ...currentState, ...state };
  EventSubject.next(["state", "", JSON.stringify(nextState)]);
};

EventSubject.subscribe(console.warn);

EventSubject.pipe(filter(([event]) => event === "state")).subscribe(
  async ([, , value]) => {
    if (!value) return;
    const nextState = JSON.parse(value);
    const currentState = getCurrentState();
    StateSubject.next({ ...currentState, ...nextState });
  }
);
