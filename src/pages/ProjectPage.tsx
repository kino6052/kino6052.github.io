import React from "react";
import { CardContainer, ICard } from "../components/CardContainer";
import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";
import { getProjectPages } from "./ProjectPages";

const projectPages = getProjectPages(ELanguage.English);

const getCommercialProjects = (language: ELanguage): ICard[] => [
  {
    title: translations[language].projectPages.csaa.title,
    subtitle: translations[language].projectPages.csaa.subtitle,
    description: translations[language].projectPages.csaa.snippet,
    imageUrl: "/images/projects/commercial/csaa-cover.jpg",
    url: `/projects/csaa`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages["discount-tire"].title,
    subtitle: translations[language].projectPages["discount-tire"].subtitle,
    description: translations[language].projectPages["discount-tire"].snippet,
    imageUrl: "/images/projects/commercial/discount-tire-cover.png",
    url: `/projects/discount-tire`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages["automation-hero"].title,
    subtitle: translations[language].projectPages["automation-hero"].subtitle,
    description: translations[language].projectPages["automation-hero"].snippet,
    imageUrl: "/images/projects/commercial/automation-hero-cover.webp",
    url: `/projects/automation-hero`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.alphabank.title,
    subtitle: translations[language].projectPages.alphabank.subtitle,
    description: translations[language].projectPages.alphabank.snippet,
    imageUrl: "/images/projects/commercial/alphabank-cover.png",
    url: `/projects/alphabank`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.isonas.title,
    subtitle: translations[language].projectPages.isonas.subtitle,
    description: translations[language].projectPages.isonas.snippet,
    imageUrl: "/images/projects/commercial/isonas-cover.gif",
    url: `/projects/isonas`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.medtronic.title,
    subtitle: translations[language].projectPages.medtronic.subtitle,
    description: translations[language].projectPages.medtronic.snippet,
    imageUrl: "/images/projects/commercial/medtronic-cover.jpg",
    url: `/projects/medtronic`,
    shouldStay: true,
  },
];

const personalProjects: ICard[] = [
  {
    title: "NodeJS Server",
    subtitle: "How to make things easy!",
    description: "Here is an example of a good server",
    imageUrl: "https://icon-library.com/images/nodejs-icon/nodejs-icon-2.jpg",
    url: `/projects/${Object.keys(projectPages || {})[0]}`,
    shouldStay: true,
  },
];

const getStudentProjects = (language: ELanguage): ICard[] => [
  // {
  //   title: "CashTag",
  //   subtitle: "Big Data Projects",
  //   description: "Visualization of StockTwits Service",
  //   imageUrl: "https://icon-library.com/images/nodejs-icon/nodejs-icon-2.jpg",
  //   url: `/projects/${Object.keys(projectPages || {})[0]}`,
  //   shouldStay: true,
  // },
  {
    title: translations[language].projectPages.picturesOfYou.title,
    subtitle: translations[language].projectPages.picturesOfYou.subtitle,
    description: translations[language].projectPages.picturesOfYou.snippet,
    imageUrl: "/images/projects/student/pictures.jpg",
    url: `https://kino6052.github.io/picturesOfYou`,
  },
  {
    title: translations[language].projectPages.pipBoy.title,
    subtitle: translations[language].projectPages.pipBoy.subtitle,
    description: translations[language].projectPages.pipBoy.snippet,
    imageUrl: "/images/projects/student/pipboy.jpg",
    url: `https://kino6052.github.io/pipboy`,
  },
];

export const ProjectPage: React.FC<
  React.InputHTMLAttributes<unknown> & { language: ELanguage }
> = ({ language }) => (
  <>
    <section className="container">
      <h1>{translations[language].projectsPage.title}</h1>
      <h2>{translations[language].projectsPage.sections[0].title}</h2>
      <p>{translations[language].projectsPage.sections[0].description}</p>
      <div className="spacer"></div>
      <CardContainer cards={getCommercialProjects(language)} />
      <div className="spacer"></div>
      <h2>{translations[language].projectsPage.sections[1].title}</h2>
      <p>{translations[language].projectsPage.sections[1].description}</p>
      <div className="spacer"></div>
      <CardContainer cards={getStudentProjects(language)} />
      <div className="spacer"></div>
      {/* <h2>Personal Projects</h2>
      <p>
        Here are some projects that demonstrate my skill and understanding of
        various aspects of web-development.
      </p>
      <div className="spacer"></div>
      <CardContainer cards={personalProjects} />
      <div className="spacer"></div> */}
    </section>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
  </>
);
