import React from "react";
import { BehaviorSubject } from "rxjs";
import { getCurrentPathState } from "./router";

export const WIDTH = 800 - 8 * 4;
export const TABLET_WIDTH = 700;
export const MOBILE_WIDTH = 600;
export const zIndex = {
  nav: 1,
  default: 0,
} as const;
export const languageOptions = ["English", "Русский", "中文"];
export const currentLanguage = languageOptions[2];

export const processMarkup = (text: string) => {
  const boldTransormation = text
    .split("*")
    .map((v, i) => (i % 2 === 0 ? v : <b>{v}</b>));
  return boldTransormation;
};

export const interpolate = (
  text: string,
  interpolation: { [key: string]: React.ReactNode | string }
) => {
  const keys = Object.keys(interpolation);
  const arr = text.split(/{{(.+)}}/);
  return arr.map((k) => (keys.includes(k) ? interpolation[k] : k));
};

const translationEnglish = {
  menu: {
    resume: "Résumé",
    projects: "Projects",
    misc: "Misc",
    contact: "Contact",
  },
  profilePage: {
    name: "Kirill Novik",
    title: "Full-stack Web Developer",
    subtitle: "Over 7 years of experience. Open for remote work.",
    description:
      "I am a versatile full-stack developer experienced in designing, creating and maintaining scalable cloud infrastructures, and applications with a focus on test-driven, agile and object oriented development practices.",
    tags: [
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
    ],
    experience: {
      title: "Experience",
      career: {
        title: "Career",
        csaa: {
          company: "CSAA Insurance",
          position: "Staff Software Engineer",
          duration: "November 2020 - June 2022",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Create and maintain a custom insurance quote application",
              "Create a React UI kit according to the company's design system specifications",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Successfully communicated technical details to business, development and QA teams",
              "Successful implemented major features",
              "Carefully followed UI design specifications to ensure quality",
              "Significantly improved test coverage",
              "Influenced important architectural decisions that proved reliable",
              "Demonstrated reliable performance across sprints",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Utilized *React with Hooks*",
              "Improved maintainability by using *TypeScript and Unit Test* practices",
              "Integrated features with the *AWS backend*",
              "Utilized best practices to optimize application performance using caching and *Service Workers*",
              "Set up and utilized process automation (*GitHub workflows, Git hooks, AWS CI Pipeline*)",
              "Verified accessibility with *UsableNet AQA*",
            ].map((i) => processMarkup(i)),
          },
        },
        discountTire: {
          company: "Discount Tire",
          position: "React Developer (Contract)",
          duration: "March 2020 - May 2020",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Assist in the migration of the main application to React",
              "Improve test coverage",
              "Participate in architectural decision making process",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Successfully migrated several features from the legacy code base",
              "Significantly improved test coverage",
              "Influenced some of the important architecture decisions",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Worked with *React16 + GraphQL* stack",
              "Utilized best practices to optimize application performance such as memoization and caching with *Service Workers*",
            ].map((i) => processMarkup(i)),
          },
        },
        automationHero: {
          company: "Automation Hero via Soshace (Contractor)",
          position: "Senior Front-end Developer",
          duration: "January 2019 - January 2020",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Develop a cross-platform RPA application available as Chrome extension and a desktop client",
              "Deliver new functionality quick",
              "Implement design according to specifications",
              "Create .NET service for Windows to facilitate interactions between the desktop application and Windows",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Successfully implemented core functionality",
              "Have been keeping high percent of test coverage via the red-green-refactor TDD practice",
              "Designed highly modular and fast to develop architecture",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Used *React + Typescript + RxJS* for presentation and business logic",
              "Use *.NET Framework* to build *Windows Services*",
              "Utilized *chrome extension APIs* as well as *Windows Interop API* to implement the RPA functionality",
              "Integrated our product with *Salesforce* by adding an ability to open an extension from Salesforce dashboard",
              "Gained a wealth of knowledge working with *Chrome API* for browser extensions and DOM",
            ].map((i) => processMarkup(i)),
          },
        },
        alphabank: {
          company: "Alfabank",
          position: "Front-end Developer",
          duration: "March 2018 - October 2018",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Develop front-end applications using React + Redux + Saga",
              "Contribute to several fast paced bank projects",
              "Increase test coverage",
              "Follow agile scrum best practices",
              "Effectively communicate with teams on different projects",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Successfully implemented several bank projects including mail service and factoring",
              "Quickly gained familiarity with complex code bases on various projects",
              "Significantly increased test coverage",
              "Effectively communicated with teams on different projects",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Used *React + Redux + Saga* as a stack for the front-end application development",
              "Contributed to the open source UI library (ARUI Feather)",
              "Consumed data from the middle side of the application",
              "Utilized server side rendering to improve the load speed",
              "Used *Docker and OpenShift* as well as JIRA + Jenkins pipelines on the DevOps side of the application",
              "Used *Redux* Form for the form data",
              "Used *Jest and snapshots* for unit testing",
              "Used *PostCSS* for styles",
              "Proposed several improvements to project structure",
            ].map((i) => processMarkup(i)),
          },
        },
        isonas: {
          company: "ISONAS",
          position: "Software Engineer",
          duration: "July 2016 - December 2017",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Maintain a tightly-coupled monolithic application",
              "Increase code base maintainability, readability and testability",
              "Gain expertise with company's proprietary frameworks",
              "Consistently deliver well written and well tested code",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Designed React.js UI elements for integration with legacy UI codebase",
              "Introduced real-time data transfer into the application using WebSockets",
              "Designed and implemented a thin client integrating the application with Active Directory",
              "Implemented logic and styles of various views of the application",
              "Designed and implemented REST API gateway allowing clients to integrate with the application",
              "Refactored legacy monolith application into microservices using Docker",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              processMarkup(
                "Created *microservices* as *docker service stacks* with well defined *REST* interfaces deployed as a cloud cluster with *docker swarm mode*"
              ),
              processMarkup(
                "Reduced front-end technical debt by refactoring and modularizing components according to proper *MVC and SOLID principles* using *best JavaScript OOP practices*"
              ),
              processMarkup(
                "Designed applications *REST API according to Swagger OpenAPI specification* and created highly scalable *REST API gateway microservice* utilizing *Swagger Codegen API*"
              ),
              processMarkup(
                "Successfully implemented *REST API gateway microservice* utilizing *Swagger Codegen API*"
              ),
              processMarkup(
                "Successfully implemented two separate *WebSocket* servers with *javax WebSocket Server API* as a part of the java package, as well as highly scalable *Socket.io Server API* as a microservice as well as *WebSocet client* functionality"
              ),
              processMarkup(
                "Designed minimally code-invasive *AWS read-replica based solution* into the application to alleviate slow response time issues of the critical DB queries on tables with high read-write contention *reducing the query response times by the factor of 10*"
              ),
              processMarkup(
                "Designed and implemented *Active Directory integration client* utilizing *LDAP queries* allowing to import Active Directory users and credentials into the systems"
              ),
              processMarkup(
                "Created testing suites with *Mockito* and *JUnit* to unit-test complex dependency-heavy methods"
              ),
              processMarkup(
                "Created front-end testing suites with *Selenium*, *Sikuli* as well as *NodeUnit* and *Mocha*"
              ),
              processMarkup(
                "Configured and deployed *Jetty* and *Tomcat* servers in the *AWS* environment"
              ),
              processMarkup(
                "Designed and proposed *ReactJS + Redux UI elements + TypeScript* to integrate with the company's framework for better maintainability"
              ),
              processMarkup(
                "Successfully introduced *multithreaded behavior* for several performance-critical features of the application"
              ),
              processMarkup("DesignedUI features with *Sass* and *PostCSS*"),
              processMarkup("Created complex *automation scripts* with *Gulp*"),
              processMarkup(
                "Reimplemented *complex legacy data migration batch scripts* with *Python*"
              ),
              processMarkup(
                "Enhanced *performance of slow PostgreSQL queries*"
              ),
              processMarkup("Utilized *GitHub VCS*"),
            ],
          },
        },
        medtronic: {
          company: "Medtronic",
          position: "Software Application Developer",
          duration: "May 2015 - September 2015",
          responsibilities: {
            title: "Responsibilities",
            list: [
              "Work with a remote international team on a legacy project",
              "Integrate an application into the lgacy project with a REST API using Bridge OOP pattern",
            ],
          },
          achievements: {
            title: "Achievements",
            list: [
              "Designed and developed a patient monitoring web application letting to put hospital's monitoring station inside the nurse's pocket",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Utilized *.NET MVC4* framework tools as well as *Razor* templating engine",
              "Consumed REST API using company's bridge API tool and LINQ queries",
              "Utilized *LessCSS* and *Bootstrap* to design front-end layouts",
              "Utilized *Perforce VSC*",
            ].map((i) => processMarkup(i)),
          },
        },
      },
      list: [
        {
          subtitle: "Education",
          list: [
            {
              title: "Arizona State University",
              description: "December 2020 - Present, GPA 4.0",
              list: [
                {
                  title: "Master's in Computer Science",
                  list: [
                    "Courses: Introduction to Deep Learning in Visual Computing, Statistical Machine Learning, Information Assurance and Security, Knowledge Representation and Reasoning",
                  ],
                },
              ],
            },
            {
              title: "University of Colorado at Boulder",
              description: "August 2013 - December 2015, GPA 3.9",
              list: [
                {
                  title: "Bachelor's in Computer Science",
                  list: [
                    "Courses: Algorithms, Principles of Programming Languages, Operating Systems, Special Topics: Big Data",
                  ],
                },
              ],
            },
            {
              title: "University of Colorado at Boulder",
              description: "August 2010 - December 2013, GPA 3.5",
              list: [
                {
                  title: "Bachelor's in Molecular Biology",
                  list: [
                    "Courses: Genetics, Developmental Biology, Stem Cells",
                  ],
                },
              ],
            },
          ],
        },
        {
          subtitle: "Skills",
          description: "Technologies",
        },
      ],
    },
    languages: {
      title: "Languages",
      russian: "Russian",
      english: "English",
      french: "French",
      german: "German",
      chinese: "Chinese",
    },
  },
  projectsPage: {
    title: "Projects",
    sections: [
      {
        title: "Commercial Projects",
        description:
          "The real-world projects that gave me much experience and were crucial part in my professional development.",
      },
      {
        title: "Student Projects",
        description:
          "Here are some projects that make part of my journey of becoming a software engineer.",
      },
    ],
  },
  projectPages: {
    csaa: {
      title: "AAA MyQuote App",
      subtitle: "CSAA Insurance Company",
      snippet: "Modern App with Great User Experience.",
      paragraph1:
        "Despite the fact that the insurance industry is one of the dullest things on Earth, the insurance quote applications development can be actually pretty fun.",
      paragraph2:
        "Insurance is a unique field. The main subject of their activity has no concrete embodiment. It deals with abstractions like risk. The end-user doesn't use the insurance products very often, and the insurance applications tend to be not as richly featured as some other counterparts. Yet, it is an absolute must-have in modern civilization.",
      paragraph3:
        "The necessity that comes with insurance tends to make the cheaper options more favorable to the customers. However, even the more expensive insurances tend to be able to make competition leveraging their brand. Among them are humor, recognizable design, and ease of use.",
      paragraph4:
        "A potential customer in need to buy an insurance policy goes online trying to get a quote, and it goes without saying that the better the user experience is during the quote process the better the chances they will buy the policy are.",
      paragraph5: "This is where I come into the picture.",
      paragraph6:
        "I am very proud to say that I think that *AAA quote process is one of the smoothest in the industry*. Thanks to the strong UI/UX and Dev teams over at AAA.",
      paragraph7: "Our team was responsible for building",
      paragraph7link: "the AAA quote application",
      paragraph8:
        "This application is a testimony to how a creative approach can make even the dullest things fun. The app has an effective design, it is highly interactive, and the entire process takes minutes to complete.",
      paragraph9:
        "In essence, the quote application is a form that the user has to fill out. However, this form is extremely complex. It is highly conditional and is associated with a lot of possible routes the user can take. Very soon in the development process, it becomes very complex to maintain.",
      paragraph10:
        "This effort would be impossible without a great quality assurance team. The QA team ensured a great part of the success of this project.",
      paragraph11:
        "This project was among a few that I have been able to participate in from start to finish, and am very proud of the end result. I would like to thank the management, the UX, QA, and Dev teams working on this project for making the development process fun and meaningful in spite of the challenges that come from the fact that the insurance industry tends be extremely dull.",
    },
    "discount-tire": {
      title: "Online Store",
      subtitle: "Discount Tire",
      snippet: "Richly featured online store.",
      imageCaption: "Discount Tire Store Page",
      paragraph1:
        "Even though I worked at Discount Tire briefly, I really liked it because, for the first time in my career, I could finally explain to a lay person what it is that I actually do and give them the link to the application.",
      paragraph2:
        "Their main application is an online store where you could purchase wheels and tires, and as such it has all the necessary features:",
      features: [
        "Account Handling",
        "Cart Management",
        "Payment Handling",
        "Location Handling",
        "Ads and Campaign Handling",
        "Product Search and Display",
      ],
      paragraph3:
        "I got some interesting insights about the decision-making of the team approaching building an online-store with React and GraphQL ranging from how they handle state to how they do optimizations.",
      link: "Here is the link to their application.",
    },
    "automation-hero": {
      title: "HeroGo",
      subtitle: "RPA Automation Tool",
      snippet: "Desktop Interaction Automation Project.",
      imageCaption: "Automation Hero Application Screen",
      paragraph1:
        "What made this project unique was that it was my first (and my last) project as a freelancer working remotely. Also, this was my first project creating an RPA platform. Not to mention that the startup was founded by a couple of German entrepreneurs, and, as such, the location of their main office was in Berlin. ",
      paragraph2:
        "RPA desktop automation development is not easy. In fact, it is absolutely impossible using old-fashioned approaches such as querying UI layer APIs to get control handlers. Unfortunately, this was the exact route this startup went. However, this allowed me to learn a great deal about desktop development using C# and electron.js. I also learned some Windows Presentation Framework API to be dangerous. Not to mention Google Extension API and the requirements for publishing and running the programs on Windows and Chrome (as extension). ",
    },
    alphabank: {
      title: "Alphabank for Mid-sized Business",
      subtitle: "Banking Dashboard App",
      snippet: "Micro front-end App.",
      imageCaption: "Alphabank Dashboard",
      paragraph1:
        "Not only Alphabank is the first fintech company I worked at, but it also was the very first tech company I worked at in Russia.",
      paragraph2:
        "Their main stack was React+Redux Microfrontends. I had a quality experience working there, as the teams were really talented, agile, and versatile.",
      paragraph3:
        "The pipelines used were pretty standard. The architecture was roughly broken into front-end, middle, and back-end parts.",
      paragraph4:
        "I would argue that Alphabank's UI design is one of the best banking application UI designs I've seen throughout my career.",
      paragraph5:
        "I'm very grateful to have had this opportunity to be a contractor for this great company.9",
    },
    isonas: {
      title: "Pure Access",
      subtitle: "Dashboard for Access Control Management",
      snippet: "IP Enabled Access Control.",
      imageCaption: "ISONAS Pure Access",
      paragraph1:
        "ISONAS was a startup that was primarily focused on the security systems hardware. ",
      paragraph2:
        "My job was to make and maintain the dashboard to interact with their devices. I loved everything about that job. For starters, I was getting exposed to Java on the back-end, working with very low-level APIs interacting with the security systems hardware over TCP/IP. ",
      paragraph3:
        "I had the freedom to design cloud infrastructure in AWS. I learned a lot while working at the company. I am very grateful to Jesse Euton, my supervisor, for all his help and encouragement.",
    },
    medtronic: {
      title: "Vital Sync",
      subtitle: "Monitoring Dashboard",
      snippet: "Ventilator Monitoring App.",
      imageCaption: "Vital Sync",
      paragraph1:
        "As an intern at Medtronic, my responsibility was to create a thin web client for the patient monitoring application using .NET MVC4 suite.",
    },
    picturesOfYou: {
      title: "Pictures of You",
      subtitle: "Computer Graphics",
      snippet: "WebGL Music Video Visualization.",
    },
    pipBoy: {
      title: "Pip Boy",
      subtitle: "Personal Portfolio",
      snippet: "WebGL and Canvas Based Portfolio.",
    },
  },
  misc: {
    title: "Misc",
    sections: [
      {
        title: "Blog",
        description: [
          `I enjoy writing articles about various topics. My favorite topics are philosophy and programming. Usually, the motivation when I write an article is to use the process to assist me in learning and thinking, as it is much easier to get a better understanding of a particular topic when you try to explain it to someone. Even if it is a rubber duck, which technically makes me a practitioner of the "rubber duck debugging" methodology. I also use it as a way to keep memories of how my thinking process changes over time, as well as to kindle a conversation with those who are kind enough to read it.`,
          "Here are a few articles I would like to share.",
        ],
      },
      {
        title: "Web Development",
        projects: [
          {
            title: "React + RxJS",
            subtitle: "How React is meant to be",
            snippet: "My Opinion on State Management.",
          },
          {
            title: "React TDD",
            subtitle: "Test-driven Development in React",
            snippet: "Opinion on TDD in React",
          },
          {
            title: "I Don't Like GraphQL",
            subtitle: "So How about JSON and TS?",
            snippet: "Opinion on Declarative Data Access",
          },
          {
            title: "My Experience with WebRTC",
            subtitle: "Some Lessons Learned ",
            snippet: "Sharing Some Thoughts on RTC.",
          },
        ],
      },
      {
        title: "Machine Learning",
        projects: [
          {
            title: "Dissecting My Confusion",
            subtitle: "Support-vector Machine",
            snippet: "Musings on the Concept of SVM.",
          },
        ],
      },
      {
        title: "Other",
        description: [
          "There are a few items that I find relevant to share here as they provide extra details that could help to better tell my story.",
          "{{link}} wanted to interview me and share my story of becoming a successful freelance developer on their platform, and I have gladly taken up on this opportunity. Here is the resulting article:",
        ],
        link: "Soshace freelancer agency",
        projects: [
          {
            title: "Interview Article",
            subtitle: "Level Up Coding Publication",
            snippet: "Interviewed by Marina Vorontsova",
          },
          {
            title: "Good Developer",
            subtitle: "What Makes a Good Developer?",
            snippet: "Reflection on the Nature of Goodness",
          },
        ],
      },
      {
        title: "Interests",
        description: [
          "I believe that curiosity is one of the traits a good problem-solver needs to possess as it encourages exploration that is vital when solving problems. I find that these various interests have only been helping me in this regard.",
          [
            "Languages",
            "There are a very few things that could compare in their ability to broaden one's horizons as much as language learning does. The may lesson is that it is through play and learning from mistakes you organically get better and keep your motivation.",
          ],
          [
            "Philosophy",
            [
              "Learning languages also helps in becoming more familiar with abstractions and abstract thinking that is the crucial for successful problem solving. There are no fields of knowledge more abstract than logic and grammar. They are both related to language. The deeper in abstractions you go, the more fun things become.",
              "On the more practical side, I practice the way of minimalism, or trying to keep my attention on what's necessary and sufficient in a given circumstance. If something isn't necessary in a given circumstance, it usually doesn't get much of my attention or energy.",
            ],
          ],
          [
            "Music",
            [
              "My brother and I have been playing off and on in a tiny band together. It taught me that creative collaboration takes a lot of energy, and that you have to learn to make sure that you can practice a lot on your own before doing something meaningful as a group.",
              "Some of our tracks can be found here.",
            ],
          ],
          [
            "Mathematics",
            [
              "Mathematics is of interest to me as part of the broader study of philosophy. It is the most obvious field where you can build more complex knowledge from a small set of foundational pieces. It is my passion to build ontologies to store my knowledge.",
              [
                "I have also undertaken a very interesting {{link}}.",
                "journey reasoning about the nature of primes and twin primes",
              ],
            ],
          ],
          [
            "Workout",
            [
              "As part of minimalist approach, I find that calisthenics is extremely powerful in this regard. With the minimum set of equipment one can perform a comprehensive training routine.",
            ],
          ],
          [
            "Self-sufficient Living",
            [
              "The result of my philosophical introspection is the conclusion that the goal of every human being is to achieve completeness. This is primarily achieved by satisfying needs and striving for self-sufficiency.",
              [
                "Here is the ebook I wrote for my non-profit company Aeroaquaponic.",
                "It summarizes the results of my philosophical musings on the topics of meaning of life and happiness. It describes a minimalist approach to life that isn't only beneficial to the practitioner but also to the larger context. Self-sufficiency is my long-term goal.",
              ],
            ],
          ],
        ],
      },
    ],
  },
  contactPage: {
    title: "Contact",
    subtitle: "Let's Stay in Touch",
    description:
      "Thanks for stopping by! Please, feel free to reach out to me regarding opportunities or should you have any questions. I'm looking forward to connecting and collaborating with creative people.",
    submittedFormMessage:
      "Thank you for your message. I will get back to you shortly!",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      subject: "Subject",
      body: "Message",
      submit: "Submit",
    },
  },
};

