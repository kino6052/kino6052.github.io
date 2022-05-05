import { ERoute } from "./bridge";
import { ITable } from "./Table";
import { getStarsMarkup } from "./utils";

export const links: [string, string][] = [
  ["Resume", "/"],
  ["Projects", `/${ERoute.Projects}`],
  ["Misc", `/${ERoute.Misc}`],
  ["Contact", `/${ERoute.Contact}`]
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
  "OWASP"
];

export const skills: ITable = [
  [
    {
      description: <b>Technologies</b>
    }
  ],
  [
    {
      description: "JavaScript"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "TypeScript"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "RxJS"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "CSS3"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "HTML5"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "AWS"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "PostgreSQL"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "MySQL"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "GraphQL"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "MongoDB"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "SASS"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "Java"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Python"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "NodeJS"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "React"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "AngularJS"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "VueJS"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "NextJS"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Storybook"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "Jest"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "WebGL"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "OpenGL"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Unity"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Jest"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "WebRTC"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "PyTorch"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "TensorFlow"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "C++"
    },
    {
      description: getStarsMarkup(2)
    }
  ],
  [
    {
      description: "C#"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Git"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "Docker"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "WebPack"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Babel"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "REST"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "OWASP"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "WCAG"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "OWASP"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "WebSockets"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "OAuth2"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "TCP & UDP"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Answer Set Programming"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "Electron"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "React Native"
    },
    {
      description: getStarsMarkup(2)
    }
  ],
  [
    {
      description: "TCP & UDP"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "ExpressJS"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "MaterialUI"
    },
    {
      description: getStarsMarkup(3)
    }
  ],
  [
    {
      description: "MDX"
    },
    {
      description: getStarsMarkup(3)
    }
  ]
];

export const languages: ITable = [
  [
    {
      description: "Russian"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "English"
    },
    {
      description: getStarsMarkup(5)
    }
  ],
  [
    {
      description: "French"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "German"
    },
    {
      description: getStarsMarkup(4)
    }
  ],
  [
    {
      description: "Chinese"
    },
    {
      description: getStarsMarkup(3)
    }
  ]
];

export const career: ITable = [
  [
    {
      title: "Staff Software Engineer",
      description: (
        <>
          <p>AAA Insurance</p>
          <p>November 2020 - June 2022</p>
        </>
      )
    },
    {
      description: (
        <>
          <b>Responsibilities</b>
          <ul>
            <li>Create and maintain a custom insurance quote appliaction</li>
            <li>
              Create a React UI kit according to the company's design system
            </li>
          </ul>
          <b>Achievements</b>
          <ul>
            <li>
              Successfully communicated technical details to business,
              development and QA teams
            </li>
            <li>Successfull implemented major features</li>
            <li>
              Carefully followed UI design specifications to ensure quality
            </li>
            <li>Significiantly improved test coverage</li>
            <li>
              Influenced important architectural decisions that proved reliable
            </li>
            <li>Demonstrated reliable performance across sprints</li>
          </ul>
          <b>Technical Details</b>
          <ul>
            <li>
              Utilized <b>React with Hooks</b>
            </li>
            <li>
              Improved maintainability by using <b>TypeScript</b> and{" "}
              <b>Unit Test</b> practices
            </li>
            <li>
              Integrated features with the <b>AWS</b> backend
            </li>
            <li>
              Utilized best practices to optimize appliaction performance using{" "}
              <b>caching</b> and <b>Service Workers</b>
            </li>
            <li>
              Set up and utilized process automation (<b>GitHub workflows</b>,{" "}
              <b>Git hooks</b>, <b>AWS CI Pipeline</b>)
            </li>
            <li>
              Verified <b>accessibility</b> with <b>UsableNet AQA</b>
            </li>
          </ul>
        </>
      )
    }
  ],
  [
    {
      title: "React Developer (Contract)",
      description: (
        <>
          <p>Discount Tire</p>
          <p>March 2020 - May 2020</p>
        </>
      )
    },
    {
      description: (
        <>
          <b>Responsibilities</b>
          <ul>
            <li>Assist in the migration of the main appliaction to React</li>
            <li>Improve test coverage</li>
            <li>Participate in architectural decision making process</li>
          </ul>
          <b>Achievements</b>
          <ul>
            <li>
              Successfully communicated technical details to business,
              development and QA teams
            </li>
            <li>Successfull implemented major features</li>
            <li>
              Carefully followed UI design specifications to ensure quality
            </li>
            <li>Significiantly improved test coverage</li>
            <li>
              Influenced important architectural decisions that proved reliable
            </li>
            <li>Demonstrated reliable performance across sprints</li>
          </ul>
          <b>Technical Details</b>
          <ul>
            <li>
              Utilized <b>React with Hooks</b>
            </li>
            <li>
              Improved maintainability by using <b>TypeScript</b> and{" "}
              <b>Unit Test</b> practices
            </li>
            <li>
              Integrated features with the <b>AWS</b> backend
            </li>
            <li>
              Utilized best practices to optimize appliaction performance using{" "}
              <b>caching</b> and <b>Service Workers</b>
            </li>
            <li>
              Set up and utilized process automation (<b>GitHub workflows</b>,{" "}
              <b>Git hooks</b>, <b>AWS CI Pipeline</b>)
            </li>
            <li>
              Verified <b>accessibility</b> with <b>UsableNet AQA</b>
            </li>
          </ul>
        </>
      )
    }
  ]
];

export const education: ITable = [
  [
    {
      title: "Arizona State University",
      description: "December 2020 - Present, GPA 4.0"
    },
    {
      title: "Master's in Computer Science",
      description:
        "Courses: Introduction to Deep Learning in Visual Computing, Statistical Machine Learning, Inofrmation Assurance and Security, Knowledge Representation and Reasoning"
    }
  ],
  [
    {
      title: "University of Colorado at Boulder",
      description: "August 2013 - December 2015, GPA 3.9"
    },
    {
      title: "Bachelor's in Computer Science",
      description:
        "Courses: Algorithms, Principles of Programming Languages, Operating Systems, Special Topics: Big Data"
    }
  ],
  [
    {
      title: "University of Colorado at Boulder",
      description: "August 2010 - December 2013, GPA 3.5"
    },
    {
      title: "Bachelor's in Molecular Biology",
      description: "Courses:   Genetics, Developmental Biology, Stem Cells"
    }
  ]
];
