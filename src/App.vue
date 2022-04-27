<template>
	<div>
		<dataBase></dataBase>
		<h1>Rezepte</h1>
		<input
			type="button"
			class="mobile-show nav-hide-button"
			id="navigation-unhide"
			value="Navigation"
		/>
		<div class="nav mobile-hide">
			<searchInRecipyList></searchInRecipyList>
			<div class="search">
				<input type="text" id="searchbox" placeholder="Suche" />
			</div>
			<recipyList
				:title="title"
				:categoryItems="categoryItems"
				:recipyId="recipyId"
			></recipyList>
		</div>
		<div class="wrapper">
			<div id="container_recipy">
				<img :src="Image.url" />
				<h2>{{ title }}</h2>
				<recipyContainer
					:amount="amount"
					:ingredients="ingredients"
					:instructions="instructions"
					:recipyId="recipyId"
				></recipyContainer>
			</div>
		</div>
	</div>
</template>
<script>
/* ##### Datenbankanbindung #### */

// import imageRecipy from "./assets/img/Okraschoteneintopf.jpg";

import recipyList from "./components/recipyList.vue";
import recipyContainer from "./components/recipyContainer.vue";
import searchInRecipyList from "./components/searchInRecipyList.vue";
import dataBase from "./components/dataBase.vue";
import Parse from "parse/dist/parse.min.js";

export default {
	name: "App",
	components: {
		recipyList,
		recipyContainer,
		searchInRecipyList,
		dataBase,
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
			categoryItems: ["Paprika-Eintopf (Bamja)", "Baloc"],
			recipyId: "X8689sdnifqp",
			recipies: [],
		};
	},
	methods: {
		getAll() {
			let recipyTable = this.dataBase;
			console.log(recipyTable);
			let queryAll = new Parse.Query(recipyTable);
			queryAll
				.findAll()
				.then((recipies) => {
					this.recipies = recipies;
					console.log(recipies);
				})
				.catch(function (error) {
					console.log("Error: " + error.code + " " + error.message);
				});
		},
		getAllTest() {
			// Datenbank
			let Script = document.createElement("script");
			Script.setAttribute(
				"src",
				"https://npmcdn.com/parse/dist/parse.min.js"
			);
			document.head.appendChild(Script);
			// Initialize Parse
			Parse.initialize(
				"ACZFwLfcjciL0G4bgtGSGloBIuXyMYucSBFrp4Er",
				"ALxepfxOexSgKIiQHlFOV0YSJ4EKxiyRIPHC8ErH"
			); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
			Parse.serverURL = "https://parseapi.back4app.com/";
			let recipyTable = Parse.Object.extend("Recipy");
			let queryAll = new Parse.Query(recipyTable);
			queryAll
				.findAll()
				.then((recipies) => {
					// console.log(recipies);
					// console.log(this);
					this.recipies = recipies;
				})
				.catch(function (error) {
					console.log("Error: " + error.code + " " + error.message);
				});
		},
	},
	created() {
		this.getAllTest();
	},
};
</script>

<style>
@import "./assets/scss/style.min.css";
</style>
