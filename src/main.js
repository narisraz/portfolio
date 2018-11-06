// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import en from './locale/en'
import fr from './locale/fr'
import colors from 'vuetify/es5/util/colors'
import VueCookie from 'vue-cookie'

const MANAGED_LANGUAGE = ['en', 'fr']

Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.use(Vuetify, {
  lang: {
    locales: { en, fr },
    current: getLanguage()
  },
  theme: {
    primary: colors.blue.darken1,
    secondary: colors.teal
  }
})

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyArnCstuODan4I4ykkCIy9rFhry5vUWbPw',
  authDomain: 'portfolio-54738.firebaseapp.com',
  databaseURL: 'https://portfolio-54738.firebaseio.com/',
  storageBucket: 'mail.appspot.com'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

function getLanguage () {
  let acceptLang = navigator.language
  let lang = acceptLang.substring(0, acceptLang.indexOf('-'))
  return MANAGED_LANGUAGE.indexOf(lang) < 0 ? MANAGED_LANGUAGE[0] : lang
}
