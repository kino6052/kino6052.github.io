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

export const languageRouteMap = {
  [ELanguage.Chinese]: "ch",
  [ELanguage.English]: "en",
  [ELanguage.Russian]: "ru",
};

export enum Id {
  RouteChange = "route-change",
  ToggleMenu = "toggle-menu",
}

export interface IState {
  path: string;
  language: ELanguage;
  hasSubmitted: boolean;
  isOpen: boolean;
}

export const initialState: IState = {
  path: ERoute.Resume,
  language: ELanguage.English,
  hasSubmitted: false,
  isOpen: false,
};

const StateSubject = new BehaviorSubject<IState>(initialState);

export const subscribeToStateChange = (fn: (state: IState) => void) =>
  StateSubject.subscribe(fn);

export const getCurrentState = () => StateSubject.getValue();
export const setState = (state: Partial<IState>) => {
  const currentState = { ...getCurrentState() };
  const nextState = { ...currentState, ...state };
  EventSubject.next(["state", "", JSON.stringify(nextState)]);
};

EventSubject.pipe(filter(([event]) => event === "state")).subscribe(
  async ([, , value]) => {
    if (!value) return;
    const nextState = JSON.parse(value);
    const currentState = getCurrentState();
    StateSubject.next({ ...currentState, ...nextState });
  }
);
