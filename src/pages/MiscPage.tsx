import React from "react";
import styled from "styled-components";
import { CardContainer, ICard } from "../components/CardContainer";
import { ELanguage } from "../utils/bridge";
import { interpolate, processMarkup, translations } from "../utils/utils";

const getOther = (language: ELanguage): ICard[] => [
  {
    title: translations[language].misc.sections[3].projects?.[0].title || "",
    subtitle:
      translations[language].misc.sections[3].projects?.[0].subtitle || "",
    description:
      translations[language].misc.sections[3].projects?.[0].snippet || "",
    url: "https://levelup.gitconnected.com/kirill-novik-career-is-not-always-linear-it-is-a-journey-or-a-lab-experiment-132a72e74f4f",
    imageUrl: "/images/misc/article.png",
  },
  {
    title: translations[language].misc.sections[3].projects?.[1].title || "",
    subtitle:
      translations[language].misc.sections[3].projects?.[1].subtitle || "",
    description:
      translations[language].misc.sections[3].projects?.[1].snippet || "",
    url:
      language === ELanguage.Russian
        ? "https://zen.yandex.ru/media/id/5b0f13489f43477a6c509028/kto-takoi-horoshii-programmist-6286f2403e78be4dd6728939?&"
        : "https://medium.com/@kirill-novik/what-makes-a-good-programmer-82adaefba4a",
    imageUrl: "/images/misc/unicorn.webp",
  },
];

const frontEndBlog: ICard[] = [
  {
    title: "React + RxJS",
    subtitle: "How React is meant to be",
    description: "Opinion on State Management",
    url: "https://soshace.com/react-hooks-rxjs-or-how-react-is-meant-to-be/",
    imageUrl: "/images/misc/react+rxjs.jpg",
  },
  {
    title: "React TDD",
    subtitle: "Test Driven Development in React",
    description: "Opinion on TDD in React",
    url: "https://kirill-novik.medium.com/test-driven-development-and-react-347487c9610a",
    imageUrl: "/images/misc/tdd.png",
  },
  {
    title: "I Don't Like GraphQL",
    subtitle: "So How About JSON and TS?",
    description: "Opinion on Declarative Data Access",
    url: "https://kirill-novik.medium.com/i-dont-like-graphql-so-how-about-json-and-typescript-69765ca9e620",
    imageUrl: "/images/misc/graphql.png",
  },
  {
    title: "My Experience with WebRTC",
    subtitle: "Some Lessons Learned",
    description: "Sharing WebRTC lessons learned",
    url: "https://kirill-novik.medium.com/my-experiences-getting-started-with-webrtc-5a7dd9c26df5",
    imageUrl: "/images/misc/webrtc.png",
  },
];

const machineLearningBlog: ICard[] = [
  {
    title: "Support Vector Machine",
    subtitle: "Dissecting My Confusion",
    description: "Retrospective Notes on the Concept",
    url: "https://medium.com/codex/dissecting-my-confusion-svm-6a793cc378c0",
    imageUrl: "/images/misc/terminator.webp",
  },
  {
    title: "KRR is My Favorite Subject",
    subtitle: "In Computer Science",
    description: "Retrospective Notes",
    url: "https://kirill-novik.medium.com/why-knowledge-representation-and-reasoning-is-my-favorite-subject-in-computer-science-978fb8d2c72a",
    imageUrl: "/images/misc/krr.jpg",
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
      <div className="spacer"></div>
      <p>{translations[language].misc.sections[0].description?.[1]}</p>
      <div className="spacer"></div>
      <h2>{translations[language].misc.sections[1].title}</h2>
      <div className="spacer"></div>
      <CardContainer cards={frontEndBlog} />
      <div className="spacer"></div>
      <h2>{translations[language].misc.sections[2].title}</h2>
      <div className="spacer"></div>
      <CardContainer cards={machineLearningBlog} />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <h2>{translations[language].misc.sections[3].title}</h2>
      <p>{translations[language].misc.sections[3].description?.[0]}</p>
      <div className="spacer"></div>
      <p>
        {interpolate(
          translations[language].misc.sections[3].description?.[1] as string,
          {
            link: (
              <a
                href="https://soshace.com/aboutus"
                target="_blank"
                rel="noreferrer"
              >
                {translations[language].misc.sections[3].link}
              </a>
            ),
          }
        )}
      </p>
      <div className="spacer"></div>
      <CardContainer cards={getOther(language)} />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <h2>{translations[language].misc.sections[4].title}</h2>
      <p>{translations[language].misc.sections[4].description?.[0]}</p>
      <div className="spacer"></div>
      <h3>{translations[language].misc.sections[4].description?.[1][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[1][1]}</p>
      <div className="spacer"></div>
      <h3>{translations[language].misc.sections[4].description?.[2][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[2][1]}</p>
      <div className="spacer"></div>
      <p>{translations[language].misc.sections[4].description?.[2][2]}</p>
      <div className="spacer"></div>
      <h3>{translations[language].misc.sections[4].description?.[3][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[3][1][0]}</p>
      <a
        href="https://soundcloud.com/kirill-novik"
        target="_blank"
        rel="noreferrer"
      >
        {translations[language].misc.sections[4].description?.[3][1][1]}
      </a>
      <div className="spacer"></div>
      <h3>{translations[language].misc.sections[4].description?.[4][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[4][1][0]}</p>
      <div className="spacer"></div>
      <p>
        {interpolate(
          translations[language].misc.sections[4]
            .description?.[4][1][1][0] as string,
          {
            link: (
              <a
                href="https://medium.com/math-simplified/twin-prime-conjecture-proof-ef4b5c2c65e0"
                target="_blank"
                rel="noreferrer"
              >
                {
                  translations[language].misc.sections[4]
                    .description?.[4][1][1][1]
                }
              </a>
            ),
          }
        )}{" "}
      </p>
      <div className="spacer"></div>
      <h3>{translations[language].misc.sections[4].description?.[5][0]}</h3>
      <p>{translations[language].misc.sections[4].description?.[5][1]}</p>
      <div className="spacer"></div>
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
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
  </>
);
