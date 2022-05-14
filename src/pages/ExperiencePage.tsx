import React from "react";
import { getCareer, getEducation, getLanguages, getSkills } from "../data";
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
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="pagebreak"></div>
    <section className="container">
      <h2>{translations[language].profilePage.experience.list[1].subtitle}</h2>
      <Table isZebra table={getEducation(language)} />
    </section>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <section className="container">
      <h2>{translations[language].profilePage.experience.list[2].subtitle}</h2>
      <Table isZebra table={getSkills(language)} className="dashed" />
    </section>
    <div className="pagebreak"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <section className="container">
      <h2>{translations[language].profilePage.languages.title}</h2>
      <Table isZebra table={getLanguages(language)} className="dashed" />
    </section>
    <div className="spacer"></div>
    <div className="spacer"></div>
    <div className="spacer"></div>
  </>
);
