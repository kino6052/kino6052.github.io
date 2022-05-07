import "./styles.css";
import React from "react";
import styled from "styled-components";
import { links, tags } from "./data";
import { Navbar } from "./components/Navbar";
import { ProfilePage } from "./pages/ProfilePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectPage } from "./pages/ProjectPage";
import { MiscPage } from "./pages/MiscPage";
import { parsePath, translations, WIDTH } from "./utils/utils";
import { ERoute, IState } from "./utils/bridge";
import { ContactPage } from "./pages/ContactPage";
import { getProjectPages } from "./pages/ProjectPages";

export const App = styled(
  (props: React.InputHTMLAttributes<HTMLDivElement> & { state: IState }) => {
    const {
      state: { route, language },
    } = props;
    const parsedPath = parsePath(route);
    const isHomePage = route === "/";
    const isProjectsPage =
      parsedPath.length === 1 && parsedPath[0] === ERoute.Projects;
    const isProjectDescriptionPage =
      parsedPath.length > 1 && parsedPath[0] === ERoute.Projects;
    const isMiscPage = parsedPath[0] === ERoute.Misc;
    const isContactPage = parsedPath[0] === ERoute.Contact;
    console.warn(
      "Language",
      language
      // getProjectPages(language),
      // getProjectPages(language)[parsedPath[1]]
    );
    return (
      <div className={`app ${props.className}`}>
        <Navbar links={links} language={language} />
        {isHomePage && (
          <ProfilePage content={translations[language]["profilePage"]} />
        )}
        {isHomePage && <ExperiencePage />}
        <br />
        <br />
        <br />
        {isProjectDescriptionPage && getProjectPages(language)[parsedPath[1]]}
        {isProjectsPage && <ProjectPage />}
        {isMiscPage && <MiscPage />}
        {isContactPage && <ContactPage />}
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  b {
    margin: 0;
    color: #444;
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
  }

  h2 {
    font-size: 32px;
    line-height: 48px;
    font-weight: semi-bold;
  }

  b,
  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: semi-bold;
  }

  span {
    font-size: 16px;
  }

  .spacer {
    display: flex;
    padding: 8px;
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
  }

  .footer {
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
