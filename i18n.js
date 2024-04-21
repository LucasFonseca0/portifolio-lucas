// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "name": "LUCAS FONSECA",
        "role": "Fullstack developer",
        "intro": "Hello, I'm Lucas Fonseca. I create responsive <1>websites</1> and performant <1>servers</1>."
      }
      ,
    },
    pt: {
      translation: {
        "name": "LUCAS FONSECA",
        "role": "Desenvolvedor Fullstack",
        "intro": "Olá, sou Lucas Fonseca. Eu crio <1>websites</1> responsivos e <1>servidores</1> performáticos."
      }
      ,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
