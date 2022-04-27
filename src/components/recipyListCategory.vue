<template>
	<div>
		<div class="nav-ul">
			<h3>{{ title }}</h3>
			<ul>
				<li v-for="(categoryItem, index) in categoryItems" :key="index">
					<a
						class="navoption"
						:href="recipyNameEncoded"
						:id="recipyId"
					>
						{{ title }}
					</a>
					<!-- 					<a
						@click="sendRecipyId"
						class="navoption"
						:href="recipyNameEncoded"
						:id="recipyId"
					>
						{{ title }}
					</a> -->
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
		recipyId: String,
	},
	data() {
		return {};
	},
	computed: {
		recipyNameEncoded() {
			// console.log(this.title);
			let titleEncoded = encodeURIComponent(this.title);
			// console.log(titleEncoded);
			let urlRecipy = "?recipy=" + titleEncoded;
			return urlRecipy;
		},
		/* 		sendRecipyId() {
		this.$emit("recipy-id", this.recipyId);
		},
		*/
	},
};
</script>

<style>
</style>