<template>
	<div>
		<div class="nav-ul">
			<h3>{{ title }}</h3>
			<ul>
				<li>
					<a class="navoption" :href="recipyNameEncoded">
						{{ title }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "recipyListCategory",
	components: {},
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