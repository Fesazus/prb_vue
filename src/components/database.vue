<template>
	<div></div>
</template>

<script>
import Parse from "parse/dist/parse.min.js";
export default {
	name: "dataBase",
	mounted() {
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
		/* 		let queryAll = new Parse.Query(recipyTable);
		queryAll
			.findAll()
			.then(function (recipies) {})
			.catch(function (error) {
				console.log("Error: " + error.code + " " + error.message);
			}); */
	},
};
</script>

<style>
</style>