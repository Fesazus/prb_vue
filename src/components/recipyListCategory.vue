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

<style scoped>
li {
	color: var(--default_text_color);
	list-style-type: none;
}

li:hover,
.current_recipy {
	color: var(--main_color);
}

.nav-ul {
	border: 1px solid var(--background_sub_color);
	box-shadow: 5px 5px 10px var(--shadow_border_color);
	border-radius: 10px;
	color: var(--main_color);
	padding: 15px 10px 5px 15px;
	margin: 15px 10px;
	background-color: var(--background_sub_color);
}

.nav-ul h3 {
	padding: 0;
}

.nav-ul li {
	padding: 8px 0 0 0;
}

.nav-ul li:first-of-type {
	padding-top: 10px;
}
</style>