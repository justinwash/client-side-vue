<template>
	<div class="home-page">
		<main>
			<a href="https://github.com/justinwash/client-side-vue" target="_blank"
				><img
					width="149"
					height="149"
					src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
					class="github-banner"
					alt="Fork me on GitHub"
					data-recalc-dims="1"
			/></a>
			<p>{{ greeting }}</p>
			<div class="section">
				<h3>About</h3>
				Vue.js client-side for tiny, quick-loading, node.js-less Single Page
				Apps.
			</div>
			<div class="section">
				<h3>Breakdown</h3>

				<h4>client-side-vue/</h4>
				<li>
					<b>index.html</b> - The entry-point for your Single Page App. Global
					dependencies via script tags (Vue, Vue-Router, Http-Vue-Loader, Axios)
					and a single #App element where the vue instance will be rendered.
				</li>
				<li>
					<b>index.js</b> - Where Vue.js, Vue-Router are instantiated, where
					you'll import and assign your services to the Vue instance.
				</li>
				<li><b>index.css</b> - Global styles for your Single Page App.</li>
				<li><b>index.php</b> - Trick Heroku into hosting our static site.</li>

				<h4>client-side-vue/dependencies/</h4>
				<li>
					<b>vue.js</b> - Vue.js itself and all the built-in features that come
					with it.
					<a href="https://github.com/vuejs/vue" target="_blank">GitHub</a>
				</li>
				<li>
					<b>vue-router.js</b> - The official router for Vue.js, allows you to
					navigate your Single Page App.
					<a href="https://github.com/vuejs/vue-router" target="_blank"
						>GitHub</a
					>
				</li>
				<li>
					<b>http-vue-loader.js</b> - Client-side .vue component loader.
					<a
						href="https://github.com/FranckFreiburger/http-vue-loader"
						target="_blank"
						>GitHub</a
					>
				</li>
				<li>
					<b>axios.js</b> - Promise based HTTP client for making ajax/http calls
					<a href="https://github.com/axios/axios" target="_blank">GitHub</a>
				</li>
				<br />Minified versions of these dependencies ( <code>*.min.js</code>)
				are included for speed/size.
				<h4>client-side-vue/services</h4>
				<li>
					<b>store.service.js</b> - A (very, extremely) simple state-management
					service with only three methods, <code>get()</code>,
					<code>set()</code>, and <code>clear()</code>. This page set a store
					key "myObject" to an instantiation of the global class MyClass. Click
					over to the
					<router-link to="/example">example page</router-link>&nbsp;to retrieve
					it and see more features.
				</li>
			</div>
		</main>
		<aside>
			<img class="directory" src="assets/directory.png" />
		</aside>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				greeting: "Client-side Vue.js",
				httpResponse: null
			};
		},
		methods: {
			setStateExample() {
				App._store.set("myObject", new MyClass());
			}
		},
		mounted() {
			this.setStateExample();
		}
	};
</script>

<style scoped>
	.home-page {
		position: absolute;
		width: 80%;
		margin-top: 10vh;
		margin-left: 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.directory {
		margin: 10px;
	}

	main {
		width: 100%;
		margin-left: 10px;
	}

	p {
		font-size: 2em;
		text-align: center;
	}

	@media (max-width: 960px) {
		.home-page {
			flex-direction: column !important;
		}
	}

	.github-banner {
		position: fixed;
		top: 0;
		right: 0;
	}
</style>
