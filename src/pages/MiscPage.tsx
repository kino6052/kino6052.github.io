import React from "react";
import styled from "styled-components";
import { CardContainer, ICard } from "../components/CardContainer";
import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";

const other: ICard[] = [
  {
    title: "Interview Article",
    subtitle: "Level Up Coding Publication",
    description: "Interviewed by Marina Vorontsova",
    url: "https://levelup.gitconnected.com/kirill-novik-career-is-not-always-linear-it-is-a-journey-or-a-lab-experiment-132a72e74f4f",
    imageUrl: "https://miro.medium.com/max/1400/1*YdNh4UOlefbG1tAXFp7LLg.png",
  },
];

const frontEndBlog: ICard[] = [
  {
    title: "React + RxJS",
    subtitle: "How React is meant to be",
    description: "Opinion on State Management",
    url: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/",
    imageUrl:
      "https://soshace.com/wp-content/uploads/2019/07/React-Hooks-RxJS-or-How-React-Is-Meant-to-Be-react-ecosystem.jpg",
  },
  {
    title: "React TDD",
    subtitle: "Test Driven Development in React",
    description: "Opinion on TDD in React",
    url: "https://kirill-novik.medium.com/test-driven-development-and-react-347487c9610a",
    imageUrl:
      "https://blogs.zeiss.com/digital-innovation/de/wp-content/uploads/sites/2/2015/04/201504_Test_Driven_Development_2_neu_fi.png",
  },
  {
    title: "I Don't Like GraphQL",
    subtitle: "So How About JSON and TS?",
    description: "Opinion on Declarative Data Access",
    url: "https://kirill-novik.medium.com/i-dont-like-graphql-so-how-about-json-and-typescript-69765ca9e620",
    imageUrl: "https://miro.medium.com/max/670/1*KFlPmF76jX_m7-iGNL5c0g.png",
  },
  {
    title: "My Experience with WebRTC",
    subtitle: "Some Lessons Learned",
    description: "Sharing WebRTC lessons learned",
    url: "https://kirill-novik.medium.com/my-experiences-getting-started-with-webrtc-5a7dd9c26df5",
    imageUrl: "https://miro.medium.com/max/700/0*vzViH1oTnBSymXrN.png",
  },
];

const machineLearningBlog: ICard[] = [
  {
    title: "React + RxJS",
    subtitle: "How React is meant to be",
    description: "Opinion on State Management",
    url: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/",
    imageUrl:
      "https://soshace.com/wp-content/uploads/2019/07/React-Hooks-RxJS-or-How-React-Is-Meant-to-Be-react-ecosystem.jpg",
  },
];

export const MiscPage: React.FC<
  React.InputHTMLAttributes<unknown> & { language: ELanguage }
> = ({ language }) => (
  <>
    <section className="container">
      <h1>{translations[language].misc.title}</h1>
      <h2>{translations[language].misc.sections[0].title}</h2>
      <p>{translations[language].misc.sections[0].description?.[0]}</p>
      <br />
      <p>{translations[language].misc.sections[0].description?.[1]}</p>
      <br />
      <h2>{translations[language].misc.sections[1].title}</h2>
      <br />
      <CardContainer cards={frontEndBlog} />
      <br />
      <h2>{translations[language].misc.sections[2].title}</h2>
      <br />
      <CardContainer cards={machineLearningBlog} />
      <br />
      <br />
      <br />
      <h2>{translations[language].misc.sections[3].title}</h2>
      <p>{translations[language].misc.sections[3].description?.[0]}</p>
      <br />
      <p>
        <a href="https://soshace.com/aboutus" target="_blank" rel="noreferrer">
          {translations[language].misc.sections[3].link}
        </a>{" "}
        {translations[language].misc.sections[3].description?.[1]}
      </p>
      <br />
      <CardContainer cards={other} />
      <br />
      <br />
      <h2>{translations[language].misc.sections[4].title}</h2>
      <p>{translations[language].misc.sections[4].description?.[0]}</p>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[1][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[1][1]}</p>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[2][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[2][1]}</p>
      <br />
      <p>{translations[language].misc.sections[4].description?.[2][2]}</p>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[3][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[3][1]}</p>
      <a
        href="https://soundcloud.com/kirill-novik"
        target="_blank"
        rel="noreferrer"
      >
        {translations[language].misc.sections[4].description?.[3][2]}
      </a>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[4][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[4][1][0]}</p>
      <br />
      <p>
        {translations[language].misc.sections[4].description?.[4][1][1][0]}{" "}
        <a
          href="https://medium.com/math-simplified/twin-prime-conjecture-proof-ef4b5c2c65e0"
          target="_blank"
          rel="noreferrer"
        >
          {translations[language].misc.sections[4].description?.[4][1][1][1]}
        </a>
        .
      </p>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[5][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[5][1]}</p>
      <br />
      <h3>{translations[language].misc.sections[4].description?.[6][0]}</h3>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.canva.com/design/DADq1XGg6M8/0aNlIyfMxS4a1HGAoa40uw/view?utm_content=DADq1XGg6M8&utm_campaign=designshare&utm_medium=link&utm_source=postdownload#1"
        >
          {translations[language].misc.sections[4].description?.[6][1][0]}
        </a>{" "}
        {translations[language].misc.sections[4].description?.[6][1][1]}
      </p>
      <br />
      <br />
    </section>
    <br />
    <br />
    <br />
  </>
);
