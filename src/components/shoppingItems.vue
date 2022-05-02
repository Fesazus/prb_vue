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

<style scoped>
ul {
	padding: 0 10px 10px 18px;
	margin: 0;
	list-style-type: disc;
}

li {
	padding-bottom: 5px;
}

.right {
	position: relative;
	float: right;
	overflow: hidden;
	width: 33%;
	margin: 4mm 10mm 0 0;
}
</style>