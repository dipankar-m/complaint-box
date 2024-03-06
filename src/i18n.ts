import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          name: "Name",
          email: "Email",
          type: "Choose type",
          complaint: "Complaint",
          submit: "Submit",
          title: "Complaint Box!",
          subTitle: "Get assured resolution within 24 hours",
          tnc: "Excluding weekends and public holidays",
          tickets: "Active tickets",
        },
      },
    },
  });

export {};
