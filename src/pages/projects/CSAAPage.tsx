import React from "react";
import { Image } from "../../components/Image";
import { translations } from "../../utils/utils";

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
      <br />
      <div style={{ display: "flex" }}>
        <Image src="/csaa-desktop.jpg" caption="MyQuote Coverage Screen" />
      </div>
      <br />
      <p>{content.paragraph1}</p>
      <br />
      <p>{content.paragraph2}</p>
      <br />
      <p>{content.paragraph3}</p>
      <br />
      <p>{content.paragraph4}</p>
      <br />
      <p>{content.paragraph5}</p>
      <br />
      <p>{content.paragraph6}</p>
      <br />
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
      <br />
      <p>{content.paragraph8}</p>
      <br />
      <p>{content.paragraph9}</p>
      <br />
      <p>{content.paragraph10}</p>
      <br />
      <p>{content.paragraph11}</p>
      <br />
      <br />
      <br />
    </section>
  </>
);
