<template>
	<div class="main_nav">
		<div class="menue_item">
			<router-link to="/">Recipies</router-link>
		</div>
		<div class="menue_item">
			<router-link to="/impressumWebsite">Impressum</router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_nav {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
}
.menue_item a {
	padding: 10px 20px;
	font-size: 1rem;
	text-decoration: none;
}
</style>