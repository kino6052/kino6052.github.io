import React from "react";
import {
  career,
  education,
  getCareer,
  getEducation,
  getLanguages,
  languages,
  skills,
} from "../data";
import { Table } from "../components/Table";
import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";

export const ExperiencePage: React.FC<
  React.InputHTMLAttributes<unknown> & { language: ELanguage }
> = ({ language }) => (
  <>
    <section className="container">
      <h1>{translations[language].profilePage.experience.title}</h1>
      <h2>{translations[language].profilePage.experience.list[0].subtitle}</h2>
      <Table table={getCareer(language)} />
    </section>
    <br />
    <br />
    <section className="container">
      <h2>{translations[language].profilePage.experience.list[1].subtitle}</h2>
      <Table isZebra table={getEducation(language)} />
    </section>
    <br />
    <br />
    <section className="container">
      <h2>{translations[language].profilePage.experience.list[2].subtitle}</h2>
      <Table isZebra table={skills} />
    </section>
    <br />
    <br />
    <section className="container">
      <h2>{translations[language].profilePage.languages.title}</h2>
      <Table isZebra table={getLanguages(language)} />
    </section>
    <br />
    <br />
    <br />
  </>
);
