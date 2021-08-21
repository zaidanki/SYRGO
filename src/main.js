import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import './assets/main.css'

Vue.config.productionTip = false;


Vue.component("main-bar", require('./components/reused/Titlev.vue').default)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
