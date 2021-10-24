import { createI18n } from "vue-i18n";
import en from "../translations/en.json";
import pt from "../translations/pt.json";

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    pt,
  },
});
