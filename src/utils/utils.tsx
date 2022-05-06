import { BehaviorSubject } from "rxjs";

export const WIDTH = 800 - 8 * 4;
export const TABLET_WIDTH = 700;
export const MOBILE_WIDTH = 600;
export const zIndex = {
  nav: 1,
  default: 0,
} as const;
export const languageOptions = ["English", "Русский", "中文"];
export const currentLanguage = languageOptions[2];

export const getLocationSubject = () => {
  const currentPath = window.location.pathname;
  const LocationSubject = new BehaviorSubject(currentPath);
  setInterval(() => {
    // TODO: Make sure you don't set interval every time
    const currentPath = LocationSubject.getValue();
    const nextPath = window.location.pathname;
    if (nextPath !== currentPath) LocationSubject.next(nextPath);
  }, 100);
  return LocationSubject;
};

export const parsePath = (path: string) => {
  const result = path.split("/");
  return result.filter((v) => !!v);
};

const translationEnglish = {
  name: "Kirill Novik",
  title: "Full-stack Web Developer",
  subtitle: "Over 7 years of experience. Open for remote work.",
  description:
    "I am a versatile full-stack developer experienced in designing, creating and maintaining scalable cloud infrastructures, and applications with a focus on test-driven, agile and object oriented development practices.",
};

type TTranslation = typeof translationEnglish;

const translationRussian: TTranslation = {
  name: "Кирилл Новик",
  title: "Фул-стэк Разработчик",
  subtitle: "Более 7 лет опыта. Рассматриваю предложения по удаленке.",
  description:
    "Я универсальный разработчик с полным стеком, имеющий опыт проектирования, создания и обслуживания масштабируемых облачных инфраструктур и приложений с акцентом на методах разработки, основанной на тестировании, гибкой и объектно-ориентированной разработке.",
};

const translationChinese: TTranslation = {
  name: "Kirill Novik",
  title: "全栈开发人员",
  subtitle: "超过7年的经验。 为远程工作开放",
  description:
    "我是一名多才多艺的全栈开发人员，在设计、创建和维护可扩展的云基础设施和应用程序方面经验丰富，专注于测试驱动、敏捷和面向对象的开发实践。",
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
