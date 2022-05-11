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
