<template>
	<div>
		<div class="right boxed">
			<div>
				<ul>
					<h3>Einkaufszeddele</h3>
					<li v-for="(ingredient, index) in ingredients" :key="index">
						{{ ingredient }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "shoppingItems",
	components: {},
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