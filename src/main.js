import Vue from 'vue'
import App from './App.vue'
import VueSSE from 'vue-sse'

Vue.use(VueSSE, {
  format: 'json',
  polyfill: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
