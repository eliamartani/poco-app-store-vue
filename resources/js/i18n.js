import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const getTranslations = () => {
  // Get all json files inside translations folder
  const locales = require.context('./translations', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}

  locales.keys().forEach(key => {
    // Get only locale key
    const locale = key.match(/([A-Za-z0-9-_,\s]+)\./i)

    if (locale && locale.length > 1) {
      messages[locale[1]] = locales(key)
    }
  })

  return messages
}

export const setVueI18n = (locale = 'en') => new VueI18n({
  locale,
  messages: getTranslations()
})
