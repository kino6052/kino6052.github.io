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
  },
  projectPages: {
    csaa: {
      title: "AAA MyQuote App",
      subtitle: "CSAA Insurance Company",
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
        "This project was among a few that I have been able to participate in from start to finish, and am very proud of the end result. I would like to thank the management, the UX, QA, and Dev teams working on this project for making the development process fun and meaningful inspite of the challenges that come from the fact that the insurance industry tends be extremely dull.",
    },
    "discount-tire": {
      title: "Online Store",
      subtitle: "Discount Tire",
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
      imageCaption: "Automation Hero Application Screen",
      paragraph1:
        "What made this project unique was that it was my first (and my last) project as a freelancer working remotely. Also, this was my first project creating an RPA platform. Not to mention that the startup was founded by a couple of German entrepreneurs, and, as such, the location of their main office was in Berlin. ",
      paragraph2:
        "RPA desktop automation development is not easy. In fact, it is absolutely impossible using old-fashioned approaches such as querying UI layer APIs to get control handlers. Unfortunately, this was the exact route this startup went. However, this allowed me to learn a great deal about desktop development using C# and electron.js. I also learned some Windows Presentation Framework API to be dangerous. Not to mention Google Extension API and the requirements for publishing and running the programs on Windows and Chrome (as extension). ",
    },
    alphabank: {
      title: "Alphabank for Mid-sized Business",
      subtitle: "Banking Dashboard App",
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
      subtitle: "Ventilator Monitoring Dashboard",
      imageCaption: "Vital Sync",
      paragraph1:
        "As an intern at Medtronic, my responsibility was to create a thin web client for the patient monitoring application using .NET MVC4 suite.",
    },
  },
};

type TTranslation = typeof translationEnglish;

const translationRussian: TTranslation = {
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
  },
  projectPages: {
    csaa: {
      title: "Приложение AAA MyQuote",
      subtitle: "Страховая Компания CSAA",
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
    "discount-tire": {},
  },
};

const translationChinese: TTranslation = {
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
  },
  projectPages: {
    csaa: {
      title: "AAA MyQuote App",
      subtitle: "CSAA Insurance Company",
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
        "This project was among a few that I have been able to participate in from start to finish, and am very proud of the end result. I would like to thank the management, the UX, QA, and Dev teams working on this project for making the development process fun and meaningful inspite of the challenges that come from the fact that the insurance industry tends be extremely dull.",
    },
    "discount-tire": {
      title: "Online Store",
      subtitle: "Discount Tire",
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
