<template>
	<div class="nav-ul">
		<caption>
			{{
				category
			}}
		</caption>
		<ul>
			<li><a class="navoption" href="sushi.html">Sushi</a></li>
			<li>
				<a class="navoption" href="teriyaki-nudeln.html">
					Teriyaki Nudeln
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "recipy_content",
	components: {},
	data() {
		return {
			category: "Aramäisch",
		};
	},
};
</script>

<style>
</style>
