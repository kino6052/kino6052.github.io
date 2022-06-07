import React from "react";
import styled from "styled-components";
import { GithubIcon } from "./components/icons/GithubIcon";
import { LinkedinIcon } from "./components/icons/LinkedinIcon";
import { Navbar } from "./components/Navbar";
import { links } from "./data";
import { ContactPage } from "./pages/ContactPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { MiscPage } from "./pages/MiscPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProjectPage } from "./pages/ProjectPage";
import { getProjectPages } from "./pages/ProjectPages";
import "./styles.css";
import { ERoute, IState } from "./utils/bridge";
import { getCurrentPathState } from "./utils/router";
import { translations, WIDTH } from "./utils/utils";

export const App = styled(
  (props: React.InputHTMLAttributes<HTMLDivElement> & { state: IState }) => {
    const {
      state: {
        imageSrc,
        path,
        language,
        hasSubmitted,
        isOpen,
        email,
        firstName,
        lastName,
        message,
        subject,
      },
    } = props;
    const { route, currentProject } = getCurrentPathState(path);
    const projectPages = getProjectPages(language);
    return (
      <div className={`app ${props.className}`}>
        <Navbar
          links={links}
          language={language}
          isOpen={isOpen}
          selection={route}
        />
        {route === ERoute.Resume && (
          <ProfilePage
            content={translations[language]["profilePage"]}
            imageSrc={imageSrc}
          />
        )}
        {route === ERoute.Resume && <ExperiencePage language={language} />}
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        {currentProject && projectPages[currentProject]}
        {!currentProject && route === ERoute.Projects && (
          <ProjectPage language={language} />
        )}
        {route === ERoute.Misc && <MiscPage language={language} />}
        {route === ERoute.Contact && (
          <ContactPage
            hasSubmitted={hasSubmitted}
            language={language}
            state={{
              email,
              firstName,
              lastName,
              subject,
              message,
            }}
          />
        )}
        <div className="footer">
          <div className="footer-content">Copyright 2022</div>
          <a
            href="https://github.com/kino6052/"
            rel="noreferrer"
            target="_blank"
            aria-label="Link to my github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kirill-novik-07882762/"
            rel="noreferrer"
            target="_blank"
            aria-label="Link to my linkedin"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    );
  }
)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: system-ui, "Open Sans", sans-serif;
  min-height: 100vh;
  overflow: hidden;

  @media print {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  a,
  p,
  b {
    margin: 0;
    color: #444;
    word-break: break-word;
  }

  ul {
    margin: 0;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  input,
  textarea,
  button {
    font-family: system-ui, "Open Sans", sans-serif;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: bold;
    line-height: 4rem;

    @media print {
      font-size: 2rem;
      line-height: 2.2rem;
      margin-bottom: 8px;
    }
  }

  h2 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 600;

    @media print {
      font-size: 1.5rem;
      line-height: 1.7rem;
      margin-bottom: 8px;
    }
  }

  b,
  p,
  a,
  li {
    font-size: 1.2rem;
    line-height: 1.5rem;

    @media print {
      font-size: 1.2rem;
      line-height: auto;
    }
  }

  span {
    font-size: 1.2rem;
  }

  .spacer {
    display: flex;
    padding: 8px;

    @media print {
      padding: 8px;
    }
  }

  .container {
    display: flex;
    width: ${WIDTH}px;
    flex-grow: 1;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: ${WIDTH}px) {
      width: 100%;
      padding: 16px;
    }

    @media print {
      display: block;
      padding: 0 16px;
    }
  }

  .footer {
    @media print {
      display: none;
    }

    display: flex;
    box-sizing: border-box;
    height: 48px;
    background: #333;
    width: 100%;
    color: white;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    a {
      display: inline-flex;
      margin: 0 4px;
      padding: 0;
      svg {
        width: 32px;
        height: 32px;
      }
    }

    .footer-content {
      display: flex;
      width: ${WIDTH}px;
    }
  }
`;
