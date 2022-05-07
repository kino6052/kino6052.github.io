import { ELanguage, ERoute, languageRouteMap } from "./bridge";
import { getProjectPages } from "../pages/ProjectPages";
import { BehaviorSubject } from "rxjs";

export const getLocationSubject = () => {
  const currentPath = window.location.pathname;
  const resultingPath = getResultingPath(getCurrentPathState(currentPath));
  if (currentPath !== resultingPath)
    window.history.pushState({}, "", resultingPath);

  const LocationSubject = new BehaviorSubject(resultingPath);

  setInterval(() => {
    const currentPath = LocationSubject.getValue();
    const nextPath = getResultingPath(
      getCurrentPathState(window.location.pathname)
    );

    if (nextPath !== currentPath) LocationSubject.next(nextPath);
  }, 100);

  return LocationSubject;
};

export const parsePath = (path: string) => {
  const result = path.split("/");
  return result.filter((v) => !!v);
};

interface IRouterState {
  route: ERoute;
  language: ELanguage;
  currentProject?: keyof ReturnType<typeof getProjectPages>;
}

const getLanguageByValue = (value: string) =>
  Object.entries(languageRouteMap).find(([, r]) => r === value)?.[0] as
    | ELanguage
    | undefined;

export const defaultState: IRouterState = {
  route: ERoute.Resume,
  language: getLanguageByValue(navigator.language) || ELanguage.English,
};

export const getResultingPath = (routerState: IRouterState) =>
  [
    languageRouteMap[routerState.language],
    routerState.route,
    routerState.currentProject,
  ]
    .filter((v) => !!v)
    .reduce((acc, v) => {
      return `${acc}/${v}`;
    }, "") || "/en/";

export const getCurrentPathState = (path: string): IRouterState => {
  const parsedPath = parsePath(path);
  const projects = getProjectPages(ELanguage.English);
  return parsedPath.reduce((acc, v, i) => {
    const conditionalLanguage =
      i === 0 && v && v.length == 2 && (getLanguageByValue(v) || undefined);
    const conditionalFirstLevelRoute =
      [0, 1].includes(i) &&
      Object.values(ERoute as object).find((r) => r === v);
    const conditionalSecondLevelRoute =
      !!acc.route && Object.keys(projects).find((r) => r === v);

    if (conditionalLanguage) return { ...acc, language: conditionalLanguage };
    if (conditionalFirstLevelRoute)
      return {
        ...acc,
        route: v as ERoute,
      };
    if (conditionalSecondLevelRoute)
      return {
        ...acc,
        currentProject: v as keyof typeof projects,
      };

    return acc;
  }, defaultState);
};
