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
      <br />
      <div style={{ display: "flex" }}>
        <Image
          src="/medtronic.webp"
          caption={content.imageCaption}
          isFullWidth
        />
      </div>
      <br />
      <p>{content.paragraph1}</p>
      <br />
      {/* <a href="https://www.discounttire.com/" target="_blank" rel="noreferrer">
        {content.link}
      </a> */}
      <br />
      <br />
    </section>
  </>
);
