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
				:category="category"
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
			category: "Aramäisch",
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
			recipyListData: [],
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
		getAllRecipies() {
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
					// console.log(this);
					this.recipies = recipies;
					// console.log(this.recipies);
					this.getRecipyListData();
				})
				.catch(function (error) {
					console.log("Error: " + error.code + " " + error.message);
				});
		},
		getRecipyListData() {
			/* 			const recipyId = this.recipies.map((item) => item.id);
			const recipyCategory = this.recipies.map(
				(item) => item.attributes.Category
			);
			const recipyTitle = this.recipies.map(
				(item) => item.attributes.Title
			); */
			const recipyListData = this.recipies.map((item) => {
				let list = [];
				list.push(item.id);
				list.push(item.attributes.Category);
				list.push(item.attributes.Title);
				return list;
			});
			// console.log(recipyListData);
			let recipyListDataTest = [
				["ziTEZm3Qlu", "Beilagen", "Mu-Err"],
				["zqn5fGH9Jx", "Punee", "Galettes"],
				["zqn5GH9Jx", "unee", "Galettes"],
			];
			this.removeDoubledCategorys(recipyListDataTest);
		},
		removeDoubledCategorys(recipyListDataTest) {
			let categoryList = [];
			console.log("categoryListdavor");
			console.log(categoryList);
			// console.log("categoryList[0]davor");
			// console.log(categoryList[0]);
			// console.log("recipyListDataTest removeDoubledCategorys");
			// console.log(recipyListDataTest);
			for (let index = 0; index < recipyListDataTest.length; index++) {
				// console.log("recipyListDataTest[index]");
				// console.log(recipyListDataTest[index]);
				// console.log("recipyListDataTest[index][2]");
				// console.log(recipyListDataTest[index][2]);
				if (recipyListDataTest[index][2] === categoryList[0]) {
					console.log("ist gleich");
				} else {
					console.log("recipyListDataTest[index][2]");
					console.log(recipyListDataTest[index][2]);
					categoryList.push(recipyListDataTest[index][2]);
				}
				console.log("categoryListdanach");
				console.log(categoryList);
				// console.log("categoryList[0]danach");
				// console.log(categoryList[0]);
			}
		},
	},
	created() {
		this.getAllRecipies();
		/* this.getRecipyListData(); */
	},
	/* 	mounted() {
		debugger;
	}, */
	computed: {
		/* 			sortAlphabetical(a, b) {
			let nameA = a.get("Title").toLowerCase();
			let nameB = b.get("Title").toLowerCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		}, */
	},
};
</script>

<style>
@import "./assets/scss/style.min.css";
</style>
