<template>
	<div>
		<!-- <dataBase></dataBase> -->
		<navCookingBook></navCookingBook>
		<router-view></router-view>
	</div>
</template>
<script>
import navCookingBook from "./components/navCookingBook.vue";

export default {
	name: "App",
	components: {
		navCookingBook,
	},
};
</script>

<style>
</style>
