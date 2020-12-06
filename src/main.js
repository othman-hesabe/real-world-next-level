<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import BaseIcon from '@/components/BaseIcon'
=======
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
>>>>>>> ab57dfe5c0d89529210181331353320597644a7d
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'

Vue.filter('date', DateFilter)

Vue.use(Vuelidate)

Vue.config.productionTip = false

Vue.component('BaseIcon', BaseIcon)

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
