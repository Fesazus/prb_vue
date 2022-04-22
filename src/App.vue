<template>
	<div>
		<h1>Rezepte</h1>
		<input
			type="button"
			class="mobile-show nav-hide-button"
			id="navigation-unhide"
			value="Navigation"
		/>
		<div class="nav mobile-hide">
			<div class="search">
				<input type="text" id="searchbox" placeholder="Suche" />
			</div>
			<main_category></main_category>
			<hr />
			<div>
				<caption>
					Blog
				</caption>
				<ul>
					<li>
						<a class="navoption" href="sinn_des_lebens.html"
							>Was ist der Sinn des Lebens</a
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="wrapper">
			<img :src="image" />
			<h2>Aramäisches Weißbrot</h2>
			<div class="right boxed">
				<h3>Einkaufszeddele</h3>
				<ul>
					<li>1 kg Mehl</li>
					<li>600 ml lauwarmes Wasser</li>
					<li>1 frische Hefe</li>
					<li>1 Pk. Trockenhefe</li>
					<li>1 EL Margarine</li>
					<li>1 TL Salz</li>
					<li>1 Pk. Backpulver</li>
					<li>1 Pk. Natron</li>
					<li>1/2 TL Zucker</li>
					<li>2 TL Öl</li>
					<li>Sesam</li>
					<li>Schwarzkümmel</li>
				</ul>
			</div>
			<recipy_content></recipy_content>
		</div>
	</div>
</template>

<script>
/* This is the minified production version of Parse JS  */
/* type = "text/javascript";
src = "https://npmcdn.com/parse/dist/parse.min.js"; */

import imageRecipy from "./assets/img/Okraschoteneintopf.jpg";

import main_category from "./components/main_category.vue";
import recipy_content from "./components/recipy_content.vue";

export default {
	name: "App",
	components: {
		main_category,
		recipy_content,
	},
	data() {
		return {
			image: imageRecipy,
		};
	},
};
</script>

<style>
@import "./assets/css/style.css";
</style>
