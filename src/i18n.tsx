import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18NextHttpBackend from "i18next-http-backend";

import translationGR from '../locales/gr.json';
import translationEN from '../locales/en.json';
import translationRU from '../locales/ru.json';


const resources = {
    gr: {
        translation: translationGR
    },
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18next
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        lng: 'gr',
        fallbackLng: 'gr'

    });
export default i18next;
