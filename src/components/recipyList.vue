<template>
	<div>
		<recipyListCategory
			v-for="(categoryItems, category) in recipyListData"
			:key="category"
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
		categoryItems: Object,
		recipyListData: Object,
	},
};
</script>

<style>
</style>
