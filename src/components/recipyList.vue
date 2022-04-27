<template>
	<div>
		<recipyListCategory
			:title="title"
			:categoryItems="categoryItems"
			:category="category"
		></recipyListCategory>
		<!-- 		@recipy-id="sendRecipyId" -->
	</div>
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
		category: String,
	},
};
</script>

<style>
</style>
