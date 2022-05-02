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
				:recipyListData="recipyListData"
				@send-currentRecipyId="getRecipiesId"
			></recipyList>
		</div>
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
			this.title = this.recipies[0].attributes.Title;
			this.ingredients = this.recipies[0].attributes.Ingredients;
			this.amount = this.recipies[0].attributes.Amount;
			this.instructions = JSON.parse(
				this.recipies[0].attributes.Instructions
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
@import "./assets/css/style.min.css";
</style>
