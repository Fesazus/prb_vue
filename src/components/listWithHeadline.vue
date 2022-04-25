<template>
	<div>
		<ul>
			<h3>{{ headline }}</h3>
			<li v-for="(item, index) in items" :key="index">
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "listWithHeadline",
	data() {
		return {};
	},
	props: {
		headline: String,
		items: Object,
	},
};
</script>

<style>
</style>