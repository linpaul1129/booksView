import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from "vue-awesome-swiper";
import swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
swiper.use([Navigation, Pagination]);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
