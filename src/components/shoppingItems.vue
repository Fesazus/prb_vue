<template>
	<div>
		<div class="right boxed">
			<listWithHeadline
				:items="ingredients"
				headline="Einkaufszeddele"
			></listWithHeadline>
		</div>
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