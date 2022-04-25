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
			<main_category title="Paprika-Eintopf (Bamja)"></main_category>
		</div>
		<div class="wrapper">
			<div id="container_recipy">
				<img :src="Image.url" />
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
				<recipy_content :amount="amount"></recipy_content>
			</div>
		</div>
	</div>
</template>
<script>
/* ##### Datenbankanbindung #### */

// import imageRecipy from "./assets/img/Okraschoteneintopf.jpg";

import main_category from "./components/main_category.vue";
import recipy_content from "./components/recipy_content.vue";
import Parse from "parse/dist/parse.min.js";

export default {
	name: "App",
	components: {
		main_category,
		recipy_content,
	},
	data() {
		return {
			// image: imageRecipy,
			Image: {
				__type: "File",
				name: "f8216ab12a33aa8f39a27704ef561960_Image.bin",
				url: "https://parsefiles.back4app.com/AJYq67NCkJgwHMq2NQRgjnSQIWkrGiwlu5UUguLP/f8216ab12a33aa8f39a27704ef561960_Image.bin",
			},
			title: "Paprika-Eintopf (Bamja)",
			ingredients: [
				"3 Zwiebeln",
				"3 Paprika",
				"Tomatenmark",
				"Paprikamark",
				"3 Beutel gefrorene Okraschoten",
				"Wahlweise Bulgur als Beilage",
			],
			amount: "6 Portionen",
			instructions: [
				[
					"Zubereitung",
					[
						"Zwiebeln schneiden",
						"Paprika in 1 cm lange Streifen schneiden",
						"Mit Öl in einem Topf anbraten",
						"1EL Tomaten- und Paprikamark dazugeben und mitbraten",
						"Okraschoten dazugeben",
						"Topfinhalt mit Wasser bedecken",
						"Mit Salz, schwarzem Pfeffer und geschroteter Chili abschmecken",
						"Für 30-40 min köcheln",
						"wahlweise Bulgur dazu",
					],
				],
				[
					"Alternative für Okraschoten aus dem Glas",
					[
						"4 Gläßer eingelegte Okraschoten",
						"Flüssigkeit absieben",
						"Tomaten entsorgen",
						"Okraschoten mit Wasser ausspülen",
						"Zusätzlich mit 1 TL Zucker würzen",
					],
				],
				[
					"Alternative zu Okraschoten",
					["6 mittelgroße Kartoffeln", "in kleine Würfel schneiden"],
				],
			],
		};
	},
	mounted() {
		// Datenbank
		/* 		let Script = document.createElement("script");
		Script.setAttribute(
			"src",
			"https://npmcdn.com/parse/dist/parse.min.js"
		);
		document.head.appendChild(Script); */

		// Initialize Parse
		Parse.initialize(
			"ACZFwLfcjciL0G4bgtGSGloBIuXyMYucSBFrp4Er",
			"ALxepfxOexSgKIiQHlFOV0YSJ4EKxiyRIPHC8ErH"
		); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
		Parse.serverURL = "https://parseapi.back4app.com/";
		let recipyTable = Parse.Object.extend("Recipy");

		/* ##### Test #### */

		let query = new Parse.Query(recipyTable);
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
			});
	},
};
</script>

<style>
@import "./assets/css/style.css";
</style>
