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
    imageUrl:
      "https://s3-us-west-2.amazonaws.com/drupal-assets/batonrouge/styles/hero_1440x530/s3-files/images-hero/offers/32898%20BBR%20AAA%20Images%20for%20Website%20WB%201440x530_1.jpg?itok=Wvi5WQ_V",
    url: `/projects/csaa`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages["discount-tire"].title,
    subtitle: translations[language].projectPages["discount-tire"].subtitle,
    description: translations[language].projectPages["discount-tire"].snippet,
    imageUrl:
      "https://pbs.twimg.com/profile_images/1243577157193846785/FNjTpDRU_400x400.png",
    url: `/projects/discount-tire`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages["automation-hero"].title,
    subtitle: translations[language].projectPages["automation-hero"].subtitle,
    description: translations[language].projectPages["automation-hero"].snippet,
    imageUrl:
      "https://automationhero.ai/wp-content/uploads/2019/11/PressRelease-02.jpg",
    url: `/projects/automation-hero`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.alphabank.title,
    subtitle: translations[language].projectPages.alphabank.subtitle,
    description: translations[language].projectPages.alphabank.snippet,
    imageUrl:
      "data:image/png;base64,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",
    url: `/projects/alphabank`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.isonas.title,
    subtitle: translations[language].projectPages.isonas.subtitle,
    description: translations[language].projectPages.isonas.snippet,
    imageUrl:
      "https://www.sdmmag.com/ext/resources/video/Isonas-Logo-Tagline-Spot-web.gif?height=635&t=1586276366&width=1200",
    url: `/projects/isonas`,
    shouldStay: true,
  },
  {
    title: translations[language].projectPages.medtronic.title,
    subtitle: translations[language].projectPages.medtronic.subtitle,
    description: translations[language].projectPages.medtronic.snippet,
    imageUrl: "https://dev.rodpub.com/images/150/429_main.jpg",
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
    imageUrl: "/pictures.jpg",
    url: `https://kino6052.github.io/picturesOfYou`,
  },
  {
    title: translations[language].projectPages.pipBoy.title,
    subtitle: translations[language].projectPages.pipBoy.subtitle,
    description: translations[language].projectPages.pipBoy.snippet,
    imageUrl: "/pipboy.jpg",
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
