<template>
	<recipyListCategory :title="title"></recipyListCategory>
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
	},
};
</script>

<style>
</style>
