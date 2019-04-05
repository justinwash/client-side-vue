# Client-Side Vue.js
Vue.js client-side for tiny, quick-loading, node.js-less Single Page Apps. [Demo](https://client-side-vue.herokuapp.com "Client-Side Vue.js Demo")

#### client-side-vue/
* **index.html** - The entry-point for your Single Page App. Global dependencies via script tags (Vue, Vue-Router, Http-Vue-Loader, Axios) and a single #App element where the vue instance will be rendered.
* **index.js** - Where Vue.js, Vue-Router are instantiated, where you'll import and assign your services to the Vue instance.
* **index.css** - Global styles for your Single Page App.
* **index.php** - Trick Heroku into hosting a static site.

#### client-side-vue/dependencies/
* **vue.js** - Vue.js itself and all the built-in features that come with it.
* **vue-router.js** - The official router for Vue.js, allows you to navigate your Single Page App. 
* **http-vue-loader.js** - Client-side .vue component loader.
* **axios.js** - Promise based HTTP client for making ajax/http calls.

#### client-side-vue/services
* **store.service.js** - A (very, extremely) simple state-management service with only three methods: 
  * `get(key)` 
  * `set(key, value)`
  * `clear(key)`
