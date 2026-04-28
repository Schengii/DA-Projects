

const zeile1 = document.getElementById('rezept_zutaten_anzahl_menge1').innerText;
const zeile2 = document.getElementById('rezept_zutaten_anzahl_menge2').innerText;
const zeile3 = document.getElementById('rezept_zutaten_anzahl_menge3').innerText;
const zeile4 = document.getElementById('rezept_zutaten_anzahl_menge4').innerText;
const zeile5 = document.getElementById('rezept_zutaten_anzahl_menge5').innerText;
const zeile6 = document.getElementById('rezept_zutaten_anzahl_menge6').innerText;
const zeile7 = document.getElementById('rezept_zutaten_anzahl_menge7').innerText;
const zeile8 = document.getElementById('rezept_zutaten_anzahl_menge8').innerText;



function rechnePortionen(anzahl) {
    const number = parseInt(anzahl);
    if (number < 1 || number > 20 || anzahl == "" ) {
        alert("bitte die Zahl zwischen 1 und 20 eingeben");
        return;
    }

    const resultZeile1 = number * parseInt(zeile1);
    const resultZeile2 = number * parseInt(zeile2);
    const resultZeile3 = number * parseInt(zeile3);
    const resultZeile4 = number * parseInt(zeile4);
    const resultZeile5 = number * parseInt(zeile5);
    const resultZeile6 = number * parseInt(zeile6);
    const resultZeile7 = number * parseInt(zeile7);
    const resultZeile8 = number * parseInt(zeile8);

    document.getElementById('rezept_zutaten_anzahl_menge1').innerText = resultZeile1.toString();
    document.getElementById('rezept_zutaten_anzahl_menge2').innerText = resultZeile2.toString();
    document.getElementById('rezept_zutaten_anzahl_menge3').innerText = resultZeile3.toString();
    document.getElementById('rezept_zutaten_anzahl_menge4').innerText = resultZeile4.toString();
    document.getElementById('rezept_zutaten_anzahl_menge5').innerText = resultZeile5.toString();
    document.getElementById('rezept_zutaten_anzahl_menge6').innerText = resultZeile6.toString();
    document.getElementById('rezept_zutaten_anzahl_menge7').innerText = resultZeile7.toString();
    document.getElementById('rezept_zutaten_anzahl_menge8').innerText = resultZeile8.toString();

}


