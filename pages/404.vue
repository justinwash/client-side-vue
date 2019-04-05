<template>
	<div>
		<p>{{ greeting }}</p>
	</div>
</template>

<script>
	module.exports = {
		data: function () {
			return {
				greeting: 'This is the 404 page'
			}
		}
	}
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}
</style>