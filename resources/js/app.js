import Vue from 'vue'
import { setVueI18n } from './i18n'

// Add view components
const files = require.context('./', true, /\.vue$/i)

files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

new Vue({
  // Set default language to english
  i18n: setVueI18n('en')
}).$mount('#app')
