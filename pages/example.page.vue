<template>
	<div class="example-page">
		<div class="example-page-body">
			<p>{{ greeting }}</p>
			<div class="section">
				<h3>Binding</h3>Click button to increment counter. Standard Vue stuff here.
				<br>
				<br>
				<code>this.counter: {{ counter }}</code>
				<button v-on:click="increment()">Click Me!</button>
			</div>
			<div class="section">
				<h3>State</h3>This page is reading a store (services/store.service.js) key "myObject" which has the value:
				<br>
				<br>
				<code>{{ storeExample }}</code>
				<br>
				<br>If you don't see anything above you either refreshed or haven't navigated to the home page (which, for the purposes of this example, sets the store value).
				<br>This value is only persistent while navigating using VueRouter or the back/forward browser buttons. If you
				<a
					href="/#/example"
					v-on:click="refresh()"
				>refresh</a> this page it will disappear until navigating to
				<router-link to="/">the home page</router-link>&nbsp;and back again.
			</div>
			<div class="section">
				<h3>Http</h3>This page is using axios.js (dependencies/axios.js) to make an http request to
				<code>https://httpbin.org/get</code>. It's response was:
				<br>
				<br>
				<div id="http-response">
					<code>{{ httpResponse }}</code>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data: function () {
			return {
				greeting: 'Examples',
				storeExample: null,
				httpResponse: null,
				counter: 0
			}
		},
		methods: {
			getStateExample() {
				this.storeExample = App._store.get('myObject');
			},
			increment() {
				this.counter = this.counter + 1;
			},
			refresh() {
				window.location.reload();
			}
		},
		mounted() {
			this.getStateExample();

			axios.get('https://httpbin.org/get').then(res => {
				this.httpResponse = res.data;
			})
		}
	}
</script>

<style scoped>
	.example-page {
		position: absolute;
		width: 100vw;
	}

	.example-page-body {
		margin: 10px;
	}

	#http-response {
		max-width: 1024px;
	}

	p {
		font-size: 2em;
		text-align: center;
	}
</style>