type TTranslation = typeof translationEnglish;

const translationRussian: TTranslation = {
  menu: {
    resume: "Резюме",
    projects: "Проекты",
    misc: "Прочее",
    contact: "Контакт",
  },
  profilePage: {
    name: "Кирилл Новик",
    title: "Full-stack Разработчик",
    subtitle: "Более 7 лет опыта. Рассматриваю предложения по удаленке.",
    description:
      "Я универсальный full-stack разработчик, с опытом проектирования, создания и обслуживания масштабируемых облачных инфраструктур и приложений с акцентом на разработке через тестирование, а также гибкой и объектно-ориентированной разработке.",
    tags: [
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
    ],
    experience: {
      title: "Опыт",
      career: {
        title: "Карьера",
        csaa: {
          company: "Страховая Компания CSAA",
          position: "Штатный Инженер-Программист",
          duration: "Ноябрь 2020 г. - Июнь 2022 г.",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Создание и поддержка специализированного приложения для расчета стоимости страховки",
              "Создайте библиотеки пользовательского интерфейса React в соответствии со спецификациями системы дизайна компании",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Успешная передача технических деталей бизнес-командам, командам разработчиков и отдела контроля качества",
              "Успешно реализованы основные функции",
              "Тщательное соблюдение спецификаций дизайна пользовательского интерфейса для обеспечения качества",
              "Значительно улучшенное тестовое покрытие",
              "Повлиял на важные архитектурные решения, которые оказались надежными",
              "Продемонстрированная надежная производительность в спринтах",
            ],
          },
          technicalDetails: {
            title: "Технические Подробности",
            list: [
              "Использовали *React с Hooks*",
              "Улучшенная поддерживаемость за счет использования методов *TypeScript* и *юнит тестирования*.",
              "Интегрированные функции с серверной частью *AWS*",
              "Использованы лучшие практики для оптимизации производительности приложений с помощью *кэширования и Service Workers*.",
              "Использование лучших практик для оптимизации производительности приложений. Настройка и автоматизация процессов (*GitHub workflows*, *Git hooks*, *AWS CI Pipeline*).",
              "Улучшение доступности с помощью *UsableNet AQA*",
            ].map((i) => processMarkup(i)),
          },
        },
        discountTire: {
          company: "Discount Tire",
          position: "React Разработчик (Контракт)",
          duration: "Март 2020 - Май 2020",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Помощь в переносе основного приложения на React",
              "Улучшение тестового покрытия",
              "Участие в процессе принятия архитектурных решений",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Успешно перенесено несколько функций из устаревшей базы кода",
              "Значительно улучшено покрытие тестами",
              "Повлияло на некоторые важные архитектурные решения",
            ],
          },
          technicalDetails: {
            title: "Технические Детали",
            list: [
              "Работал со стеком *React16 + GraphQL*",
              "Использовал лучшие практики для оптимизации производительности приложений, такие как мемоизация и кэширование с помощью *Service Workers*",
            ].map((i) => processMarkup(i)),
          },
        },
        automationHero: {
          company: "Automation Hero через Soshace (Контракт)",
          position: "Старший Front-end Разработчик",
          duration: "Январь 2019 - Январь 2020",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Разработка кроссплатформенного приложения RPA, доступного в виде расширения Chrome и десктоп клиента",
              "Быстрое предоставление новых функциональных возможностей",
              "Реализация дизайна в соответствии со спецификациями",
              "Создание службы .NET для Windows для облегчения взаимодействия между настольным приложением и Windows",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Успешно реализована основная функциональность",
              "Удалось сохранить высокий процент охвата тестированием с помощью практики TDD red-green-refactor",
              "Разработана высоко модульная и быстрая в разработке архитектура",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Использовал *React + Typescript + RxJS* для презентации и бизнес-логики",
              "Использовал *.NET* Framework для создания *сервисов Windows*",
              "Использовал *API расширений Chrome*, а также *Windows Interop API* для реализации функциональности RPA",
              "Интегрировал наш продукт с *Salesforce*, добавив возможность открывать расширение из панели мониторинга *Salesforce*",
              "Получил богатый опыт работы с *Chrome API* для расширений браузера и DOM",
            ].map((i) => processMarkup(i)),
          },
        },
        alphabank: {
          company: "Альфабанк",
          position: "Front-end Разработчик",
          duration: "Март 2018 - Октябрь 2018",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Разработка интерфейсных приложений с использованием React + Redux + Saga",
              "Участие в нескольких быстро развивающихся банковских проектах",
              "Увеличение тестового покрытия",
              "Следование лучшим практикам agile scrum",
              "Эффективное общение с командами по различным проектам",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Успешно реализовал несколько банковских проектов, включая почтовую службу и факторинг",
              "Быстро познакомился со сложными кодовыми базами в различных проектах",
              "Значительно увеличил охват тестированием",
              "Эффективно общался с командами по различным проектам",
            ],
          },
          technicalDetails: {
            title: "Технические Детали",
            list: [
              "Использовал *React + Redux + Saga* в качестве стека для разработки интерфейсных приложений",
              "Внес вклад в библиотеку пользовательского интерфейса с открытым исходным кодом (*ARUI Feather*)",
              "Потреблял данные из middle части приложения",
              "Использовал рендеринг на стороне сервера для повышения скорости загрузки",
              "Использовал *Docker и OpenShift*, а также конвейеры JIRA + Jenkins на стороне DevOps приложения",
              "Использовала форму *Redux* для данных формы",
              "Использовала *Jest* и снимки для модульного тестирования",
              "Использовала *PostCSS* для стилей",
              "Предложено несколько улучшений структуры проекта",
            ].map((i) => processMarkup(i)),
          },
        },
        isonas: {
          company: "ISONAS",
          position: "Инженер-программист",
          duration: "Июль 2016 - Декабрь 2017",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Поддерживать тесно связанное монолитное приложение",
              "Повысить поддерживаемость, читаемость и тестируемость базы кода",
              "Получить опыт работы с реализованными компанией фреймворками",
              "Постоянно предоставлять хорошо написанный и хорошо протестированный код",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Спроектированный React.js Элементы пользовательского интерфейса для интеграции с устаревшей кодовой базой пользовательского интерфейса",
              "Внедрена передача данных в реальном времени в приложение с использованием WebSockets",
              "Разработан и реализован тонкий клиент, интегрирующий приложение с Active Directory",
              "Реализована логика и стили различных представлений приложения",
              "Разработан и реализован REST API-шлюз, позволяющий клиентам интегрироваться с приложением",
              "Переработанное устаревшее монолитное приложение в микросервисы с помощью Docker",
            ],
          },
          technicalDetails: {
            title: "Technical Details",
            list: [
              "Created *microservices* as *docker service stacks* with well defined *REST* interfaces deployed as a cloud cluster with *docker swarm mode*",
              "Reduced front-end technical debt by refactoring and modularizing components according to proper *MVC and SOLID principles* using *best JavaScript OOP practices*",
              "Designed applications *REST API according to Swagger OpenAPI specification* and created highly scalable *REST API gateway microservice* utilizing *Swagger Codegen API*",
              "Successfully implemented *REST API gateway microservice* utilizing *Swagger Codegen API*",
              "Successfully implemented two separate *WebSocket* servers with *javax WebSocket Server API* as a part of the java package, as well as highly scalable *Socket.io Server API* as a microservice as well as *WebSocet client* functionality",
              "Designed minimally code-invasive *AWS read-replica based solution* into the application to alleviate slow response time issues of the critical DB queries on tables with high read-write contention *reducing the query response times by the factor of 10*",
              "Designed and implemented *Active Directory integration client* utilizing *LDAP queries* allowing to import Active Directory users and credentials into the systems",
              "Created testing suites with *Mockito* and *JUnit* to unit-test complex dependency-heavy methods",
              "Created front-end testing suites with *Selenium*, *Sikuli* as well as *NodeUnit* and *Mocha*",
              "Configured and deployed *Jetty* and *Tomcat* servers in the *AWS* environment",
              "Designed and proposed *ReactJS + Redux UI elements + TypeScript* to integrate with the company's framework for better maintainability",
              "Successfully introduced *multithreaded behavior* for several performance-critical features of the application",
              "DesignedUI features with *Sass* and *PostCSS*",
              "Created complex *automation scripts* with *Gulp*",
              "Reimplemented *complex legacy data migration batch scripts* with *Python*",
              "Enhanced *performance of slow PostgreSQL queries*",
              "Utilized *GitHub VCS*",
            ].map((i) => processMarkup(i)),
          },
        },
        medtronic: {
          company: "Medtronic",
          position: "Разработчик-стажер",
          duration: "Май 2015 - Сентябрь 2015",
          responsibilities: {
            title: "Обязанности",
            list: [
              "Работа с удаленной международной командой над устаревшим проектом",
              "Интеграция приложения в проект lgacy с помощью REST API с использованием шаблона Bridge",
            ],
          },
          achievements: {
            title: "Достижения",
            list: [
              "Спроектировал и разработал веб-приложение для мониторинга пациентов, позволяющее поместить станцию мониторинга больницы в карман медсестры",
            ],
          },
          technicalDetails: {
            title: "Технические Детали",
            list: [
              "Utilized *.NET MVC4* framework tools as well as *Razor* templating engine",
              "Consumed REST API using company's bridge API tool and LINQ queries",
              "Utilized *LessCSS* and *Bootstrap* to design front-end layouts",
              "Utilized *Perforce VSC*",
            ].map((i) => processMarkup(i)),
          },
        },
      },
      list: [
        {
          subtitle: "Образование",
          list: [
            {
              title: "Университет штата Аризона",
              description:
                "Декабрь 2020 г. - настоящее время, средний балл 4.0 (из 4.0)",
              list: [
                {
                  title: "Магистр компьютерных наук",
                  list: [
                    "Курсы: Введение в глубокое обучение визуальным вычислениям, Статистическое машинное обучение, Обеспечение и безопасность информации, Представление знаний и рассуждения",
                  ],
                },
              ],
            },
            {
              title: "Университет Колорадо в Боулдере",
              description: "Август 2013 г. - Декабрь 2015 г., средний балл 3.9",
              list: [
                {
                  title: "Бакалавр компьютерных наук",
                  list: [
                    "Курсы: Алгоритмы, Принципы языков программирования, Операционные системы, Специальные темы: Большие данные",
                  ],
                },
              ],
            },
            {
              title: "Университет Колорадо в Боулдере",
              description: "Август 2010 г. - декабрь 2013 г., средний балл 3.5",
              list: [
                {
                  title: "Бакалавр молекулярной биологии",
                  list: [
                    "Курсы: Генетика, Биология развития, Стволовые клетки",
                  ],
                },
              ],
            },
          ],
        },
        {
          subtitle: "Навыки",
          description: "Технологии",
        },
      ],
    },
    languages: {
      title: "Языки",
      russian: "Русский",
      english: "Английский",
      french: "Французский",
      german: "Немецкий",
      chinese: "Китайский",
    },
  },
  projectsPage: {
    title: "Проекты",
    sections: [
      {
        title: "Коммерческие Проекты",
        description:
          "Реальные проекты, которые дали мне большой опыт и сыграли решающую роль в моем профессиональном развитии.",
      },
      {
        title: "Студенческие Проекты",
        description:
          "Вот несколько проектов, которые являются частью моего пути становления инженером-программистом.",
      },
    ],
  },
  projectPages: {
    csaa: {
      title: "Приложение AAA MyQuote",
      subtitle: "Страховая Компания CSAA",
      snippet:
        "Современное приложение с отличным пользовательским интерфейсом.",
      paragraph1:
        "Несмотря на то, что страховая отрасль — одна из самых скучных вещей на Земле, разработка приложений для расчета страховых котировок может быть довольно увлекательной.",
      paragraph2:
        "Страхование – уникальная сфера. Основной предмет ее деятельности не имеет конкретного воплощения. Она имеет дело с такими абстракциями, как риск. Конечный пользователь не очень часто использует страховые продукты, а страховые приложения, как правило, не так многофункциональны, как некоторые другие аналоги. Тем не менее, это абсолютный must-have в современной цивилизации.",
      paragraph3:
        "Необходимость, связанная со страхованием, делает более дешевые продукты более востребованными. Тем не менее, даже более дорогие страховки, как правило, могут составить конкуренцию, используя свой бренд. Среди них юмор, узнаваемый дизайн и простота использования.",
      paragraph4:
        "Потенциальный клиент, нуждающийся в покупке страхового полиса, выходит в интернет, пытаясь получить расценки, и само собой разумеется, что чем лучше пользовательский опыт в процессе расценки, тем выше шансы, что они купят полис.",
      paragraph5: "Вот здесь подключаюсь и я как веб-разработчик.",
      paragraph6:
        "Я очень горжусь тем, что считаю *процесс котировок AAA одним из самых гладких в отрасли*. Спасибо сильным командам UI/UX и Dev в AAA.",
      paragraph7: "Наша команда отвечала за создание",
      paragraph7link: "приложение котировки ААА",
      paragraph8:
        "Это приложение является свидетельством того, как творческий подход может сделать даже самые скучные вещи интересными. Приложение имеет эффектный дизайн, оно очень интерактивно, а весь процесс занимает несколько минут.",
      paragraph9:
        "По сути, заявка на котировку представляет собой форму, которую должен заполнить пользователь. Однако эта форма чрезвычайно сложна. Это очень условно и связано с множеством возможных маршрутов, которые может выбрать пользователь. Очень скоро в процессе разработки его становится очень сложно поддерживать.",
      paragraph10:
        "Эти усилия были бы невозможны без отличной команды обеспечения качества. Команда QA обеспечила большую часть успеха этого проекта.",
      paragraph11:
        "Этот проект был одним из немногих, в которых я участвовал от начала до конца, и я очень горжусь конечным результатом. Я хотел бы поблагодарить руководство, команды UX, QA и Dev, работающие над этим проектом, за то, что они сделали процесс разработки интересным и значимым, несмотря на то, что страховая отрасль имеет тенденцию быть чрезвычайно скучной.",
    },
    "discount-tire": {
      title: "Интернет-магазин",
      subtitle: "Discount Tire",
      snippet: "Многофункциональный интернет-магазин.",
      imageCaption: "Discount Tire Страница Магазина",
      paragraph1:
        "Несмотря на то, что я недолго работал в Discount Tire, мне это очень понравилось, потому что впервые в моей карьере я смог, наконец, объяснить непрофессионалу, чем я на самом деле занимаюсь, и дать ему ссылку на приложение.",
      paragraph2:
        "Их основное приложение — это интернет-магазин, в котором вы можете приобрести диски и шины, и поэтому оно имеет все необходимые функции:",
      features: [
        "Управление счетом",
        "Управление корзиной",
        "Обработка платежей",
        "Обработка местоположения",
        "Объявления и обработка кампаний",
        "Поиск и отображение продуктов",
      ],
      paragraph3:
        "Я получил неплохое понимание о том как принимаются решения командой, подходящей к созданию интернет-магазина с React и GraphQL, начиная от того, как они обрабатывают состояние, и заканчивая тем, как они проводят оптимизацию.",
      link: "Вот ссылка на их приложение.",
    },
    "automation-hero": {
      title: "HeroGo",
      subtitle: "RPA Инструмент автоматизации",
      snippet: "Проект автоматизации взаимодействия с рабочим столом.",
      imageCaption: "Экран приложения Automation Hero",
      paragraph1:
        "Уникальность этого проекта заключалась в том, что это был мой первый (и последний) проект в качестве фрилансера, работающего удаленно. Также это был мой первый проект по созданию платформы RPA. Не говоря уже о том, что стартап был основан парой немецких предпринимателей, поэтому местонахождение их главного офиса находилось в Берлине.",
      paragraph2:
        "Разработка автоматизации рабочего стола RPA непроста. На самом деле абсолютно невозможно использовать старомодные подходы, такие как запросы к API уровня пользовательского интерфейса, для получения обработчиков элементов управления. К сожалению, это был именно тот путь, по которому пошел этот стартап. Тем не менее, это позволило мне многое узнать о настольной разработке с использованием C# и electron.js. Я также узнал достаточно о API Windows Presentation Framework, чтобы быть опасным. Не говоря уже о Google Extension API и требованиях для публикации и запуска программ в Windows и Chrome (как расширения).",
    },
    alphabank: {
      title: "Альфабанк для среднего бизнеса",
      subtitle: "Приложение банковской панели",
      snippet: "Микро интерфейсное приложение.",
      imageCaption: "Личный кабинет Альфабанка",
      paragraph1:
        "Альфабанк — не только первая финтех-компания, в которой я работал, но и самая первая технологическая компания, в которой я работал в России.",
      paragraph2:
        "Их основным стеком были React+Redux Microfrontends. Мой опыт там был замечательным, так как команды были действительно талантливыми, гибкими и разносторонними.",
      paragraph3:
        "Используемые пайплайны были довольно стандартными. Архитектура была разбита на front-end, middle и back-end части.",
      paragraph4:
        "Я бы сказал, что дизайн пользовательского интерфейса Alfabank — один из лучших дизайнов пользовательского интерфейса банковских приложений, которые я видел за всю свою карьеру.",
      paragraph5:
        "Я очень благодарен за возможность быть подрядчиком для этой замечательной компании.",
    },
    isonas: {
      title: "Pure Access",
      subtitle: "Панель управления доступом",
      snippet: "Управление доступом с поддержкой IP.",
      imageCaption: "ISONAS Pure Access",
      paragraph1:
        "ISONAS был стартапом, который в основном занимался созданием систем безопасности.",
      paragraph2:
        "Моя работа заключалась в том, чтобы сделать и поддерживать приборную панель для взаимодействия с их устройствами. Мне все нравилось в этой работе. Во-первых, я познакомился с Java на серверной части, работая с очень низкоуровневыми API, взаимодействующими с оборудованием систем безопасности через TCP/IP. ",
      paragraph3:
        "У меня была свобода проектирования облачной инфраструктуры в AWS. Я многому научился, работая в компании. Я очень благодарен Джесси Ютону, моему руководителю, за всю его помощь и поддержку.",
    },
    medtronic: {
      title: "Vital Sync",
      subtitle: "Панель мониторинга ИВЛ",
      snippet: "Приложение для мониторинга вентилятора.",
      imageCaption: "Vital Sync",
      paragraph1:
        "В качестве стажера в Medtronic я отвечал за создание тонкого веб-клиента для приложения для мониторинга пациентов с использованием пакета .NET MVC4.",
    },
    picturesOfYou: {
      title: "Pictures of You",
      subtitle: "Класс по Компьютерной Графике",
      snippet: "Визуализация Музыкального Видео при Помощи WebGL.",
    },
    pipBoy: {
      title: "Pip Boy",
      subtitle: "Персональное Портфолио",
      snippet: "Портфолио на основе WebGL и Canvas.",
    },
  },
  misc: {
    title: "Прочее",
    sections: [
      {
        title: "Блог",
        description: [
          `Мне нравится писать статьи на разные темы. Мои любимые темы — философия и программирование. Обычно мотивация, когда я пишу статью, заключается в том, чтобы использовать этот процесс, чтобы помочь мне в процессе обучения и размышления, поскольку гораздо легче лучше понять конкретную тему, когда пытаешься объяснить ее кому-то. Даже будь то резиновый утенок из методолгии «отладки резинового утенка». Я также использую его как способ сохранить воспоминания о том, как со временем меняется мой мыслительный процесс, а также для того, чтобы завязать разговор с теми, кто достаточно любезен, чтобы прочитать его.`,
          "Вот несколько статей, которыми я хотел бы поделиться.",
        ],
      },
      {
        title: "Веб Разработка",
        projects: [
          {
            title: "React + RxJS",
            subtitle: "Каким должен быть React",
            snippet: "Мое мнение об управлении состоянием.",
          },
          {
            title: "React TDD",
            subtitle: "Разработка через тестирование в React",
            snippet: "Мнение о TDD в React",
          },
          {
            title: "Мне не нравится GraphQL",
            subtitle: "Итак, как насчет JSON и TS?",
            snippet: "Мнение о декларативном доступе к данным.",
          },
          {
            title: "Мой опыт работы с WebRTC",
            subtitle: "Некоторые извлеченные уроки",
            snippet: "Делимся некоторыми мыслями о RTC.",
          },
        ],
      },
      {
        title: "Машинное обучение",
        projects: [
          {
            title: "Анализируя мое замешательство",
            subtitle: "SVM",
            snippet: "Размышления о концепции SVM.",
          },
        ],
      },
      {
        title: "Прочее",
        description: [
          "Есть несколько моментов, которыми я считаю уместным поделиться здесь, поскольку они содержат дополнительные детали, которые могут помочь лучше рассказать мою историю.",
          "{{link}} хотели взять у меня интервью и поделиться своей историей о том, как стать успешным внештатным разработчиком на их платформе, и я с радостью воспользовался этой возможностью. Вот получившаяся статья:",
        ],
        link: "Фрилансерское агентство Soshace",
        projects: [
          {
            title: "Интервью Статья",
            subtitle: "Level Up Coding Публикация",
            snippet: "Интервью Марины Воронцовы",
          },
          {
            title: "Хороший Программист",
            subtitle: "Кто такой хороший программист?",
            snippet: "Размышления о единорогах",
          },
        ],
      },
      {
        title: "Интересы",
        description: [
          "Я считаю, что любопытство — это одна из черт, которыми должен обладать хороший специалист по решению проблем, поскольку оно побуждает к исследованиям, которые жизненно важны при решении проблем. Я нахожу, что эти различные интересы только помогали мне в этом отношении.",
          [
            "Языки",
            "Есть очень немного вещей, которые могли бы сравниться по своей способности расширять кругозор так, как это делает изучение языка. Майский урок заключается в том, что именно играя и учась на ошибках, вы естественным образом становитесь лучше и сохраняете свою мотивацию.",
          ],
          [
            "Философия",
            [
              "Изучение языков также помогает лучше познакомиться с абстракциями и абстрактным мышлением, что имеет решающее значение для успешного решения проблем. Нет более абстрактных областей знаний, чем логика и грамматика. Оба они связаны с языком. Чем глубже вы погружаетесь в абстракции, тем веселее становится.",
              "С более практической точки зрения я практикую минимализм, или стараюсь сосредоточить свое внимание на том, что необходимо и достаточно в данных обстоятельствах. Если что-то не является необходимым в данных обстоятельствах, это обычно не привлекает много моего внимания или энергии.",
            ],
          ],
          [
            "Музыка",
            [
              "Мы с братом время от времени играем в крошечной группе. Это научило меня тому, что творческое сотрудничество требует много энергии и что вы должны научиться много практиковаться самостоятельно, прежде чем делать что-то значимое в группе.",
              "Некоторые из наших треков можно найти здесь.",
            ],
          ],
          [
            "Математика",
            [
              "Математика представляет для меня интерес как часть более широкого изучения философии. Это наиболее очевидная область, в которой вы можете построить более сложные знания из небольшого набора основополагающих элементов. Моя страсть — создавать онтологии для хранения своих знаний.",
              [
                "Я также предпринял очень интересное {{link}}.",
                "путешествие, рассуждая о природе простых чисел и простых чисел-близнецов",
              ],
            ],
          ],
          [
            "Физическая Культура",
            [
              "Как часть минималистского подхода, я считаю, что калистеника (воркаут) чрезвычайно эффективна в этом отношении. С минимальным набором оборудования можно выполнять комплексную тренировку.",
            ],
          ],
          [
            "Самодостаточная жизнь",
            [
              "Результатом моей философской интроспективы является заключение, что целью каждого человеческого существа является достижение целостности. Это прежде всего достигается за счет удовлетворения потребностей и стремления к самодостаточности.",
              [
                "Вот электронная книга, которую я написал для своей некоммерческой компании Aeroaquaponic.",
                "В ней подводятся итоги моих философских размышлений на темы смысла жизни и счастья. Он описывает минималистский подход к жизни, который полезен не только практикующему, но и в более широком контексте. Самодостаточность — моя долгосрочная цель.",
              ],
            ],
          ],
        ],
      },
    ],
  },
  contactPage: {
    title: "Контакт",
    subtitle: "Будем на Связи",
    description:
      "Спасибо, что уделили внимание моему резюме! Обращайтесь ко мне по поводу предложений по работе или если у вас есть какие-либо вопросы. Я с нетерпением жду общения и сотрудничества с творческими людьми.",
    submittedFormMessage:
      "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время!",
    form: {
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Адрес Электронной Почты",
      subject: "Заголовок",
      body: "Сообщение",
      submit: "Отправить",
    },
  },
};

