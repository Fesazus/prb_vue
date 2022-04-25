<template>
	<div>
		<div class="right boxed">
			<listWithHeadline :ingredients="ingredients"></listWithHeadline>
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