<template>
	<div>
		<div class="nav-ul">
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
		<listWithHeadline></listWithHeadline>
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
	},
};
</script>

<style>
</style>