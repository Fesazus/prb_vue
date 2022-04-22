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
		</div>
		<div class="wrapper">
			<div id="container_recipy">
				<img :src="image" />
				<h2>{{ title }}</h2>
				<div class="right boxed">
					<h3>Einkaufszeddele</h3>
					<ul>
						<li
							v-for="(ingredient, index) in ingredients"
							:key="index"
						>
							{{ ingredient }}
						</li>
					</ul>
				</div>
				<recipy_content></recipy_content>
			</div>
		</div>
	</div>
</template>
<script>
/* ##### Datenbankanbindung #### */

// Initialize Parse
/* Parse.initialize(
	"ACZFwLfcjciL0G4bgtGSGloBIuXyMYucSBFrp4Er",
	"ALxepfxOexSgKIiQHlFOV0YSJ4EKxiyRIPHC8ErH"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";
let recipyTable = Parse.Object.extend("Recipy"); */

/* ##### Test #### */

/* let query = new Parse.Query(recipyTable);
query.equalTo("Title", "BBQ");
query
	.first()
	.then(function (recipy) {
		console.log("recipy");
		console.log(recipy);
		console.log(typeof recipy);
		console.log(recipy instanceof Array);
		if (recipy) {
			console.log(
				"Pet found successful with name: " +
					recipy.get("Title") +
					" and age: " +
					recipy.get("Category")
			);
		} else {
			console.log("Nothing found, please try again");
		}
	})
	.catch(function (error) {
		console.log("Error: " + error.code + " " + error.message);
	}); */

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
			title: "Paprika-Eintopf (Bamja)",
			ingredients: [
				"3 Zwiebeln",
				"3 Paprika",
				"Tomatenmark",
				"Paprikamark",
				"3 Beutel gefrorene Okraschoten",
				"Wahlweise Bulgur als Beilage",
			],
		};
	},
	mounted() {
		// Datenbank
		let Script = document.createElement("script");
		Script.setAttribute(
			"src",
			"https://npmcdn.com/parse/dist/parse.min.js"
		);
		document.head.appendChild(Script);
	},
};
</script>

<style>
@import "./assets/css/style.css";
</style>
