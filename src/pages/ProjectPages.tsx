import { Image } from "../components/Image";

export const projectPages = {
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
        <h1>AAA MyQuote App</h1>
        <h2>CSAA Insurance Company</h2>
        <br />
        <p>
          Despite the fact that the insurance industry is one of the dullest
          things on Earth, the quote applications development can be pretty fun.
        </p>
        <br />
        <p>
          Insurance is a unique field. Similar to banking dealing with financial
          abstractions like interest, insurance deals with risk. Yet, unlike
          banks, the end-user doesn't use the insurance products very often and
          the insurance applications tend to be not as reachly featured in
          comparison.
        </p>
        <br />
        <p>However, the great </p>
        <br />
        <p>
          Here is{" "}
          <a
            href="https://www.quote.csaa-insurance.aaa.com/"
            target="_blank"
            rel="noreferrer"
          >
            the link to the application
          </a>
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
        <br />
        <p>
          Insurance is a unique field. Similar to banking dealing with financial
          abstractions like interest, insurance deals with risk. Yet, unlike
          banks, the end-user doesn't use the insurance products very often and
          the insurance applications tend to be not as reachly featured in
          comparison.
        </p>
        <br />
        <br />
      </section>
    </>
  ),
} as const;
