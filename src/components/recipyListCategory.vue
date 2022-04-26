<template>
	<div>
		<div class="nav-ul">
			<h3>{{ title }}</h3>
			<ul>
				<li>
					<a class="navoption" :href="urlRecipy"> {{ title }} </a>
				</li>
			</ul>
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
	data() {
		return {};
	},
	computed: {
		recipyNameEncoded() {
			// let titleEncoded = encodeURIComponent(this.title);
			let titleEncoded = "test";
			let urlRecipy = "?recipy=" + titleEncoded;
			return urlRecipy;
		},
	},
};
// console.log(encodeURIComponent);
</script>

<style>
</style>