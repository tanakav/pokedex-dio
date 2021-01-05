<template>
	<div id="pokedex">
		<h1 class="text--yellow">Pokedex</h1>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {
		},
	};
</script>

<style lang="scss" scoped>
	#pokedex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 20px);
		padding: 20px;
	}
</style>
