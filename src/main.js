import Vue from "vue";
import App from "./App.vue";
import { BNavbar } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.component("b-navbar", BNavbar);
new Vue({
  render: (h) => h(App)
}).$mount("#app");
