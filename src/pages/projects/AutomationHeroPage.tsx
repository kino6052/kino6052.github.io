import React from "react";
import { Image } from "../../components/Image";
import { translations } from "../../utils/utils";

export const AutomationHeroPage: React.FC<
  React.InputHTMLAttributes<unknown> & {
    content: typeof translations[string]["projectPages"]["automation-hero"];
  }
> = ({ content }) => (
  <>
    {/*  */}
    <section className="container">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <br />
      <div style={{ display: "flex" }}>
        <Image
          src="https://images.g2crowd.com/uploads/attachment/file/115914/mockup-screen-aistudio.jpg"
          caption={content.imageCaption}
          width={250}
        />
      </div>
      <br />
      <p>{content.paragraph1}</p>
      <br />
      <p>{content.paragraph2}</p>
      {/* <ul>
        {content.features.map((v) => (
          <li>{v}</li>
        ))}
      </ul>
      <br />
      <p>{content.paragraph3}</p>
      <br />
      <a href="https://www.discounttire.com/" target="_blank" rel="noreferrer">
        {content.link}
      </a> */}
      <br />
      <br />
    </section>
  </>
);