const translationChinese: TTranslation = {
  menu: {
    resume: "恢复",
    projects: "项目",
    misc: "杂项",
    contact: "接触",
  },
  profilePage: {
    name: "Kirill Novik",
    title: "全栈开发人员",
    subtitle: "超过7年的经验。 为远程工作开放",
    description:
      "我是一名多才多艺的全栈开发人员，在设计、创建和维护可扩展的云基础设施和应用程序方面经验丰富，专注于测试驱动、敏捷和面向对象的开发实践。",
    tags: [
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
    ],
    experience: {
      title: "经验",
      career: {
        title: "职业",
        csaa: {
          company: "CSAA 保险",
          position: "职员软件工程师",
          duration: "2020年11月 - 2022年6月",
          responsibilities: {
            title: "责任",
            list: [
              "创建和维护自定义保险报价应用程序",
              "根据公司的设计系统规范创建一个 React UI 套件",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "成功地向业务、开发和质量保证团队传达了技术细节",
              "成功实现主要功能",
              "严格遵循 UI 设计规范，确保质量",
              "显着提高测试覆盖率",
              "影响了证明可靠的重要架构决策",
              "在冲刺中表现出可靠的性能",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "使用带有 Hooks 的 React",
              "通过使用 TypeScript 和单元测试实践提高了可维护性",
              "与 AWS 后端集成的功能",
              "利用缓存和 Service Worker 优化应用程序性能的最佳实践",
              "设置和使用流程自动化（GitHub 工作流程、Git 挂钩、AWS CI 管道）",
              "使用 UsableNet AQA 验证可访问性",
            ].map((i) => processMarkup(i)),
          },
        },
        discountTire: {
          company: "Discount Tire",
          position: "React 开发人员（合同）",
          duration: "2020年3月 - 2020年5月",
          responsibilities: {
            title: "责任",
            list: [
              "协助将主应用程序迁移到 React",
              "提高测试覆盖率",
              "参与架构决策过程",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "成功地向业务、开发和质量保证团队传达了技术细节",
              "成功实现主要功能",
              "严格遵循 UI 设计规范，确保质量",
              "显着提高测试覆盖率",
              "影响了证明可靠的重要架构决策",
              "在冲刺中表现出可靠的性能",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "使用带有 Hooks 的 React",
              "通过使用 TypeScript 和单元测试实践提高了可维护性",
              "与 AWS 后端集成的功能",
              "利用缓存和 Service Worker 优化应用程序性能的最佳实践",
              "设置和使用流程自动化（GitHub 工作流程、Git 挂钩、AWS CI 管道）",
              "使用 UsableNet AQA 验证可访问性",
            ].map((i) => processMarkup(i)),
          },
        },
        automationHero: {
          company: "Automation Hero via Soshace (Contractor)",
          position: "高级前端开发人员",
          duration: "2019 年 1 月 - 2020 年 1 月",
          responsibilities: {
            title: "责任",
            list: [
              "开发可用作 Chrome 扩展和桌面客户端的跨平台 RPA 应用程序",
              "快速交付新功能",
              "按规范实施设计",
              "为 Windows 创建 .NET 服务以促进桌面应用程序和 Windows 之间的交互",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "成功实现核心功能",
              "通过红绿重构 TDD 实践一直保持高百分比的测试覆盖率",
              "设计的高度模块化和快速开发的架构",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "使用 React + Typescript + RxJS 进行演示和业务逻辑",
              "使用 .NET Framework 构建 Windows 服务",
              "利用 chrome 扩展 API 以及 Windows 互操作 API 来实现 RPA 功能",
              "通过添加从 Salesforce 仪表板打开扩展的功能，将我们的产品与 Salesforce 集成",
              "获得了使用 Chrome API 进行浏览器扩展和 DOM 的丰富知识",
            ].map((i) => processMarkup(i)),
          },
        },
        alphabank: {
          company: "Alfabank",
          position: "高级前端开发人员",
          duration: "2018年3月 - 2018年10月",
          responsibilities: {
            title: "责任",
            list: [
              "使用 React + Redux + Saga 开发前端应用程序",
              "为几个快节奏的银行项目做出贡献",
              "增加测试覆盖率",
              "遵循敏捷 Scrum 最佳实践",
              "有效地与不同项目的团队沟通",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "成功实施了包括邮件服务和保理在内的多个银行项目",
              "快速熟悉各种项目的复杂代码库",
              "显着增加测试覆盖率",
              "有效地与不同项目的团队沟通",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "使用 React + Redux + Saga 作为前端应用程序开发的堆栈",
              "贡献于开源 UI 库（ARUI Feather）",
              "从应用程序的中间消费数据",
              "利用服务器端渲染提高加载速度",
              "在应用程序的 DevOps 端使用了 Docker 和 OpenShift 以及 JIRA + Jenkins 管道",
              "使用 Redux Form 处理表单数据",
              "使用 Jest 和快照进行单元测试",
              "使用 PostCSS 作为样式",
              "提出了对项目结构的几项改进",
            ].map((i) => processMarkup(i)),
          },
        },
        isonas: {
          company: "ISONAS",
          position: "软件工程师",
          duration: "2016年7月 - 2017年12月",
          responsibilities: {
            title: "责任",
            list: [
              "维护一个紧密耦合的单体应用程序",
              "提高代码库的可维护性、可读性和可测试性",
              "获得公司专有框架的专业知识",
              "始终如一地交付编写良好且经过良好测试的代码",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "为与遗留 UI 代码库集成而设计的 React.js UI 元素",
              "使用 WebSockets 将实时数据传输引入应用程序",
              "设计并实现了一个将应用程序与 Active Directory 集成的瘦客户端",
              "应用程序各种视图的实现逻辑和样式",
              "设计并实现了允许客户端与应用程序集成的 REST API 网关",
              "使用 Docker 将遗留的单体应用程序重构为微服务",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "创建 *微服务* 作为 *docker 服务堆栈*，具有定义明确的 *REST* 接口，部署为具有 *docker swarm 模式* 的云集群",
              "根据正确的 *MVC 和 SOLID 原则*，使用 *最佳 JavaScript OOP 实践*，通过重构和模块化组件来减少前端技术债务",
              "根据 Swagger OpenAPI 规范*设计应用程序 *REST API，并利用 *Swagger Codegen API* 创建高度可扩展的 *REST API 网关微服务*",
              "利用 *Swagger Codegen API* 成功实现 *REST API 网关微服务*",
              "成功实现了两个独立的 *WebSocket* 服务器，其中 *javax WebSocket Server API* 作为 java 包的一部分，以及高度可扩展的 *Socket.io Server API* 作为微服务以及 *WebSocet 客户端* 功能",
              "在应用程序中设计了最低限度的代码侵入性*基于 AWS 读取副本的解决方案*，以缓解对具有高读写争用的表的关键数据库查询的缓慢响应时间问题*将查询响应时间减少 10 倍*",
              "设计和实施的 *Active Directory 集成客户端 * 利用 *LDAP 查询 * 允许将 Active Directory 用户和凭据导入系统",
              "使用 *Mockito* 和 *JUnit* 创建了测试套件，以对复杂依赖重的方法进行单元测试",
              "使用 *Selenium*、*Sikuli* 以及 *NodeUnit* 和 *Mocha* 创建了前端测试套件",
              "在 *AWS* 环境中配置和部署 *Jetty* 和 *Tomcat* 服务器",
              "设计并提出 *ReactJS + Redux UI 元素 + TypeScript* 以与公司的框架集成以实现更好的可维护性",
              "为应用程序的几个性能关键特性成功引入了*多线程行为*",
              "DesignedUI features with *Sass* and *PostCSS*",
              "用 *Gulp* 创建了复杂的 *自动化脚本*",
              "使用 *Python* 重新实现 *复杂的遗留数据迁移批处理脚本*",
              "增强 *慢 PostgreSQL 查询的性能*",
              "利用 *GitHub VCS*",
            ].map((i) => processMarkup(i)),
          },
        },
        medtronic: {
          company: "Medtronic",
          position: "软件应用程序开发人员",
          duration: "2015年5月 - 2015年9月",
          responsibilities: {
            title: "责任",
            list: [
              "与远程国际团队合作开展遗留项目",
              "使用 Bridge OOP 模式通过 REST API 将应用程序集成到 lgacy 项目中",
            ],
          },
          achievements: {
            title: "成就",
            list: [
              "设计并开发了一个病人监控网络应用程序，让医院的监控站放在护士的口袋里",
            ],
          },
          technicalDetails: {
            title: "技术细节",
            list: [
              "利用 *.NET MVC4* 框架工具以及 *Razor* 模板引擎",
              "使用公司的桥接 API 工具和 LINQ 查询使用 REST API",
              "利用 *LessCSS* 和 *Bootstrap* 设计前端布局",
              "利用 *Perforce VSC*",
            ].map((i) => processMarkup(i)),
          },
        },
      },
      list: [
        {
          subtitle: "教育",
          list: [
            {
              title: "亚利桑那州立大学",
              description: "2020 年 12 月至今，GPA 4.0",
              list: [
                {
                  title: "计算机科学硕士",
                  list: [
                    "课程：视觉计算深度学习概论、统计机器学习、信息保障与安全、知识表示与推理",
                  ],
                },
              ],
            },
            {
              title: "科罗拉多大学博尔德分校",
              description: "2013 年 8 月 - 2015 年 12 月，GPA 3.9",
              list: [
                {
                  title: "计算机科学学士学位",
                  list: ["课程：算法、编程语言原理、操作系统、专题：大数据"],
                },
              ],
            },
            {
              title: "科罗拉多大学博尔德分校",
              description: "2010 年 8 月 - 2013 年 12 月，GPA 3.5",
              list: [
                {
                  title: "分子生物学学士",
                  list: ["课程：遗传学、发育生物学、干细胞"],
                },
              ],
            },
          ],
        },
        {
          subtitle: "技能",
          description: "技术",
        },
      ],
    },
    languages: {
      title: "语言",
      russian: "俄语",
      english: "英语",
      french: "法语",
      german: "德语",
      chinese: "汉语",
    },
  },
  projectsPage: {
    title: "项目",
    sections: [
      {
        title: "商业项目",
        description:
          "现实世界的项目给了我很多经验，并且是我职业发展的关键部分。",
      },
      {
        title: "学生项目",
        description: "这里有一些项目是我成为软件工程师的一部分。",
      },
    ],
  },
  projectPages: {
    csaa: {
      title: "AAA MyQuote 应用程序",
      subtitle: "CSAA保险公司",
      snippet: "具有出色用户体验的现代应用程序。",
      paragraph1:
        "尽管保险业是地球上最无聊的事情之一，但保险报价应用程序的开发实际上非常有趣。",
      paragraph2:
        "保险是一个独特的领域。 他们活动的主体没有具体的体现。 它处理诸如风险之类的抽象。 最终用户不经常使用保险产品，保险应用程序往往不像其他一些同行那样丰富。 然而，它是现代文明中的绝对必备品。",
      paragraph3:
        "保险带来的必要性往往会使更便宜的选择对客户更有利。 然而，即使是更昂贵的保险也往往能够利用其品牌进行竞争。 其中包括幽默、可识别的设计和易用性。",
      paragraph4:
        "需要购买保险单的潜在客户上网尝试获取报价，不用说，在报价过程中用户体验越好，他们购买保单的机会就越大。",
      paragraph5: "这就是我进入图片的地方。",
      paragraph6:
        "我很自豪地说，我认为 *AAA 报价流程是业内最顺畅的流程之一*。 感谢 AAA 强大的 UI/UX 和开发团队。",
      paragraph7: "我们的团队负责建设",
      paragraph7link: "AAA 报价申请",
      paragraph8:
        "此应用程序证明了创造性方法如何使最枯燥的事情变得有趣。 该应用程序设计有效，交互性强，整个过程只需几分钟即可完成。",
      paragraph9:
        "本质上，报价申请是用户必须填写的表格。 然而，这种形式极其复杂。 它是高度有条件的，并且与用户可以采取的许多可能的路线相关联。 在开发过程中很快，维护变得非常复杂。",
      paragraph10:
        "如果没有优秀的质量保证团队，这项工作将是不可能的。 QA 团队在很大程度上确保了该项目的成功。",
      paragraph11:
        "这个项目是我能够从头到尾参与的几个项目之一，并对最终结果感到非常自豪。 我要感谢从事这个项目的管理层、用户体验、质量保证和开发团队，尽管保险业往往非常乏味，但他们使开发过程变得有趣和有意义。",
    },
    "discount-tire": {
      title: "网上商城",
      subtitle: "Discount Tire",
      snippet: "功能丰富的在线商店。",
      imageCaption: "Discount Tire 商店页面",
      paragraph1:
        "尽管我在 Discount Tire 工作过短暂，但我真的很喜欢它，因为这是我职业生涯中的第一次，我终于可以向外行解释我实际在做什么，并给他们应用程序的链接。",
      paragraph2:
        "他们的主要应用程序是一个在线商店，您可以在其中购买车轮和轮胎，因此它具有所有必要的功能：",
      features: [
        "账户处理",
        "购物车管理",
        "付款处理",
        "位置处理",
        "广告和活动处理",
        "产品搜索和展示",
      ],
      paragraph3:
        "关于团队使用 React 和 GraphQL 构建在线商店的决策，我得到了一些有趣的见解，从他们如何处理状态到如何进行优化。",
      link: "这是他们的应用程序的链接。",
    },
    "automation-hero": {
      title: "HeroGo",
      subtitle: "RPA 自动化工具",
      snippet: "桌面交互自动化项目。",
      imageCaption: "Automation Hero 应用程序屏幕",
      paragraph1:
        "这个项目的独特之处在于它是我作为一名远程工作的自由职业者的第一个（也是最后一个）项目。 此外，这是我创建 RPA 平台的第一个项目。 更不用说这家初创公司是由几位德国企业家创立的，因此，他们的主要办公室就在柏林。",
      paragraph2:
        "RPA 桌面自动化开发并不容易。 事实上，使用查询 UI 层 API 等老式方法来获取控制处理程序是绝对不可能的。 不幸的是，这正是这家初创公司所走的路线。 然而，这让我学到了很多关于使用 C# 和 electron.js 进行桌面开发的知识。 我还了解到一些 Windows Presentation Framework API 是危险的。 更不用说 Google Extension API 以及在 Windows 和 Chrome 上发布和运行程序的要求（作为扩展）。 ",
    },
    alphabank: {
      title: "面向中型企业的 Alphabank",
      subtitle: "银行仪表板应用程序",
      snippet: "微前端应用。",
      imageCaption: "Alphabank 仪表板",
      paragraph1:
        "Alphabank 不仅是我工作的第一家金融科技公司，也是我在俄罗斯工作的第一家科技公司。",
      paragraph2:
        "他们的主要堆栈是 React+Redux 微前端。 我在那里工作的经历非常棒，因为这些团队非常有才华、敏捷且多才多艺。",
      paragraph3: "使用的管道非常标准。 该架构大致分为前端、中间和后端部分。",
      paragraph4:
        "我认为 Alphabank 的 UI 设计是我在整个职业生涯中见过的最好的银行应用程序 UI 设计之一。",
      paragraph5: "我非常感谢有机会成为这家伟大公司的承包商。",
    },
    isonas: {
      title: "Pure Access",
      subtitle: "访问控制管理仪表板",
      snippet: "启用 IP 的访问控制。",
      imageCaption: "ISONAS Pure Access",
      paragraph1: "ISONAS 是一家主要专注于安全系统硬件的初创公司。 ",
      paragraph2:
        "我的工作是制作和维护仪表板以与他们的设备进行交互。 我喜欢那份工作的一切。 首先，我在后端接触到 Java，使用非常低级的 API 通过 TCP/IP 与安全系统硬件进行交互。",
      paragraph3:
        "我可以自由地在 AWS 中设计云基础设施。 在公司工作期间，我学到了很多东西。 我非常感谢我的主管 Jesse Euton 的帮助和鼓励。",
    },
    medtronic: {
      title: "Vital Sync",
      subtitle: "呼吸机监控仪表板",
      snippet: "呼吸机监控应用程序。",
      imageCaption: "Vital Sync",
      paragraph1:
        "作为 Medtronic 的实习生，我的职责是使用 .NET MVC4 套件为患者监测应用程序创建一个瘦 Web 客户端。",
    },
    picturesOfYou: {
      title: "Pictures of You",
      subtitle: "计算机图形类",
      snippet: "使用 WebGL 进行音乐视频渲染。",
    },
    pipBoy: {
      title: "Pip Boy",
      subtitle: "个人投资组合",
      snippet: "基于 WebGL 和 Canvas 的产品组合。",
    },
  },
  misc: {
    title: "其他",
    sections: [
      {
        title: "博客",
        description: [
          `我喜欢写各种主题的文章。我最喜欢的主题是哲学和编程。通常我写文章的动机是使用这个过程来帮助我学习和思考，因为当你试图向某人解释某个特定主题时，它会更容易更好地理解它。即使是橡皮鸭，这在技术上使我成为“橡皮鸭调试”方法的实践者。我还用它作为一种方式来记住我的思维过程如何随着时间的推移而变化，并与那些愿意阅读它的人进行对话。`,
          "这里有一些我想分享的文章。",
        ],
      },
      {
        title: "Web开发",
        projects: [
          {
            title: "React + RxJS",
            subtitle: "React 应该如何？",
            snippet: "我对状态管理的看法。",
          },
          {
            title: "React TDD",
            subtitle: "React 中的测试驱动开发",
            snippet: "关于 React 中的 TDD 的看法",
          },
          {
            title: "我不喜欢 GraphQL",
            subtitle: "那么 JSON 和 TS 呢？",
            snippet: "关于声明性数据访问的意见。",
          },
          {
            title: "我对 WebRTC 的体验",
            subtitle: "一些经验教训",
            snippet: "分享一些关于 RTC 的想法。",
          },
        ],
      },
      {
        title: "机器学习",
        projects: [
          {
            title: "Анализируя мое замешательство",
            subtitle: "SVM",
            snippet: "对 SVM 概念的思考。",
          },
        ],
      },
      {
        title: "其他",
        description: [
          "我觉得有几点适合在这里分享，因为它们包含可能有助于更好地讲述我的故事的更多细节。.",
          "想采访我并分享他们关于如何在他们的平台上成为一名成功的自由开发者的故事，我很高兴地抓住了这个机会。",
        ],
        link: "自由职业者Soshace",
        projects: [
          {
            title: "采访文章",
            subtitle: "Level Up Coding 出版物",
            snippet: "采访玛丽娜·沃龙佐娃",
          },
          {
            title: "Good Developer",
            subtitle: "What Makes a Good Developer?",
            snippet: "Reflection on the Nature of Goodness",
          },
        ],
      },
      {
        title: "兴趣",
        description: [
          "我相信好奇心是一个好的问题解决者应该具备的特质之一，因为它鼓励探索，这对于解决问题至关重要。 我发现这些不同的兴趣只在这方面帮助了我。",
          [
            "语言",
            "很少有东西能比得上语言学习方式拓宽视野的能力。 梅的教训是，通过从错误中学习和学习，你自然会变得更好并保持动力。",
          ],
          [
            "哲学",
            [
              "学习语言还可以帮助您更加熟悉抽象和抽象思维，这对于成功解决问题至关重要。 没有比逻辑和语法更抽象的知识领域了。 两者都与语言有关。 你越深入抽象，它就会变得越有趣。",
              "从更实际的角度来看，我练习极简主义，或者尝试将注意力集中在给定情况下什么是必要和充分的。 如果在这种情况下不需要某些东西，它通常不会吸引我太多的注意力或精力。",
            ],
          ],
          [
            "音乐",
            [
              "我哥哥和我不时在一个小乐队里演奏。 它告诉我，创造性的合作需要大量的精力，在团队中做任何有意义的事情之前，你必须学会​​自己练习很多。",
              "我们的一些曲目可以在这里找到。",
            ],
          ],
          [
            "数学",
            [
              "作为更广泛的哲学研究的一部分，我对数学很感兴趣。 这是最明显的领域，您可以从一小组构建块中构建更复杂的知识。 我的热情是创建本体来存储我的知识。",
              [
                "我还经历了一段非常有趣的 {{link}}",
                "旅程，争论素数和孪生素数的性质。",
              ],
            ],
          ],
          [
            "体育",
            [
              "作为极简主义方法的一部分，我发现健美操在这方面非常有效。 只需最少的设备，您就可以进行复杂的锻炼。",
            ],
          ],
          [
            "自给自足的生活",
            [
              "我的哲学反省的结果是，每个人的目标都是实现诚信。 这主要是通过满足需求和争取自给自足来实现的。",
              [
                "这是我为我的非营利公司 Aeroaquaponic 写的电子书。",
                "它总结了我对生命和幸福意义的哲学思考。 他描述了一种极简主义的生活方式，不仅对从业者有用，而且在更广泛的背景下也有用。 自给自足是我的长期目标。",
              ],
            ],
          ],
        ],
      },
    ],
  },
  contactPage: {
    title: "联络",
    subtitle: "让我们保持联系",
    description:
      "感谢您看我的简历！ 联系我获取工作机会或如果您有任何问题。 我期待与有创造力的人交流和合作。",
    submittedFormMessage: "感谢您的留言。 我会尽快回复您！",
    form: {
      firstName: "名字",
      lastName: "姓",
      email: "电子邮件地址",
      subject: "消息的主题",
      body: "信息",
      submit: "提交",
    },
  },
};

export const translations = {
  [languageOptions[0]]: translationEnglish,
  [languageOptions[1]]: translationRussian,
  [languageOptions[2]]: translationChinese,
};

export const getStars = (num: number) => {
  const number = Math.min(Math.max(num, 0), 5);
  const opaque = new Array(number).fill("\u2605");
  const hollow = new Array(5).fill("\u2606");
  hollow.splice(0, number, opaque);
  return hollow.join("").replaceAll(",", "");
};

export const getStarsMarkup = (num: number) => {
  return <h4>{getStars(num)}</h4>;
};
