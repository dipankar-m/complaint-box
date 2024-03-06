import i18next from "i18next";
// import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en-GB",
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
          intlDate: "{{val, datetime}}",
          serviceType: "Service type",
        },
      },
    },
    // interpolation: {
    //   //  format : function(value: Date, format: string) {
    //   // //   console.log("Hello");
    //   //   if (format === "intlDate") {
    //   //     return new Intl.DateTimeFormat("en-GB", {
    //   //       day: "numeric",
    //   //       month: "short",
    //   //       year: "numeric",
    //   //     }).format(value);
    //   //   }
    //   //   return value;
    //   // },
    // },
  });

export {};
