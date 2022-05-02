<template>
	<div>
		<recipyListCategory
			v-for="(categoryItems, category) in recipyListData"
			:key="category"
			:categoryItems="categoryItems"
			:category="category"
			@onClick-RecipyId="sendRecipyIdApp"
		></recipyListCategory>
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
		return {
			currentRecipyId: null,
		};
	},
	props: {
		// categoryItems: Object,
		recipyListData: Object,
	},
	methods: {
		sendRecipyIdApp(Id) {
			this.currentRecipyId = Id;
			// console.log("recipyId");
			// console.log(Id);
			this.$emit("send-currentRecipyId", this.currentRecipyId);
		},
	},
};
</script>

<style>
</style>
