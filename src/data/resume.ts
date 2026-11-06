import skills from "./skills.json";

export type Language = "en" | "ru" | "ch";

interface IJob {
  company: string;
  position: string;
  duration: string;
  highlights: string[];
}

interface IDegree {
  school: string;
  dates: string;
  degree: string;
  details: string;
}

interface IResume {
  profile: {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
  };
  career: IJob[];
  education: IDegree[];
  skills: [string, string][];
  languages: [string, string][];
}

const { tags, groups: skillLists } = skills;

export const resume: Record<Language, IResume> = {
  en: {
    profile: {
      title: "Senior Full-stack Developer & UI Architect",
      subtitle: "10+ years of experience. Open to remote work.",
      description:
        "I build clean, well-tested web applications, from component libraries and payment widgets to cloud deployment. Recent work: Beeline, CSAA Insurance and Alfa-Bank. I use AI tools such as Claude Code to move faster, and I verify the result before it ships.",
      tags,
    },
    career: [
      {
        company: "Beeline",
        position: "Senior Web Developer",
        duration: "July 2022 - October 2026",
        highlights: [
          "Designed a modular payment widget that separates business logic from the UI.",
          "Maintained the company-wide UI kit and built landing pages and portals.",
          "Migrated legacy JavaScript to TypeScript and reached 90%+ test coverage.",
          "Introduced framework-agnostic core layers and dependency injection, shortening delivery across teams.",
          "Mentored engineers on Clean Architecture and ran internal hackathons and meetups.",
        ],
      },
      {
        company: "CSAA Insurance",
        position: "Staff Software Engineer",
        duration: "November 2020 - June 2022",
        highlights: [
          "Led development of the AAA MyQuote insurance quote application.",
          "Built a React component library to the company's design system.",
          "Improved performance with caching and service workers.",
          "Automated deployment with GitHub Actions and AWS CI pipelines.",
        ],
      },
      {
        company: "Discount Tire",
        position: "React Developer (Contract)",
        duration: "March 2020 - May 2020",
        highlights: [
          "Migrated key features of the online store from legacy code to React and GraphQL.",
          "Improved reliability with unit tests.",
        ],
      },
      {
        company: "Automation Hero",
        position: "Senior Front-end Developer (Contract)",
        duration: "January 2019 - January 2020",
        highlights: [
          "Built the HeroGo RPA tool as a Chrome extension and desktop app with React, TypeScript and RxJS.",
          "Integrated the product with Salesforce.",
          "Kept 95% test coverage through TDD.",
        ],
      },
      {
        company: "Alfa-Bank",
        position: "Front-end Developer",
        duration: "March 2018 - October 2018",
        highlights: [
          "Delivered banking projects, including mail services and factoring.",
          "Implemented server-side rendering with React, Redux and Saga.",
          "Contributed to the open-source ARUI Feather UI library.",
        ],
      },
      {
        company: "ISONAS",
        position: "Software Engineer",
        duration: "July 2016 - December 2017",
        highlights: [
          "Refactored a monolith into Docker microservices with a REST API gateway.",
          "Added real-time updates over WebSockets.",
          "Cut critical query times by a factor of 10 with AWS read replicas.",
        ],
      },
      {
        company: "Medtronic",
        position: "Software Application Developer",
        duration: "May 2015 - September 2015",
        highlights: [
          "Built the Vital Sync patient monitoring web application with .NET MVC and REST APIs.",
        ],
      },
    ],
    education: [
      {
        school: "Arizona State University",
        dates: "2021 - 2024, GPA 4.0, With Distinction",
        degree: "Master of Computer Science",
        details:
          "Statistical Machine Learning, Information Assurance & Security, Software Verification & Testing, Data Visualization",
      },
      {
        school: "University of Colorado Boulder",
        dates: "2013 - 2015, GPA 3.9",
        degree: "Bachelor's in Computer Science",
        details: "Algorithms, Operating Systems, Programming Languages, Big Data",
      },
      {
        school: "University of Colorado Boulder",
        dates: "2010 - 2013, GPA 3.5",
        degree: "Bachelor's in Molecular Biology",
        details: "Genetics, Developmental Biology, Stem Cells",
      },
    ],
    skills: [
      ["Frontend", skillLists.frontend],
      ["UI and design systems", skillLists.ui],
      ["Architecture", skillLists.architecture],
      ["AI and automation", skillLists.ai],
      ["Testing", skillLists.testing],
      ["Backend", skillLists.backend],
      ["Cloud and DevOps", skillLists.cloud],
      ["Data and ML", skillLists.data],
    ],
    languages: [
      ["Russian", "Fluent"],
      ["English", "Fluent"],
      ["Chinese", "HSK 5"],
    ],
  },
  ru: {
    profile: {
      title: "Senior Full-stack разработчик и UI-архитектор",
      subtitle: "Более 10 лет опыта. Открыт к удалённой работе.",
      description:
        "Создаю чистые, хорошо протестированные веб-приложения: от библиотек компонентов и платёжных виджетов до развёртывания в облаке. Последние проекты: Билайн, CSAA Insurance, Альфа-Банк. Использую ИИ-инструменты, например Claude Code, чтобы работать быстрее, и проверяю результат перед выпуском.",
      tags,
    },
    career: [
      {
        company: "Билайн",
        position: "Senior Web Developer",
        duration: "Июль 2022 - октябрь 2026",
        highlights: [
          "Спроектировал модульный платёжный виджет с бизнес-логикой, отделённой от интерфейса.",
          "Развивал общекорпоративный UI-кит, разрабатывал лендинги и порталы.",
          "Перевёл legacy JavaScript на TypeScript и достиг покрытия тестами 90%+.",
          "Внедрил независимые от фреймворка слои логики и внедрение зависимостей, сократив сроки поставки в командах.",
          "Обучал инженеров Clean Architecture, проводил внутренние хакатоны и митапы.",
        ],
      },
      {
        company: "CSAA Insurance",
        position: "Staff Software Engineer",
        duration: "Ноябрь 2020 - июнь 2022",
        highlights: [
          "Руководил разработкой приложения для расчёта страховки AAA MyQuote.",
          "Создал библиотеку компонентов на React по дизайн-системе компании.",
          "Повысил производительность с помощью кеширования и Service Workers.",
          "Автоматизировал деплой через GitHub Actions и AWS CI.",
        ],
      },
      {
        company: "Discount Tire",
        position: "React-разработчик (контракт)",
        duration: "Март 2020 - май 2020",
        highlights: [
          "Перенёс ключевые функции интернет-магазина с legacy-кода на React и GraphQL.",
          "Повысил надёжность с помощью модульных тестов.",
        ],
      },
      {
        company: "Automation Hero",
        position: "Senior Front-end Developer (контракт)",
        duration: "Январь 2019 - январь 2020",
        highlights: [
          "Создал RPA-инструмент HeroGo: расширение Chrome и настольное приложение на React, TypeScript и RxJS.",
          "Интегрировал продукт с Salesforce.",
          "Поддерживал покрытие тестами 95% благодаря TDD.",
        ],
      },
      {
        company: "Альфа-Банк",
        position: "Front-end разработчик",
        duration: "Март 2018 - октябрь 2018",
        highlights: [
          "Реализовал банковские проекты, включая почтовый сервис и факторинг.",
          "Внедрил серверный рендеринг на React, Redux и Saga.",
          "Участвовал в открытой UI-библиотеке ARUI Feather.",
        ],
      },
      {
        company: "ISONAS",
        position: "Software Engineer",
        duration: "Июль 2016 - декабрь 2017",
        highlights: [
          "Разбил монолит на микросервисы в Docker с шлюзом REST API.",
          "Добавил обновления в реальном времени через WebSockets.",
          "Ускорил критичные запросы в 10 раз с помощью реплик чтения в AWS.",
        ],
      },
      {
        company: "Medtronic",
        position: "Разработчик приложений",
        duration: "Май 2015 - сентябрь 2015",
        highlights: [
          "Создал веб-приложение мониторинга пациентов Vital Sync на .NET MVC и REST API.",
        ],
      },
    ],
    education: [
      {
        school: "Университет штата Аризона",
        dates: "2021 - 2024, GPA 4.0, с отличием (With Distinction)",
        degree: "Магистр компьютерных наук",
        details:
          "Статистическое машинное обучение, информационная безопасность, верификация и тестирование ПО, визуализация данных",
      },
      {
        school: "Университет Колорадо в Боулдере",
        dates: "2013 - 2015, GPA 3.9",
        degree: "Бакалавр компьютерных наук",
        details:
          "Алгоритмы, операционные системы, языки программирования, большие данные",
      },
      {
        school: "Университет Колорадо в Боулдере",
        dates: "2010 - 2013, GPA 3.5",
        degree: "Бакалавр молекулярной биологии",
        details: "Генетика, биология развития, стволовые клетки",
      },
    ],
    skills: [
      ["Фронтенд", skillLists.frontend],
      ["UI и дизайн-системы", skillLists.ui],
      ["Архитектура", skillLists.architecture],
      ["ИИ и автоматизация", skillLists.ai],
      ["Тестирование", skillLists.testing],
      ["Бэкенд", skillLists.backend],
      ["Облако и DevOps", skillLists.cloud],
      ["Данные и ML", skillLists.data],
    ],
    languages: [
      ["Русский", "Свободно"],
      ["Английский", "Свободно"],
      ["Китайский", "HSK 5"],
    ],
  },
  ch: {
    profile: {
      title: "高级全栈开发工程师 / UI 架构师",
      subtitle: "10 年以上经验，可远程工作。",
      description:
        "我开发结构清晰、测试充分的 Web 应用，从组件库、支付组件到云端部署。近期工作经历包括 Beeline、CSAA Insurance 和 Alfa-Bank。我使用 Claude Code 等 AI 工具提高效率，并在发布前验证结果。",
      tags,
    },
    career: [
      {
        company: "Beeline",
        position: "高级 Web 开发工程师",
        duration: "2022年7月 - 2026年10月",
        highlights: [
          "设计了模块化支付组件，将业务逻辑与界面分离。",
          "维护公司级 UI 组件库，并开发落地页和门户网站。",
          "将旧版 JavaScript 代码迁移到 TypeScript，测试覆盖率达到 90% 以上。",
          "引入与框架无关的核心逻辑层和依赖注入，缩短了各团队的交付时间。",
          "指导工程师学习整洁架构，并组织内部黑客松和技术分享会。",
        ],
      },
      {
        company: "CSAA Insurance",
        position: "资深软件工程师",
        duration: "2020年11月 - 2022年6月",
        highlights: [
          "主导 AAA MyQuote 保险报价应用的开发。",
          "按照公司设计系统构建 React 组件库。",
          "通过缓存和 Service Worker 提升性能。",
          "使用 GitHub Actions 和 AWS CI 实现部署自动化。",
        ],
      },
      {
        company: "Discount Tire",
        position: "React 开发工程师（合同）",
        duration: "2020年3月 - 2020年5月",
        highlights: [
          "将在线商店的关键功能从旧代码迁移到 React 和 GraphQL。",
          "通过单元测试提高可靠性。",
        ],
      },
      {
        company: "Automation Hero",
        position: "高级前端开发工程师（合同）",
        duration: "2019年1月 - 2020年1月",
        highlights: [
          "使用 React、TypeScript 和 RxJS 构建 RPA 工具 HeroGo，包括 Chrome 扩展和桌面应用。",
          "将产品与 Salesforce 集成。",
          "通过 TDD 保持 95% 的测试覆盖率。",
        ],
      },
      {
        company: "Alfa-Bank",
        position: "前端开发工程师",
        duration: "2018年3月 - 2018年10月",
        highlights: [
          "交付了多个银行项目，包括邮件服务和保理业务。",
          "使用 React、Redux 和 Saga 实现服务端渲染。",
          "为开源 UI 库 ARUI Feather 做出贡献。",
        ],
      },
      {
        company: "ISONAS",
        position: "软件工程师",
        duration: "2016年7月 - 2017年12月",
        highlights: [
          "将单体应用重构为带 REST API 网关的 Docker 微服务。",
          "通过 WebSocket 增加实时更新功能。",
          "利用 AWS 只读副本将关键查询速度提升 10 倍。",
        ],
      },
      {
        company: "Medtronic",
        position: "软件应用开发工程师",
        duration: "2015年5月 - 2015年9月",
        highlights: [
          "使用 .NET MVC 和 REST API 开发了 Vital Sync 患者监护 Web 应用。",
        ],
      },
    ],
    education: [
      {
        school: "亚利桑那州立大学",
        dates: "2021 - 2024，GPA 4.0，优等（With Distinction）",
        degree: "计算机科学硕士",
        details: "统计机器学习、信息安全、软件验证与测试、数据可视化",
      },
      {
        school: "科罗拉多大学博尔德分校",
        dates: "2013 - 2015，GPA 3.9",
        degree: "计算机科学学士",
        details: "算法、操作系统、编程语言、大数据",
      },
      {
        school: "科罗拉多大学博尔德分校",
        dates: "2010 - 2013，GPA 3.5",
        degree: "分子生物学学士",
        details: "遗传学、发育生物学、干细胞",
      },
    ],
    skills: [
      ["前端", skillLists.frontend],
      ["UI 与设计系统", skillLists.ui],
      ["架构", skillLists.architecture],
      ["AI 与自动化", skillLists.ai],
      ["测试", skillLists.testing],
      ["后端", skillLists.backend],
      ["云与 DevOps", skillLists.cloud],
      ["数据与机器学习", skillLists.data],
    ],
    languages: [
      ["俄语", "流利"],
      ["英语", "流利"],
      ["中文", "HSK 5"],
    ],
  },
};
