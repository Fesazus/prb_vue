<template>
	<div class="search">
		<input
			v-model="searchItem"
			type="text"
			id="searchbox"
			placeholder="Rezeptsuche"
			@keyup="searchInput(searchItem)"
		/>
	</div>
</template>

<script>
export default {
	name: "searchInRecipyList",
	props: ["searchInCategories"],
	data() {
		return {
			searchItem: "",
		};
	},
	methods: {
		searchInput() {
			this.$router.replace({ query: { searchString: this.searchItem } });
			this.searchInCategories(this.searchItem);
		},
	},
};
</script>

<style scoped>
input {
	height: 40px;
	font-size: 1.4rem;
	padding: 0 3px;
	width: 300px;
}
</style>