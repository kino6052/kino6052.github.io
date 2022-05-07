import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";
import { AlphabankPage } from "./projects/AlphabankPage";
import { AutomationHeroPage } from "./projects/AutomationHeroPage";
import { CSAAPage } from "./projects/CSAAPage";
import { DiscountTirePage } from "./projects/DiscountTirePage";
import { IsonasPage } from "./projects/IsonasPage";
import { MedtronicPage } from "./projects/MedtronicPage";

export const getProjectPages = (language: ELanguage) => ({
  csaa: <CSAAPage content={translations[language].projectPages.csaa} />,
  "discount-tire": (
    <DiscountTirePage
      content={translations[language].projectPages["discount-tire"]}
    />
  ),
  "automation-hero": (
    <AutomationHeroPage
      content={translations[language].projectPages["automation-hero"]}
    />
  ),
  alphabank: (
    <AlphabankPage content={translations[language].projectPages["alphabank"]} />
  ),
  isonas: (
    <IsonasPage content={translations[language].projectPages["isonas"]} />
  ),
  medtronic: (
    <MedtronicPage content={translations[language].projectPages["medtronic"]} />
  ),
});
