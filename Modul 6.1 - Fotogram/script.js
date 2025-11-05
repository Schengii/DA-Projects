"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const

	// selektiert alle Bilder, die Kindelemente eines a-Elements sind
		allPics = document.querySelectorAll(".gallery a > img"),

		// container für die Bildunterschrift (Alternativtext der Vorschau)
		caption = document.createElement("figcaption"),

		// schließen-Button der Großansicht
		close = document.createElement("button"),

		// container für die Großansicht
		// container für die Bildunterschrift (Alternativtext der Vorschau)
		lightbox = document.createElement("dialog"),
		figure = document.createElement("figure"),

		// Platzhalter für das eigentliche Großansicht-Bild
		full = document.createElement("img"),

		// Button zum Weiterschalten
		next = document.createElement("button"),

		// Button zum Zurückschalten
		prev = document.createElement("button");

	// aktuell anzuzeigendes Bild aus der Liste
	let currentPic = 0;

	// Button-Beschriftungen
	close.textContent = "schließen";
	next.textContent = "weiter";
	prev.textContent = "zurück";

	// Button-IDs für einfacheres CSS
	close.id = 'close';
	next.id = 'next';
	prev.id = 'prev';

	// Großansicht mit ID versehen...
	lightbox.id = "lightbox";

	// eigentliches Großansichtbild einfügen
	lightbox.appendChild(figure);

	// container für Bild und Bildunterschrift einfügen
	figure.appendChild(full);
	figure.appendChild(caption);

	// Buttons einfügen
	lightbox.appendChild(close);
	lightbox.appendChild(prev);
	lightbox.appendChild(next);

	// Großansicht ins Dokument einfügen
	document.body.appendChild(lightbox);

	// click-Handler auf das Dokument einrichten
	document.addEventListener("click", evt => {

		// kommt click aus Vorschaubild?
		//		let showFull = false; // gehe nicht davon aus
		allPics.forEach((element, index) => {

			// wurde Vorschaubild oder Link drumherum angeklickt?
			if (evt.target == element || evt.target == element.parentNode) {

				// merke gewünschtes Bild
				currentPic = index;
				// wir wollen jetzt die Vollanzeige
				lightbox.showModal();
			}
		});
		if (evt.target == close) {
			lightbox.close();
		}

		// kommt click aus Teilen der Großansicht?
		[caption, figure, full, next, prev].forEach(element => {
			if (evt.target == element) {

				// Beim schließen-Button bleibt showFull false,
				// denn der schließen-Button wird hier nicht erfasst.
				//			showFull = true;
				// letztes Bild in der Liste ereicht?
				if (element == next && currentPic < allPics.length - 1) {

					// nein, weiterschalten
					currentPic++;
				}

				// erstes Bild in der Liste ereicht?
				if (element == prev && currentPic) { // kürzer als (currentPic > 0)

					// nein, zurückschalten
					currentPic--;
				}
			}
		});
		if (lightbox) {
			// dem ausgewählten Bild die URL der Großansicht zuweisen
			full.src = allPics[currentPic].parentNode.href;

			// Bildunterschrift aus Alternativtext
			caption.textContent = allPics[currentPic].alt;

			// nächstes-Bild-Button anzeigen?
			if (currentPic < allPics.length - 1) {
				next.removeAttribute("hidden");
			} else {
				next.setAttribute("hidden", "hidden");
			}

			// vorheriges-Bild-Button anzeigen?
			if (currentPic) {
				prev.removeAttribute("hidden");
			} else {
				prev.setAttribute("hidden", "hidden");
			}

			// Link-Funktionalität unterbrechen
			evt.preventDefault();
		} else {

			// Großansicht unsichtbar schalten
			lightbox.close();
		}
	});
});