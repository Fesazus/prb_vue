<template>
	<div class="search">
		<input
			v-model="searchItem"
			type="text"
			id="searchbox"
			placeholder="Suche"
			@change="searchInCategories(searchItem)"
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
};
</script>

<style scoped>
input {
	height: 50px;
	font-size: 1.6rem;
	padding: 0 3px;
}
</style>