// Exemplo: src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en';
import ptTranslations from './locales/pt';

interface Translation {
  welcome: { title: string; selectLanguage: string };
  nav: { return: string; about: string; timeline: string; projects: string; contact: string };
  about: { title: string; description: string };
  projects: { title: string; viewDemo?: string; viewCode: string };
  contact: { 
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string; 
    error: string; 
    whatsMessage: string; 
  };
  Timeline: {
    id: number;
    date: string;
    title: string;
    description: string;
  }[];
  Projects: {
    id: number;
    title: string;
    description: string;
    deployUrl?: string;
    githubUrl: string;
    image: string;
    badges?: string[];
  }[];
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Translation;
    };
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
