import React from "react";
import { career, education, languages, skills } from "../data";
import { Table } from "../components/Table";

export const ExperiencePage = () => (
  <>
    <section className="container">
      <h1>Experience</h1>
      <h2>Career</h2>
      <Table table={career} />
    </section>
    <section className="container">
      <h2>Education</h2>
      <Table isZebra table={education} />
    </section>
    <section className="container">
      <h2>Skills</h2>
      <Table isZebra table={skills} />
    </section>
    <section className="container">
      <h2>Languages</h2>
      <Table isZebra table={languages} />
    </section>
    <br />
    <br />
    <br />
  </>
);
