import React from "react";
import { Image } from "../../components/Image";
import { processMarkup, translations } from "../../utils/utils";

export const CSAAPage: React.FC<
  React.InputHTMLAttributes<unknown> & {
    content: typeof translations[string]["projectPages"]["csaa"];
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
          src="/images/projects/commercial/csaa-desktop.jpg"
          caption="MyQuote Coverage Screen"
        />
      </div>
      <div className="spacer"></div>
      <p>{content.paragraph1}</p>
      <div className="spacer"></div>
      <p>{content.paragraph2}</p>
      <div className="spacer"></div>
      <p>{content.paragraph3}</p>
      <div className="spacer"></div>
      <p>{content.paragraph4}</p>
      <div className="spacer"></div>
      <p>{content.paragraph5}</p>
      <div className="spacer"></div>
      <p>{processMarkup(content.paragraph6)}</p>
      <div className="spacer"></div>
      <p>
        {content.paragraph7}{" "}
        <a
          href="https://www.quote.csaa-insurance.aaa.com/"
          target="_blank"
          rel="noreferrer"
        >
          {content.paragraph7link}
        </a>
        .
      </p>
      <div className="spacer"></div>
      <p>{content.paragraph8}</p>
      <div className="spacer"></div>
      <p>{content.paragraph9}</p>
      <div className="spacer"></div>
      <p>{content.paragraph10}</p>
      <div className="spacer"></div>
      <p>{content.paragraph11}</p>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </section>
  </>
);
