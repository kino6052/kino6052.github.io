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
      list: [
        {
          subtitle: "Career",
          list: [
            {
              title: "Staff Software Engineer",
              company: "CSAA Insurance",
              description: "November 2020 - June 2022",
              list: [
                {
                  title: "Responsibilities",
                  list: [
                    "Create and maintain a custom insurance quote application",
                    "Create a React UI kit according to the company's design system specifications",
                  ],
                },
                {
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
                {
                  title: "Technical Details",
                  list: [
                    "Utilized React with Hooks",
                    "Improved maintainability by using TypeScript and Unit Test practices",
                    "Integrated features with the AWS backend",
                    "Utilized best practices to optimize application performance using caching and Service Workers",
                    "Set up and utilized process automation (GitHub workflows, Git hooks, AWS CI Pipeline)",
                    "Verified accessibility with UsableNet AQA",
                  ],
                },
              ],
            },
            {
              title: "React Developer (Contract)",
              company: "Discount Tire",
              description: "March 2020 - May 2020",
              items: [
                {
                  title: "Responsibilities",
                  list: [
                    "Assist in the migration of the main application to React",
                    "Improve test coverage",
                    "Participate in architectural decision making process",
                  ],
                },
                {
                  title: "Achievements",
                  list: [
                    "Successfully communicated technical details to business, development and QA teams",
                    "Successfully implemented major features",
                    "Carefully followed UI design specifications to ensure quality",
                    "Significantly improved test coverage",
                    "Influenced important architectural decisions that proved reliable",
                    "Demonstrated reliable performance across sprints",
                  ],
                },
                {
                  title: "Technical Details",
                  list: [
                    "Utilized React with Hooks",
                    "Improved maintainability by using TypeScript and Unit Test practices",
                    "Integrated features with the AWS backend",
                    "Utilized best practices to optimize application performance using caching and Service Workers",
                    "Set up and utilized process automation (GitHub workflows, Git hooks, AWS CI Pipeline)",
                    "Verified accessibility with UsableNet AQA",
                  ],
                },
              ],
            },
          ],
        },
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
    title: "Фул-стэк Разработчик",
    subtitle: "Более 7 лет опыта. Рассматриваю предложения по удаленке.",
    description:
      "Я универсальный разработчик с полным стеком, имеющий опыт проектирования, создания и обслуживания масштабируемых облачных инфраструктур и приложений с акцентом на методах разработки, основанной на тестировании, гибкой и объектно-ориентированной разработке.",
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
      list: [
        {
          subtitle: "Карьера",
          list: [
            {
              title: "Штатный Инженер-Программист",
              company: "Страховая Компания CSAA",
              description: "Ноябрь 2020 г. - Июнь 2022 г.",
              list: [
                {
                  title: "Обязанности",
                  list: [
                    "Создание и поддержка специализированного приложения для расчета стоимости страховки",
                    "Создайте библиотеки пользовательского интерфейса React в соответствии со спецификациями системы дизайна компании",
                  ],
                },
                {
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
                {
                  title: "Технические Подробности",
                  list: [
                    "Использовали React с Hooks",
                    "Улучшенная поддерживаемость за счет использования методов TypeScript и модульного тестирования.",
                    "Интегрированные функции с серверной частью AWS",
                    "Использованы лучшие практики для оптимизации производительности приложений с помощью кэширования и Service Workers.",
                    "Использование лучших практик для оптимизации производительности приложений. Настройка и автоматизация процессов (рабочие процессы GitHub, обработчики Git, AWS CI Pipeline), кэширование Sing и Service Workers.",
                    "Подтвержденная доступность с помощью UsableNet AQA",
                  ],
                },
              ],
            },
            {
              title: "Разработчик React (Контракт)",
              company: "Discount Tire",
              description: "Март 2020 г. - Май 2020 г.",
              items: [
                {
                  title: "Обязанности",
                  list: [
                    "Помощь в переносе основного приложения на React",
                    "Улучшить тестовое покрытие",
                    "Участвовать в процессе принятия архитектурных решений",
                  ],
                },
                {
                  title: "Achievements",
                  list: [
                    "Успешная передача технических деталей бизнес-командам, командам разработчиков и отдела контроля качества",
                    "Успешно реализованы основные функции",
                    "Тщательное соблюдение спецификаций дизайна пользовательского интерфейса для обеспечения качества",
                    "Значительно улучшенное тестовое покрытие",
                    "Повлиял на важные архитектурные решения, которые оказались надежными",
                    "Продемонстрированная надежная производительность в спринтах",
                  ],
                },
                {
                  title: "Технические подробности",
                  list: [
                    "Использовали React с Hooks",
                    "Улучшенная ремонтопригодность за счет использования методов TypeScript и модульного тестирования",
                    "Интегрированные функции с серверной частью AWS",
                    "Использованы лучшие практики для оптимизации производительности приложений с помощью кэширования и Service Workers",
                    "Настройка и использование автоматизации процессов (рабочие процессы GitHub, обработчики Git, AWS CI Pipeline)",
                    "Подтвержденная доступность с помощью UsableNet AQA",
                  ],
                },
              ],
            },
          ],
        },
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
        "Страхование – уникальная сфера. Основной предмет их деятельности не имеет конкретного воплощения. Он имеет дело с такими абстракциями, как риск. Конечный пользователь не очень часто использует страховые продукты, а страховые приложения, как правило, не так многофункциональны, как некоторые другие аналоги. Тем не менее, это абсолютный must-have в современной цивилизации.",
      paragraph3:
        "Необходимость, связанная со страхованием, делает более дешевые варианты более выгодными для клиентов. Тем не менее, даже более дорогие страховки, как правило, могут составить конкуренцию, используя свой бренд. Среди них юмор, узнаваемый дизайн и простота использования.",
      paragraph4:
        "Потенциальный клиент, нуждающийся в покупке страхового полиса, выходит в интернет, пытаясь получить расценки, и само собой разумеется, что чем лучше пользовательский опыт в процессе расценки, тем выше шансы, что они купят полис.",
      paragraph5: "Вот где я вхожу в картину.",
      paragraph6:
        "Я очень горжусь тем, что считаю *процесс котировок AAA одним из самых гладких в отрасли*. Спасибо сильным командам UI/UX и Dev в AAA.",
      paragraph7: "Наша команда отвечала за строительство",
      paragraph7link: "приложение котировки ААА",
      paragraph8:
        "Это приложение является свидетельством того, как творческий подход может сделать даже самые скучные вещи забавными. Приложение имеет эффектный дизайн, оно очень интерактивно, а весь процесс занимает несколько минут.",
      paragraph9:
        "По сути, заявка на котировку представляет собой форму, которую должен заполнить пользователь. Однако эта форма чрезвычайно сложна. Это очень условно и связано с множеством возможных маршрутов, которые может выбрать пользователь. Очень скоро в процессе разработки его становится очень сложно поддерживать.",
      paragraph10:
        "Эти усилия были бы невозможны без отличной команды обеспечения качества. Команда QA обеспечила большую часть успеха этого проекта.",
      paragraph11:
        "Этот проект был одним из немногих, в которых я участвовал от начала до конца, и я очень горжусь конечным результатом. Я хотел бы поблагодарить руководство, команды UX, QA и Dev, работающие над этим проектом, за то, что они сделали процесс разработки интересным и значимым, несмотря на проблемы, возникающие из-за того, что страховая отрасль имеет тенденцию быть чрезвычайно скучной.",
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
        "Я получил некоторые интересные идеи о принятии решений командой, приближающейся к созданию интернет-магазина с React и GraphQL, начиная от того, как они обрабатывают состояние, и заканчивая тем, как они проводят оптимизацию.",
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
        "Разработка автоматизации рабочего стола RPA непроста. На самом деле абсолютно невозможно использовать старомодные подходы, такие как запросы к API уровня пользовательского интерфейса, для получения обработчиков элементов управления. К сожалению, это был именно тот путь, по которому пошел этот стартап. Тем не менее, это позволило мне многое узнать о настольной разработке с использованием C# и electronic.js. Я также узнал, что некоторые API Windows Presentation Framework опасны. Не говоря уже о Google Extension API и требованиях для публикации и запуска программ в Windows и Chrome (как расширения).",
    },
    alphabank: {
      title: "Альфабанк для среднего бизнеса",
      subtitle: "Приложение банковской панели",
      snippet: "Микро интерфейсное приложение.",
      imageCaption: "Личный кабинет Альфабанка",
      paragraph1:
        "Альфабанк — не только первая финтех-компания, в которой я работал, но и самая первая технологическая компания, в которой я работал в России.",
      paragraph2:
        "Их основным стеком были React+Redux Microfrontends. У меня был качественный опыт работы там, так как команды были действительно талантливыми, гибкими и разносторонними.",
      paragraph3:
        "Используемые трубопроводы были довольно стандартными. Архитектура была грубо разбита на front-end, middle и back-end части.",
      paragraph4:
        "Я бы сказал, что дизайн пользовательского интерфейса Alphabank — один из лучших дизайнов пользовательского интерфейса банковских приложений, которые я видел за всю свою карьеру.",
      paragraph5:
        "Я очень благодарен за возможность быть подрядчиком для этой замечательной компании.",
    },
    isonas: {
      title: "Pure Access",
      subtitle: "Панель управления доступом",
      snippet: "Управление доступом с поддержкой IP.",
      imageCaption: "ISONAS Pure Access",
      paragraph1:
        "ISONAS был стартапом, который в основном занимался аппаратным обеспечением систем безопасности. ",
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
      list: [
        {
          subtitle: "职业",
          list: [
            {
              title: "职员软件工程师",
              company: "CSAA 保险",
              description: "2020年11月 - 2022年6月",
              list: [
                {
                  title: "责任",
                  list: [
                    "创建和维护自定义保险报价应用程序",
                    "根据公司的设计系统规范创建一个 React UI 套件",
                  ],
                },
                {
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
                {
                  title: "技术细节",
                  list: [
                    "使用带有 Hooks 的 React",
                    "通过使用 TypeScript 和单元测试实践提高了可维护性",
                    "与 AWS 后端集成的功能",
                    "利用缓存和 Service Worker 优化应用程序性能的最佳实践",
                    "设置和使用流程自动化（GitHub 工作流程、Git 挂钩、AWS CI 管道）",
                    "使用 UsableNet AQA 验证可访问性",
                  ],
                },
              ],
            },
            {
              title: "React 开发人员（合同）",
              company: "折扣轮胎",
              description: "2020年3月 - 2020年5月",
              items: [
                {
                  title: "责任",
                  list: [
                    "协助将主应用程序迁移到 React",
                    "提高测试覆盖率",
                    "参与架构决策过程",
                  ],
                },
                {
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
                {
                  title: "技术细节",
                  list: [
                    "使用带有 Hooks 的 React",
                    "通过使用 TypeScript 和单元测试实践提高了可维护性",
                    "与 AWS 后端集成的功能",
                    "利用缓存和 Service Worker 优化应用程序性能的最佳实践",
                    "设置和使用流程自动化（GitHub 工作流程、Git 挂钩、AWS CI 管道）",
                    "使用 UsableNet AQA 验证可访问性",
                  ],
                },
              ],
            },
          ],
        },
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
