import React from "react";
import styled from "styled-components";
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
  }

  input,
  textarea,
  button {
    font-family: system-ui, "Open Sans", sans-serif;
    font-size: 16px;
  }

  h1 {
    font-size: 64px;
    font-weight: bold;
    line-height: 64px;

    @media print {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 8px;
    }
  }

  h2 {
    font-size: 32px;
    line-height: 48px;
    font-weight: semi-bold;

    @media print {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 8px;
    }
  }

  b,
  p,
  a,
  li {
    font-size: 18px;
    line-height: 26px;
    font-weight: semi-bold;

    @media print {
      font-size: 18px;
      line-height: auto;
    }
  }

  span {
    font-size: 16px;
  }

  .spacer {
    display: flex;
    padding: 8px;

    @media print {
      padding: 8px;
    }
  }

  .pagebreak {
    // break-after: always;
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
    padding: 16px;
    box-sizing: border-box;
    height: 48px;
    background: #333;
    width: 100%;
    color: white;
    justify-content: center;

    .footer-content {
      display: flex;
      width: ${WIDTH}px;
    }
  }
`;
