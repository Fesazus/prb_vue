<template>
	<div class="nav-ul">
		<recipyListCategory></recipyListCategory>
		<h3>{{ title }}</h3>
		<ul>
			<li>
				<a class="navoption" href="sushi.html"> {{ title }} </a>
			</li>
			<li>
				<a class="navoption" href="teriyaki-nudeln.html">
					Teriyaki Nudeln
				</a>
			</li>
		</ul>
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
	},
};
</script>

<style>
</style>
