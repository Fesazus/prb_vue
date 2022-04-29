<template>
	<div>
		<div class="nav-ul">
			<h3>{{ category }}</h3>
			<ul>
				<li
					v-for="(categoryItem, index) in sortRecipies"
					:key="index"
					:id="categoryItem[0]"
					@click="sendRecipyId"
				>
					{{ categoryItem[2] }}
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
		return {
			recipyId: 0,
		};
	},
	methods: {
		recipyNameEncoded(title) {
			// console.log(this.title);
			let titleEncoded = encodeURIComponent(title);
			// console.log(titleEncoded);
			let urlRecipy = "?recipy=" + titleEncoded;
			return urlRecipy;
		},
		sendRecipyId(event) {
			this.$emit("onClick-RecipyId", event.currentTarget.id);
		},
	},
	computed: {
		sortRecipies() {
			return [...this.categoryItems].sort(function (a, b) {
				return a[2].localeCompare(b[2]);
			});
		},
		setId() {
			this.recipyId = categoryItem[0];
		},
	},
};
</script>

<style>
</style>