import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import DsComponentFoodzUp from '@/entry.esm';
Vue.use(DsComponentFoodzUp);

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
