<template>
	<recipyListCategory
		:title="title"
		:categoryItems="categoryItems"
	></recipyListCategory>
</template>

<script>
import recipyListCategory from "./recipyListCategory.vue";
export default {
	name: "recipyList",
	components: {
		recipyListCategory,
	},
	data() {
		return {};
	},
	props: {
		title: String,
		categoryItems: Object,
	},
};
</script>

<style>
</style>
