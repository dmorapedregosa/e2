import Vue from 'vue'
import App from './App.vue'
import VueSSE from 'vue-sse'

Vue.use(VueSSE, {
  polyfill: true,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
