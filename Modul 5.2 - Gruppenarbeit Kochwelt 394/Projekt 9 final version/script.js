

const zeile1 = document.getElementById('rezept_zutaten_anzahl_menge1').innerText;
const zeile2 = document.getElementById('rezept_zutaten_anzahl_menge2').innerText;
const zeile3 = document.getElementById('rezept_zutaten_anzahl_menge3').innerText;
const zeile4 = document.getElementById('rezept_zutaten_anzahl_menge4').innerText;
const zeile5 = document.getElementById('rezept_zutaten_anzahl_menge5').innerText;
const zeile6 = document.getElementById('rezept_zutaten_anzahl_menge6').innerText;
const zeile7 = document.getElementById('rezept_zutaten_anzahl_menge7').innerText;
const zeile8 = document.getElementById('rezept_zutaten_anzahl_menge8').innerText;
const zeile9 = document.getElementById('rezept_zutaten_anzahl_menge9').innerText;
const zeile10 = document.getElementById('rezept_zutaten_anzahl_menge10').innerText;
const zeile11 = document.getElementById('rezept_zutaten_anzahl_menge11').innerText;
const zeile12 = document.getElementById('rezept_zutaten_anzahl_menge12').innerText;
const zeile13 = document.getElementById('rezept_zutaten_anzahl_menge13').innerText;
const zeile14 = document.getElementById('rezept_zutaten_anzahl_menge14').innerText;



function rechnePortionen(anzahl) {
    const number = parseInt(anzahl);
    if (number < 1 || number > 20 || anzahl == "" ) {
        alert("bitte die Zahl zwischen 1 und 20 eingeben");
        return;
    }

    const resultZeile1 = number * parseInt(zeile1);
    document.getElementById('rezept_zutaten_anzahl_menge1').innerText = resultZeile1.toString();
    const resultZeile2 = number * parseInt(zeile2);
    document.getElementById('rezept_zutaten_anzahl_menge2').innerText = resultZeile2.toString();
    const resultZeile3 = number * parseInt(zeile3);
    document.getElementById('rezept_zutaten_anzahl_menge3').innerText = resultZeile3.toString();
    const resultZeile4 = number * parseInt(zeile4);
    document.getElementById('rezept_zutaten_anzahl_menge4').innerText = resultZeile4.toString();
    const resultZeile5 = number * parseInt(zeile5);
    document.getElementById('rezept_zutaten_anzahl_menge5').innerText = resultZeile5.toString();
    const resultZeile6 = number * parseInt(zeile6);
    document.getElementById('rezept_zutaten_anzahl_menge6').innerText = resultZeile6.toString();
    const resultZeile7 = number * parseInt(zeile7);
    document.getElementById('rezept_zutaten_anzahl_menge7').innerText = resultZeile7.toString();
    const resultZeile8 = number * parseInt(zeile8);
    document.getElementById('rezept_zutaten_anzahl_menge8').innerText = resultZeile8.toString();
    const resultZeile9 = number * parseInt(zeile9);
    document.getElementById('rezept_zutaten_anzahl_menge9').innerText = resultZeile9.toString();
    const resultZeile10 = number * parseInt(zeile10);
    document.getElementById('rezept_zutaten_anzahl_menge10').innerText = resultZeile10.toString();
    const resultZeile11 = number * parseInt(zeile11);
    document.getElementById('rezept_zutaten_anzahl_menge11').innerText = resultZeile11.toString();
    const resultZeile12 = number * parseInt(zeile12);
    document.getElementById('rezept_zutaten_anzahl_menge12').innerText = resultZeile12.toString();
    const resultZeile13 = number * parseInt(zeile13);
    document.getElementById('rezept_zutaten_anzahl_menge13').innerText = resultZeile13.toString();
    const resultZeile14 = number * parseInt(zeile14);
    document.getElementById('rezept_zutaten_anzahl_menge14').innerText = resultZeile14.toString();
}

// funktion to rezept load on landing page


 function rezeptLoadKaiserschmarrn(){
    document.getElementById('rezept_load_section').innerHTML = "";
  return document.getElementById('rezept_load_section').innerHTML = '<div class="rezept_des_tages_section_bild margin_left"><img class="vorschaubild" src="./img/kaiserschmarrn.jpg" alt="vorschaubild"></div><div class="rezept_des_tages_sections  margin_right"><h2 class="marginBottom_textH2">Kaiserschmarrn</h2><span>Kaiserschmarrn ist ein traditionelles österreichischen Rezept. Ein flaumiger, zerrissener Pfannkuchen, serviert mit Puderzucker, Kompott und manchmal Rosinen. Perfekt als süßes Hauptgericht oder Dessert.</span><label for="rezept_oefnen"></label><a href="./kaiserschmarrn.html"> <button type="button" class="marginBottom_textH2  button_rezept_open  rezept_des_tages_section_text_button">Rezept öffnen</button></a></div>';

}


function rezeptLoadSchnitzel(){
    document.getElementById('rezept_load_section').innerHTML = "";
  return document.getElementById('rezept_load_section').innerHTML = '<div class="rezept_des_tages_section_bild margin_left"><img class="vorschaubild" src="./img/schniposa.webp" alt="vorschaubild"></div><div class="rezept_des_tages_sections  margin_right"><h2 class="marginBottom_textH2">Schnitzel mit Pommes</h2><span>Schnitzel mit Pommes? Wer liebt dieses Essen nicht schon von Kindesbeinen an? Das knusprige Schnitzel in selbstgemachter Panade zusammen mit leckeren Pommes machen diesen Klassiker aus. Es geht schnell und einfach und fast jeder mag es, den Salat kann man nach belieben auch weglassen :).</span><label for="rezept_oefnen"></label><a href="./schnitzel.html"> <button type="button" class="marginBottom_textH2  button_rezept_open  rezept_des_tages_section_text_button">Rezept öffnen</button></a></div>';

}

function rezeptLoadSpaghetti(){
    document.getElementById('rezept_load_section').innerHTML = "";
  return document.getElementById('rezept_load_section').innerHTML = '<div class="rezept_des_tages_section_bild margin_left"><img class="vorschaubild" src="./img/spaghetti.jpg" alt="vorschaubild"></div><div class="rezept_des_tages_sections  margin_right"><h2 class="marginBottom_textH2">Spaghetti mit Tomaten-Parmesansoße</h2><span>Spaghetti mit Tomaten-Parmesansoße ist ein einfaches und klassisches italienisches Gericht. Die Basis besteht aus Spaghetti, die mit einer aromatischen Tomatensauce serviert werden. Es ist ein leichtes, aber dennoch sehr schmackhaftes Gericht, das sowohl in Italien als auch weltweit sehr beliebt ist.</span><label for="rezept_oefnen"></label><a href="./spaghetti.html"> <button type="button" class="marginBottom_textH2  button_rezept_open  rezept_des_tages_section_text_button">Rezept öffnen</button></a></div>';

}



// Kontakt

function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xnnqzron", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}



// Sidebar

function toggleMenu(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display='flex';
}

function toggleMenuClose(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display='none';
}
