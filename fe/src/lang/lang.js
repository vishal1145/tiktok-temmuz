import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const DEFAULT_LANG = 'en'; // Default language

const locales = {
  en: require('./i18n/en.json'),
  de: require('./i18n/de.json'),
  ru: require('./i18n/ru.json'),
  az: require('./i18n/az.json'),
  tr: require('./i18n/tr.json')
};

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
});

// Function to change language dynamically
export function changeLanguage(lang) {
  if (i18n.locale !== lang) {
    if (locales[lang]) {
      i18n.locale = lang;
      document.querySelector('html').setAttribute('lang', lang); // Optionally set the HTML lang attribute
    }
  }
}

export default i18n;
