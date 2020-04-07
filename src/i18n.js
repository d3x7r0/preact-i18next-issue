import { Fragment } from 'preact'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      'en': {
        'translation': {
          'foo': 'Hello <1>{{name}}</1>!',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
    react: {
      defaultTransParent: Fragment,
      useSuspense: false,
    },
  })

export default i18n
