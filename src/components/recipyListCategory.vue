<template>
	<div>
		<div class="nav-ul">
			<h3>{{ category }}</h3>
			<ul>
				<li v-for="(categoryItem, index) in sortRecipies" :key="index">
					<a
						class="navoption"
						:href="recipyNameEncoded(categoryItem[2])"
						:id="categoryItem[0]"
					>
						{{ categoryItem[2] }}
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
		categoryItems: Object,
		category: String,
	},
	data() {
		return {};
	},
	methods: {
		recipyNameEncoded(title) {
			// console.log(this.title);
			let titleEncoded = encodeURIComponent(title);
			// console.log(titleEncoded);
			let urlRecipy = "?recipy=" + titleEncoded;
			return urlRecipy;
		},
		/* 		sendRecipyId() {
		this.$emit("recipy-id", this.recipyId);
		},
		*/
	},
	computed: {
		sortRecipies() {
			return [...this.categoryItems].sort(function (a, b) {
				return a[2].localeCompare(b[2]);
			});
		},
	},
};
</script>

<style>
</style>