<template>
	<div>
		<shoppingItems :ingredients="ingredients"></shoppingItems>
		<div class="left">
			<p>{{ amount }}</p>
			<div
				v-for="(instructionListitem, index) in instructions"
				:key="index"
			>
				<h3>{{ instructionListitem[0] }}</h3>
				<ul>
					<li
						v-for="(item, index) in instructionListitem[1]"
						:key="index"
					>
						{{ item }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import shoppingItems from "./shoppingItems.vue";
export default {
	name: "recipyContainer",
	components: {
		shoppingItems,
	},
	data() {
		return {};
	},
	/* 	updated() {
		console.log("this.instructions");
		console.log(this.instructions);
	}, */
	props: {
		amount: String,
		ingredients: Object,
		instructions: Object,
	},
};
</script>

<style scoped>
ul {
	padding: 0 15px 15px;
}

li {
	padding-bottom: 5px;
}

.left {
	position: relative;
	float: right;
	overflow: hidden;
	width: 50%;
	padding: 4mm 10mm 0 10mm;
}
</style>