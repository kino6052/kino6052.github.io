import { ELanguage, ERoute } from "./utils/bridge";
import { ITable } from "./components/Table";
import { getStarsMarkup, translations } from "./utils/utils";

export const links: [string, ERoute][] = [
  ["Resume", ERoute.Resume],
  ["Projects", ERoute.Projects],
  ["Misc", ERoute.Misc],
  ["Contact", ERoute.Contact],
];
export const tags = [
  "React",
  "TypeScript",
  "RxJS",
  "Node",
  "AWS",
  "MUI",
  "NextJS",
  "Redux",
  "Monorepo",
  "Storybook",
  "WACG",
  "OWASP",
];

export const imageData =
  "data:image/jpeg;base64,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";

export const getSkills = (language: ELanguage): ITable => [
  [
    {
      description: (
        <b>
          {translations[language].profilePage.experience.list[2].description}
        </b>
      ),
    },
  ],
  [
    {
      description: "JavaScript",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "TypeScript",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "RxJS",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "CSS3",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "HTML5",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "AWS",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "PostgreSQL",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "MySQL",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "GraphQL",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "MongoDB",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "SASS",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "Java",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Python",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "NodeJS",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "React",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "AngularJS",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "VueJS",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "NextJS",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Storybook",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "Jest",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "WebGL",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "OpenGL",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Unity",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Jest",
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: "WebRTC",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "PyTorch",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "TensorFlow",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "C++",
    },
    {
      description: getStarsMarkup(2),
    },
  ],
  [
    {
      description: "C#",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Git",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "Docker",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "WebPack",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Babel",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "REST",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "OWASP",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "WCAG",
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: "OWASP",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "WebSockets",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "OAuth2",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "TCP & UDP",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Answer Set Programming",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "Electron",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "React Native",
    },
    {
      description: getStarsMarkup(2),
    },
  ],
  [
    {
      description: "TCP & UDP",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "ExpressJS",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "MaterialUI",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
  [
    {
      description: "MDX",
    },
    {
      description: getStarsMarkup(3),
    },
  ],
];

export const getLanguages = (language: ELanguage): ITable => [
  [
    {
      description: translations[language].profilePage.languages.russian,
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: translations[language].profilePage.languages.english,
    },
    {
      description: getStarsMarkup(5),
    },
  ],
  [
    {
      description: translations[language].profilePage.languages.french,
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: translations[language].profilePage.languages.german,
    },
    {
      description: getStarsMarkup(4),
    },
  ],
  [
    {
      description: translations[language].profilePage.languages.chinese,
    },
    {
      description: getStarsMarkup(3),
    },
  ],
];

export const getCareer = (language: ELanguage): ITable => [
  [
    {
      title:
        translations[language].profilePage.experience.list[0].list[0].title,
      description: (
        <>
          <p>
            {
              translations[language].profilePage.experience.list[0].list[0]
                .company
            }
          </p>
          <p>
            {
              translations[language].profilePage.experience.list[0].list[0]
                .description
            }
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          {translations[
            language
          ].profilePage.experience.list[0].list[0].list?.map(
            ({ title, list }) => (
              <>
                <b>{title}</b>
                <ul>
                  {list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </>
            )
          )}
        </>
      ),
    },
  ],
  [
    {
      title:
        translations[language].profilePage.experience.list[0].list[1].title,
      description: (
        <>
          <p>
            {
              translations[language].profilePage.experience.list[0].list[1]
                .company
            }
          </p>
          <p>
            {
              translations[language].profilePage.experience.list[0].list[1]
                .description
            }
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          {translations[
            language
          ].profilePage.experience.list[0].list[0].list?.map(
            ({ title, list }) => (
              <>
                <b>{title}</b>
                <ul>
                  {list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </>
            )
          )}
        </>
      ),
    },
  ],
];

export const getEducation = (language: ELanguage): ITable =>
  translations[language].profilePage.experience.list[1].list.map(
    ({ title, description, list }) => [
      {
        title,
        description,
      },
      {
        title: list?.[0].title || "",
        description: list?.[0].list[0] || "",
      },
    ]
  );
