import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/locales/en.json';
import bnTranslation from '@/locales/bn.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
     
      bn: {
        translation: bnTranslation,
      },

      en: {
        translation: enTranslation,
      },
    },
    lng: 'bn', // Default language
    fallbackLng: 'en', // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
