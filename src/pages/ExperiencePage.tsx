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
    <section className="container">
      <h2>Education</h2>
      <Table isZebra table={getEducation(language)} />
    </section>
    <section className="container">
      <h2>Skills</h2>
      <Table isZebra table={skills} />
    </section>
    <section className="container">
      <h2>{translations[language].profilePage.languages.title}</h2>
      <Table isZebra table={getLanguages(language)} />
    </section>
    <br />
    <br />
    <br />
  </>
);
