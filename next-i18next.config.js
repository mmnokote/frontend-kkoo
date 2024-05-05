const path = require('path');

/** @type import("next").I18NConfig */
const i18n = {
  defaultLocale: 'sw',
  locales: ['en', 'sw'],
  localeDetection: false,
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
  i18n,
  fallbackLng: 'sw',
  keySeparator: '.',
  nsSeparator: ':',
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = next18nextConfig;
