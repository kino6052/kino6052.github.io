import React from "react";
import { Image } from "../../components/Image";
import { translations } from "../../utils/utils";

export const MedtronicPage: React.FC<
  React.InputHTMLAttributes<unknown> & {
    content: typeof translations[string]["projectPages"]["medtronic"];
  }
> = ({ content }) => (
  <>
    {/*  */}
    <section className="container">
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <div className="spacer"></div>
      <div style={{ display: "flex" }}>
        <Image
          src="/medtronic.webp"
          caption={content.imageCaption}
          isFullWidth
        />
      </div>
      <div className="spacer"></div>
      <p>{content.paragraph1}</p>
      <div className="spacer"></div>
      {/* <a href="https://www.discounttire.com/" target="_blank" rel="noreferrer">
        {content.link}
      </a> */}
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
  </>
);
