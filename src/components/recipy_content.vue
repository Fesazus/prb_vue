<template>
	<div>
		<div class="left">
			<p>{{ amount }}</p>

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
export default {
	name: "recipy_content",
	components: {},

	data() {
		return {
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
};
</script>

<style>
</style>