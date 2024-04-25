// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "name": "LUCAS FONSECA",
        "role": "Fullstack developer",
        "intro": "Hello, I'm Lucas Fonseca. I create responsive <1>websites</1> and performant <1>servers</1>",
        "quote":"Your website should be your best employee. It works <1>24/7</1>, never takes a vacation, and continuously brings in new customers.",
        "autor":"Unknown",
      }
      ,
    },
    pt: {
      translation: {
        "name": "LUCAS FONSECA",
        "role": "Desenvolvedor Fullstack",
        "intro": "Olá, sou Lucas Fonseca. Eu crio <1>websites</1> responsivos e <1>servidores</1> performáticos",
        "quote":"Seu site deveria ser o melhor funcionário. Ele trabalha <1>24 horas</1> por dia, 7 dias por semana, nunca tira férias e continuamente atrai novos clientes.",
        "autor":"Desconhecido",
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
