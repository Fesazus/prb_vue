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
		};
	},
};
</script>

<style>
@import "./assets/css/style.css";
</style>
