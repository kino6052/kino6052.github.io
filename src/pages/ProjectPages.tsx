import { ELanguage } from "../utils/bridge";
import { translations } from "../utils/utils";
import { AutomationHeroPage } from "./projects/AutomationHeroPage";
import { CSAAPage } from "./projects/CSAAPage";
import { DiscountTirePage } from "./projects/DiscountTirePage";

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
});
