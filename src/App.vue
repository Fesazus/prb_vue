<template>
	<div>
		<dataBase></dataBase>
		<h1 v-if="recipyAppId">Rezept deiner Wahl</h1>
		<h1 v-else>Rezept-Vorschlag</h1>
		<input
			type="button"
			class="mobile-show nav-hide-button"
			id="navigation-unhide"
			value="Navigation"
		/>
		<nav class="mobile-hide">
			<searchInRecipyList></searchInRecipyList>
			<div class="search">
				<input type="text" id="searchbox" placeholder="Suche" />
			</div>
			<recipyList
				:recipyListData="recipyListData"
				@send-currentRecipyId="getRecipiesId"
			></recipyList>
		</nav>
		<div class="wrapper">
			<div id="container_recipy">
				<img :src="image" />
				<h2>{{ title }}</h2>
				<recipyContainer
					:amount="amount"
					:ingredients="ingredients"
					:instructions="instructions"
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
			/* 			Image: {
				__type: "File",
				name: "f8216ab12a33aa8f39a27704ef561960_Image.bin",
				url: "https://parsefiles.back4app.com/AJYq67NCkJgwHMq2NQRgjnSQIWkrGiwlu5UUguLP/f8216ab12a33aa8f39a27704ef561960_Image.bin",
			}, */
			image: "",
			noImage: "",
			title: "",
			ingredients: [],
			amount: "",
			instructions: [],
			recipyAppId: 0,
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
					// console.log(this.recipies[0].attributes.Title);
					this.getRecipyListData();
					this.getRecipyOfTheDay(recipies);
				})
				.catch(function (error) {
					console.log("Error: " + error.code + " " + error.message);
				});
		},
		getRecipyListData() {
			const recipyListData = this.recipies.map((item) => {
				let list = [];
				list.push(item.id);
				list.push(item.attributes.Category);
				list.push(item.attributes.Title);
				// console.log(list);
				return list;
			});
			this.recipyListData = this.removeDoubledCategorys(recipyListData);
		},
		getRecipyOfTheDay(recipies) {
			let randomNumber = Math.floor(
				Math.random() * (this.recipies.length + 1)
			);
			console.log("randomNumber");
			console.log(randomNumber);
			this.title = this.recipies[randomNumber].attributes.Title;
			this.ingredients =
				this.recipies[randomNumber].attributes.Ingredients;
			this.amount = this.recipies[randomNumber].attributes.Amount;
			this.instructions = JSON.parse(
				this.recipies[randomNumber].attributes.Instructions
			);
			if (item.attributes.Image) {
				this.image = item.attributes.Image._url;
			} else {
				this.image = "";
			}
		},
		removeDoubledCategorys(recipyListData) {
			let categoryList = {};
			// console.log("categoryListdavor");
			// console.log(categoryList);
			for (let index = 0; index < recipyListData.length; index++) {
				if (
					Object.keys(categoryList).includes(recipyListData[index][1])
				) {
					// console.log("ist gleich");
					categoryList[recipyListData[index][1]].push(
						recipyListData[index]
					);
				} else {
					// console.log("ist unterschiedlich");
					categoryList[recipyListData[index][1]] = [
						recipyListData[index],
					];
				}
			}
			console.log("categoryListdanach");
			console.log(Array(categoryList));
			return categoryList;
		},
		getRecipiesId(id) {
			this.recipyAppId = id;
			const recipyListData = this.recipies.map((item) => {
				if (item.id === id) {
					console.log("id gefunden");
					console.log(item.attributes.Title);
					this.title = item.attributes.Title;
					this.ingredients = item.attributes.Ingredients;
					this.amount = item.attributes.Amount;
					this.instructions = JSON.parse(
						item.attributes.Instructions
					);
					if (item.attributes.Image) {
						this.image = item.attributes.Image._url;
					} else {
						this.image = "";
					}
				} else {
					console.log("id nicht vorhanden");
				}
			});
		},
	},
	created() {
		this.getAllRecipies();
	},
	/* 	mounted() {
		debugger;
	}, */
	computed: {},
};
</script>

<style>
@import "./assets/css/variables.css";
@import "./assets/css/style.css";

/* kalam-regular - latin */
@font-face {
	font-family: "Kalam";
	font-style: normal;
	font-weight: 400;
	src: local(""),
		url("./assets/fonts/kalam-v15-latin-regular.woff2") format("woff2"),
		url("./assets/fonts/kalam-v15-latin-regular.woff") format("woff");
	/* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* open-sans-600 - latin */
@font-face {
	font-family: "Open Sans";
	font-style: normal;
	font-weight: 600;
	src: local(""),
		url("./assets/fonts/open-sans-v28-latin-600.woff2") format("woff2"),
		url("./assets/fonts/open-sans-v28-latin-600.woff") format("woff");
	/* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-size: 0.8rem;
	font-family: "Open Sans", Arial, sans-serif;
	font-weight: 600;
	-webkit-print-color-adjust: exact;
	width: 100%;
}

nav {
	position: relative;
	float: left;
	padding-right: 5mm;
	max-width: 30%;
}

.nav ul,
.search {
	padding: 0 10px 15px 35px;
	margin: 0;
	list-style-type: none;
	font-weight: 400;
	font-size: 0.8rem;
}

/* nav > ul > li > ul {
	padding-left: 35px;
	text-align: left;
} */

h1,
h2,
h3 {
	font-family: "Kalam", Arial, sans-serif;
}

h1,
h2 {
	background-color: var(--main_color);
	color: var(--inverted_text_color);
	text-align: center;
	text-transform: uppercase;
	padding: 1rem 0 0.9rem 0;
	font-size: 2.5rem;
}

h2 {
	position: absolute;
	top: 3%;
	width: 100%;
	border-bottom: 5px solid var(--inverted_text_color);
	border-top: 5px solid var(--inverted_text_color);
	margin: 0;
	opacity: 0.8;
}

h3 {
	color: var(--main_color);
	font-size: 1.2rem;
	margin: 0;
	padding: 1rem 0 0 0;
}

.wrapper {
	height: 277mm;
	width: 190mm;
	border: 1px solid var(--border_color);
	margin-left: 5mm;
	position: relative;
	float: left;
}

.wrapper img {
	width: 100%;
}

.hide {
	display: none;
}

.mobile-show {
	display: none;
}
</style>
