<template>
	<div>
		<shoppingItems :ingredients="ingredients"></shoppingItems>
		<div class="left">
			<listWithHeadline></listWithHeadline>
			<p>{{ amount }}</p>
			<!-- 			<h3
				v-for="(instructionHeadline, index) in instructions"
				:key="index"
			>
				{{ instructionHeadline }}
			</h3>
			<ul>
				<li
					v-for="(instructionListitem, index) in instructions"
					:key="index"
				>
					{{ instructionListitem }}
				</li>
			</ul> -->
			<h3>Zubereitung</h3>
			<ul>
				<li>Zwiebeln schneiden</li>
				<li>Paprika in 1 cm lange Streifen schneiden</li>
				<li>Mit Öl in einem Topf anbraten</li>
				<li>1EL Tomaten- und Paprikamark dazugeben und mitbraten</li>
				<li>Okraschoten dazugeben</li>
				<li>Topfinhalt mit Wasser bedecken</li>
				<li>
					Mit Salz, schwarzem Pfeffer und geschroteter Chili
					abschmecken
				</li>
				<li>Für 30-40 min köcheln</li>
				<li>wahlweise Bulgur dazu</li>
			</ul>
			<h3>Alternative für Okraschoten aus dem Glas</h3>
			<ul>
				<li>4 Gläßer eingelegte Okraschoten</li>
				<li>Flüssigkeit absieben</li>
				<li>Tomaten entsorgen</li>
				<li>Okraschoten mit Wasser ausspülen</li>
				<li>Zusätzlich mit 1 TL Zucker würzen</li>
			</ul>
			<h3>Alternative zu Okraschoten</h3>
			<ul>
				<li>6 mittelgroße Kartoffeln</li>
				<li>in kleine Würfel schneiden</li>
			</ul>
		</div>
	</div>
</template>

<script>
import listWithHeadline from "./listWithHeadline.vue";
import shoppingItems from "./shoppingItems.vue";
export default {
	name: "recipyContainer",
	components: {
		listWithHeadline,
		shoppingItems,
	},
	data() {
		return {};
	},
	props: {
		amount: String,
		ingredients: Object,
		instructions: Object,
	},
};
</script>

<style>
</style>