import Vue from 'vue'

// utils
import { setVueI18n } from './i18n'
import uuidMixin from './shared/uuid-mixin'
import store from './store'

// components
import App from './App.vue'

// scss
import './main.scss'

Vue.config.productionTip = false

Vue.mixin(uuidMixin)

new Vue({
  render: h => h(App),
  store,
  // Set default language to english
  i18n: setVueI18n('en')
}).$mount('#app')
