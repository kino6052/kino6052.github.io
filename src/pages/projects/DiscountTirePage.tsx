import React from "react";
import { Image } from "../../components/Image";
import { translations } from "../../utils/utils";

export const DiscountTirePage: React.FC<
  React.InputHTMLAttributes<unknown> & {
    content: typeof translations[string]["projectPages"]["discount-tire"];
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
          src="/images/projects/commercial/discount-tire.jpg"
          caption={content.imageCaption}
          width={250}
        />
      </div>
      <div className="spacer"></div>
      <p>{content.paragraph1}</p>
      <div className="spacer"></div>
      <p>{content.paragraph2}</p>
      <ul>
        {content.features.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
      <div className="spacer"></div>
      <p>{content.paragraph3}</p>
      <div className="spacer"></div>
      <a href="https://www.discounttire.com/" target="_blank" rel="noreferrer">
        {content.link}
      </a>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
  </>
);
