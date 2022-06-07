import React from "react";
import { filter, tap } from "rxjs/operators";
import styled from "styled-components";
import {
  ELanguage,
  ERoute,
  getCurrentState,
  Id,
  languageRouteMap,
  setState,
} from "../utils/bridge";
import { EventSubject, EventWrapper } from "../utils/EventWrapper";
import { getCurrentPathState, getResultingPath } from "../utils/router";
import { languageOptions, translations, WIDTH, zIndex } from "../utils/utils";

EventSubject.pipe(
  filter(([event, id]) => event === "click" && id === `${Id.RouteChange}`)
).subscribe(([, , path]) => {
  const { language } = getCurrentState();
  const route = languageRouteMap[language] || "";
  const subpath = (route && `/${route}`) || "";
  window.history.pushState({}, "", `${subpath}${path}`);
});

EventSubject.pipe(
  filter(([event, id]) => event === "change" && id === "language")
).subscribe(([, , language]) => {
  const state = getCurrentPathState(window.location.pathname);
  const resultingPath = getResultingPath({
    ...state,
    language: language as ELanguage,
  });
  window.history.pushState({}, "", resultingPath);
  setState({ language: language as ELanguage });
});

EventSubject.pipe(
  filter(
    ([event, id]) =>
      event === "click" &&
      [Id.RouteChange, Id.ToggleMenu].includes(id as unknown as Id)
  )
).subscribe(([, id]) => {
  const { isOpen } = getCurrentState();
  if (!isOpen && id === Id.RouteChange) return;
  setState({ isOpen: !isOpen });
});

const Icon = styled(
  (props: React.InputHTMLAttributes<unknown> & { src: string }) => (
    <div {...props} className={`${props.className}`}></div>
  )
)`
  display: inline-flex;
  height: 20px;
  width: 27px;
  background-size: cover;
  background-image: url(/icons/${({ src }) => src}.svg);
  background-repeat: no-repeat;
`;

const iconMap = {
  [ELanguage.Russian]: "ru",
  [ELanguage.Chinese]: "cn",
  [ELanguage.English]: "en",
};

export const Navbar = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      links: [string, ERoute][];
      selection: ERoute;
      language: ELanguage;
      isOpen?: boolean;
    }
  ) => (
    <nav className={`menu ${props.className}`}>
      <EventWrapper id={`${Id.ToggleMenu}`}>
        <button className="hamburger">
          <span
            className={`main-nav-toggle ${props.isOpen ? "active-menu" : ""}`}
          >
            <i>Menu</i>
          </span>
        </button>
      </EventWrapper>
      <ul className={props.isOpen ? "open" : "close"}>
        {props.links.map((link, i) => (
          <li className={link[1] === props.selection ? "selected" : ""}>
            <EventWrapper id={`${Id.RouteChange}`} value={`/${link[1]}`}>
              <a href={`/${link[1]}`}>
                {Object.entries(translations[props.language].menu)[i][1]}
              </a>
            </EventWrapper>
          </li>
        ))}
        <li>
          <EventWrapper id={"language"}>
            <div className="icon-container">
              <Icon
                className="icon"
                src={iconMap[props.language as ELanguage]}
              />
            </div>
            <select value={props.language}>
              {languageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </EventWrapper>
        </li>
      </ul>
    </nav>
  )
)`
  @media print {
    display: none;
  }

  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  background: #333;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.nav};

  .hamburger {
    display: none;
    @media (max-width: ${WIDTH}px) {
      cursor: pointer;
      display: inline-flex;
      position: absolute;
      right: 24px;
      height: 26px;
      align-items: center;
      background: none;
      border: none;

      .main-nav-toggle {
        display: block;
        width: 28px;
        height: 16px;
        position: relative;

        &:after,
        &:before {
          content: "";
          position: absolute;
          top: 0;
          height: 0;
          border-bottom: 4px solid #bbb;
          width: 100%;
          left: 0;
          right: 0;
          transition: all ease-out 0.3s;
        }

        &:after {
          top: 100%;
        }

        i {
          display: block;
          text-indent: 100%;
          overflow: hidden;
          white-space: nowrap;
          height: 4px;
          background-color: #bbb;
          width: 100%;
          position: absolute;
          top: 50%;
          transition: all ease-out 0.1s;
        }

        &.active-menu {
          &:after {
            transform: rotate(-45deg);
            transform-origin: center;
            top: 50%;
          }

          &:before {
            transform: rotate(45deg);
            transform-origin: center;
            top: 50%;
          }

          i {
            opacity: 0;
          }
        }
      }
    }
  }

  select {
    display: inline-flex;
    height: 32px;
    margin: 0 8px;
    padding: 0 8px;
    border-radius: 128px;
    box-sizing: border-box;
    width: 8rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  ul {
    margin-top: 0 !important;

    @media (max-width: ${WIDTH}px) {
      &.close {
        display: none;
      }
      &.open {
        display: flex;
        position: absolute;
        top: 48px;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background: #333;
        padding-top: 24px;

        & li {
          display: flex;
          flex-shrink: 1;
          height: 64px;
          width: 140px;
          max-height: 56px;

          &.selected {
            width: 100%;
          }
        }
      }
    }

    height: 100%;
    width: ${WIDTH}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    &.close {
      margin-bottom: 0;
    }

    li {
      display: inline-flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;
      height: 100%;

      &.selected {
        background: #ffffff1a;
        & > a {
          font-weight: 400;
        }
      }

      a {
        display: inline-flex;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 400;
      }

      & .icon-container {
        display: flex;
        width: 0px;
        overflow: visible;
        .icon {
          pointer-events: none;
          position: relative;
          left: 5.25rem;
          border: 1px solid grey;
          min-width: 27px;
        }
      }
    }
  }
`;
