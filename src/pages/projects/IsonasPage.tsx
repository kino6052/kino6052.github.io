import React from "react";
import { Image } from "../../components/Image";
import { translations } from "../../utils/utils";

export const IsonasPage: React.FC<
  React.InputHTMLAttributes<unknown> & {
    content: typeof translations[string]["projectPages"]["isonas"];
  }
> = ({ content }) => (
  <>
    {/*  */}
    <section className="container">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <div className="spacer"></div>
      <div style={{ display: "flex" }}>
        <Image src="/isonas.jpg" caption={content.imageCaption} />
      </div>
      <div className="spacer"></div>
      <p>{content.paragraph1}</p>
      <div className="spacer"></div>
      <p>{content.paragraph2}</p>
      <div className="spacer"></div>
      <p>{content.paragraph3}</p>
      <div className="spacer"></div>
      {/* <a href="https://www.discounttire.com/" target="_blank" rel="noreferrer">
        {content.link}
      </a> */}
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
  </>
);
