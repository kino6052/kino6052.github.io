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

export const getSkills = (language: ELanguage): ITable =>
  [
    [
      {
        description: "JavaScript",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "TypeScript",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "RxJS",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "CSS3",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "HTML5",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "AWS",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "PostgreSQL",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "MySQL",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "GraphQL",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "MongoDB",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "SASS",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "Java",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Python",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "NodeJS",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "React",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "AngularJS",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "VueJS",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "NextJS",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Storybook",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "WebGL",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "OpenGL",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Unity",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Jest",
      },
      {
        description: 5,
      },
    ],
    [
      {
        description: "WebRTC",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "PyTorch",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "TensorFlow",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "C++",
      },
      {
        description: 2,
      },
    ],
    [
      {
        description: "C#",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Git",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "Docker",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "WebPack",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Babel",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "REST",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "OWASP",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "WCAG",
      },
      {
        description: 4,
      },
    ],
    [
      {
        description: "OWASP",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "WebSockets",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "OAuth2",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "TCP & UDP",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Answer Set Programming",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "Electron",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "React Native",
      },
      {
        description: 2,
      },
    ],
    [
      {
        description: "TCP & UDP",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "ExpressJS",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "MaterialUI",
      },
      {
        description: 3,
      },
    ],
    [
      {
        description: "MDX",
      },
      {
        description: 3,
      },
    ],
  ]
    .sort(
      ([, { description: d1 }], [, { description: d2 }]) =>
        Number(d2) - Number(d1)
    )
    .map(([a, { description }]) => [
      a,
      { description: getStarsMarkup(description as number) },
    ]);

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

const getCompany = (language: ELanguage, index: number) =>
  (
    translations[language].profilePage.experience.list[0].list?.[
      index
    ] as unknown as { company?: string }
  )?.company;

export const getCareer = (language: ELanguage): ITable =>
  (
    [
      "csaa",
      "discountTire",
      "automationHero",
      "alphabank",
      "isonas",
      "medtronic",
    ] as const
  ).map((company) => [
    {
      title:
        translations[language].profilePage.experience.career[company].position,
      description: (
        <>
          <p>
            {
              translations[language].profilePage.experience.career[company]
                .company
            }
          </p>
          <p>
            {
              translations[language].profilePage.experience.career[company]
                .duration
            }
          </p>
        </>
      ),
    },
    {
      description: (
        <>
          {(
            ["responsibilities", "achievements", "technicalDetails"] as const
          ).map((section) => (
            <>
              <b>
                {
                  translations[language].profilePage.experience.career[company][
                    section
                  ].title
                }
              </b>
              <ul>
                {translations[language].profilePage.experience.career[company][
                  section
                ].list.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </>
          ))}
        </>
      ),
    },
  ]);

export const getEducation = (language: ELanguage): ITable =>
  translations[language].profilePage.experience.list?.[0].list?.map(
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
  ) || [];
