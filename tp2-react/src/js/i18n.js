import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    debug: true, // Útil en desarrollo para ver errores de carga en consola
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
      fr: {
        translation: frTranslation
      }
    }
  });

export default i18n;