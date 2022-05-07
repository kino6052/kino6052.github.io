import { Image } from "../components/Image";
import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";

export const getProjectPages = (language: ELanguage) => ({
  "nodejs-server": (
    <>
      <section className="container">
        <h1>Misc</h1>
        <h2>Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquam velit nunc, a lacinia magna sodales a. Ut facilisis
          pellentesque sapien a interdum. Vestibulum lobortis eget leo vehicula
          lobortis. Quisque at semper turpis, id mattis ex. Nam hendrerit erat
          et enim ultricies luctus. Fusce ac tempor ligula. Nunc consectetur ex
          eu rutrum facilisis. Sed scelerisque tellus a eros volutpat, eget
          cursus augue posuere. Duis auctor arcu a sapien posuere, eget
          facilisis arcu sodales. In quis ex sed ex hendrerit auctor. Praesent
          fermentum finibus porta. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis commodo libero a elit porta sollicitudin.
        </p>
        <br />
      </section>
    </>
  ),
  csaa: (
    <>
      {/*  */}
      <section className="container">
        <h1>{translations[language].projectPages.title}</h1>
        <h2>{translations[language].projectPages.subtitle}</h2>
        <br />
        <p>{translations[language].projectPages.paragraph1}</p>
        <br />
        <p>{translations[language].projectPages.paragraph2}</p>
        <br />
        <p>{translations[language].projectPages.paragraph3}</p>
        <br />
        <p>{translations[language].projectPages.paragraph4}</p>
        <br />
        <p>{translations[language].projectPages.paragraph5}</p>
        <br />
        <p>{translations[language].projectPages.paragraph6}</p>
        <br />
        <p>
          {translations[language].projectPages.paragraph7}{" "}
          <a
            href="https://www.quote.csaa-insurance.aaa.com/"
            target="_blank"
            rel="noreferrer"
          >
            {translations[language].projectPages.paragraph7link}
          </a>
          .
        </p>
        <br />
        <div style={{ display: "flex" }}>
          <Image
            src="/csaa.jpg"
            caption="MyQuote Coverage Screen"
            width={250}
          />
          <Image src="/csaa.jpg" caption="MyQuote Address Screen" width={250} />
          <Image
            src="/csaa.jpg"
            caption="MyQuote Personal Info Screen"
            width={250}
          />
        </div>
        <br />
        <p>{translations[language].projectPages.paragraph8}</p>
        <br />
        <p>{translations[language].projectPages.paragraph9}</p>
        <br />
        <p>{translations[language].projectPages.paragraph10}</p>
        <br />
        <p>{translations[language].projectPages.paragraph11}</p>
        <br />
        <br />
        <br />
      </section>
    </>
  ),
});
