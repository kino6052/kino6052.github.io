import React from "react";
import { filter } from "rxjs/operators";
import styled from "styled-components";
import { ELanguage, ERoute, Ids, setState } from "./bridge";
import { EventSubject, EventWrapper } from "./EventWrapper";
import { languageOptions, WIDTH } from "./utils";

EventSubject.pipe(
  filter(([event, id]) => event === "click" && id === `${Ids.RouteChange}`)
).subscribe(([, , path]) => window.history.pushState({}, "", path));

EventSubject.pipe(
  filter(([event, id]) => event === "change" && id === "language")
).subscribe(([, , language]) => {
  setState({ language: language as ELanguage });
});

export const Navbar = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      links: [string, ERoute][];
      language: ELanguage;
    }
  ) => (
    <nav className={`menu ${props.className}`}>
      <ul>
        {props.links.map((link) => (
          <li>
            <EventWrapper id={`${Ids.RouteChange}`} value={link[1]}>
              <a href={link[1]}>{link[0]}</a>
            </EventWrapper>
          </li>
        ))}
        <li>
          <EventWrapper id={"language"}>
            <select value={props.language}>
              {languageOptions.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </EventWrapper>
        </li>
      </ul>
    </nav>
  )
)`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  background: #333;
  justify-content: center;

  select {
    display: inline-flex;
    flex-grow: 1;
    height: 32px;
    margin: 0;
    padding: 0 8px;
    border-radius: 128px;
    box-sizing: border-box;
    width: 48px;
  }

  ul {
    width: ${WIDTH}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;

    li {
      display: inline-flex;
      flex-grow: 1;
      justify-content: center;

      a {
        display: inline-flex;
        color: white;
        text-decoration: none;
        font-size: 16px;
        line-height: 16px;
        font-weight: semi-bold;
      }
    }
  }
`;
