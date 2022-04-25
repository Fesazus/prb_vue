<template>
	<div>
		<div class="nav-ul">
			<!-- 			<h3>{{ title }}</h3>
			<ul>
				<li>
					<a class="navoption" href="sushi.html"> {{ title }} </a>
				</li>
			</ul> -->
			<listWithHeadline
				:headline="title"
				:items="categoryItems"
			></listWithHeadline>
		</div>
	</div>
</template>

<script>
import listWithHeadline from "./listWithHeadline.vue";
export default {
	name: "recipyListCategory",
	components: {
		listWithHeadline,
	},
	props: {
		title: String,
		categoryItems: Object,
	},
};
</script>

<style>
</style>