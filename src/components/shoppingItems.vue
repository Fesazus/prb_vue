<template>
	<div>
		<div class="right boxed">
			<h3>Einkaufszeddele</h3>
			<ul>
				<li v-for="(ingredient, index) in ingredients" :key="index">
					{{ ingredient }}
				</li>
			</ul>
		</div>
		<listWithHeadline></listWithHeadline>
	</div>
</template>

<script>
import listWithHeadline from "./listWithHeadline.vue";
export default {
	name: "shoppingItems",
	components: {
		listWithHeadline,
	},
	props: {
		ingredients: Object,
	},
};
</script>

<style>
</style>