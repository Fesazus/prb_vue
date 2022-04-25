<template>
	<div>
		<h3>Einkaufszeddele</h3>
		<ul>
			<li v-for="(ingredient, index) in ingredients" :key="index">
				{{ ingredient }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "listWithHeadline",
	data() {
		return {};
	},
	props: {
		ingredients: Object,
	},
};
</script>

<style>
</style>