/* Services */
import Store from './services/store.service.js';

/* Routes */
const router = new VueRouter({
  routes: [
    { path: '/', component: httpVueLoader('pages/home.page.vue') },
    { path: '/example', component: httpVueLoader('pages/example.page.vue') },
    { path: '*', component: httpVueLoader('pages/404.vue') }
  ]
});

/* Create */
window.App = new Vue({
  router,
  el: '#app',
  components: {
    'main-nav': httpVueLoader('components/shared/main-nav.component.vue')
  }
})

/* Assign global services */
Object.defineProperty(Vue.prototype, '_store', { value: new Store() });