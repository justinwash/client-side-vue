<template>
	<div class="main-nav">
		<router-link to="/">Home</router-link>
		<router-link to="/example">Example</router-link>
	</div>
</template>

<script>
	module.exports = {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.main-nav {
		margin: 10px;
	}
</style>