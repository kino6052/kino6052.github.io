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
          things on Earth, the insurance quote applications development can be
          actually pretty fun.
        </p>
        <br />
        <p>
          Insurance is a unique field. The main subject of their activity has no
          concrete embodiment. It deals with abstractions like risk. The
          end-user doesn't use the insurance products very often, and the
          insurance applications tend to be not as richly featured as some other
          counterparts. Yet, it is an absolute must-have in modern civilization.
        </p>
        <br />
        <p>
          The necessity that comes with insurance tends to make the cheaper
          options more favorable to the customers. However, even the more
          expensive insurances tend to be able to make competition leveraging
          their brand. Among them are humor, recognizable design, and ease of
          use.
        </p>
        <br />
        <p>
          A potential customer in need to buy an insurance policy goes online
          trying to get a quote, and it goes without saying that the better the
          user experience is during the quote process the better the chances
          they will buy the policy are.
        </p>
        <br />
        <p>This is where I come into the picture.</p>
        <br />
        <p>
          I am very proud to say that I think that{" "}
          <b>AAA quote process is one of the smoothest in the industry</b>.
          Thanks to the strong UI/UX and Dev teams over at AAA.
        </p>
        <br />
        <p>
          Our team was responsible for building{" "}
          <a
            href="https://www.quote.csaa-insurance.aaa.com/"
            target="_blank"
            rel="noreferrer"
          >
            the AAA quote application
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
        <p>
          This application is a testimony to how a creative approach can make
          even the dullest things fun. The app has an effective design, it is
          highly interactive, and the entire process takes minutes to complete.
        </p>
        <br />
        <p>
          In essence, the quote application is a form that the user has to fill
          out. However, this form is extremely complex. It is highly conditional
          and is associated with a lot of possible routes the user can take.
          Very soon in the development process, it becomes very complex to
          maintain.
        </p>
        <br />
        <p>
          This effort would be impossible without a great quality assurance
          team. The QA team ensured a great part of the success of this project.
        </p>
        <br />
        <p>
          This project was among a few that I have been able to participate in
          from start to finish, and am very proud of the end result. I would
          like to thank the management, the UX, QA, and Dev teams working on
          this project for making the development process fun and meaningful
          inspite of the challenges that come from the fact that the insurance
          industry tends be extremely dull.
        </p>
        <br />
        <br />
        <br />
      </section>
    </>
  ),
} as const;
