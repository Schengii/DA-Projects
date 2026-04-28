<<<<<<< HEAD

 let randomTitles = [
    "Das Geheimnis des Waldes",
    "Die verlorene Welt",
    "Der Kristallschädel",
    "Der Fluch der Azteken",
    "Im Bann des Dschungels",
 ];

 let randomTitlesSecond = [
    "Die Spur des Pharaos",
    "Die verbotene Insel",
    "Der Schatz der Tempelritter",
    "Das Rätsel der Pyramiden",
    "Die Jagd nach dem Goldenen Löwen",
 ]
 
 let randomDescriptions = [
    "Eine spannende Geschichte über Mut und Abenteuer.",
    "Ein mysteriöser Fund stellt alles auf den Kopf.",
    "Abenteurer stürzen sich in ein gefährliches Abenteuer.",
    "Ein Schatz, der alles verändern könntem, wird gesucht.",
    "In einer fernen Zeit beginnt ein epischer Kampf.",
 ];

 let randomDescriptionsSecond = [
    "Geheimnisse aus vergangenen Zeiten kommen ans Licht.",
    "Eine Reise durch unbekannte Gefahren und Rätsel.",
    "Legenden und Wahrheiten vermischen sich zu einem Mythos.",
    "Die Welt hält den Atem an, während die Suche beginnt.",
    "Helden stehen auf und stellen sich dem Unbekannten.",

 ]

let arrDescriptions = [];
let arrTitles = [];


 function renderFiltered(index) {
    if (index == 1) {
        arrTitles = randomTitles;
        arrDescriptions = randomDescriptions;
        render()
    }
    if (index == 2) {
        arrTitles = randomTitlesSecond;
        arrDescriptions = randomDescriptionsSecond;
        render()
    }
 }


 function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let index = 0; index < arrTitles.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index, arrTitles, arrDescriptions);
    }
 }


 function getNoteTemplate(i) {
    return `   <div onclick="toggleOverlay()" class="single_element">
                                        <h2>
                                          ${arrTitles[i]}
                                        </h2>
                                        <p>
                                          ${arrDescriptions[i]}
                                        </p>
                                    </div>`
 }


 function toggleOverlay(index) {
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.toggle('d_none')
=======

 let randomTitles = [
    "Das Geheimnis des Waldes",
    "Die verlorene Welt",
    "Der Kristallschädel",
    "Der Fluch der Azteken",
    "Im Bann des Dschungels",
 ];

 let randomTitlesSecond = [
    "Die Spur des Pharaos",
    "Die verbotene Insel",
    "Der Schatz der Tempelritter",
    "Das Rätsel der Pyramiden",
    "Die Jagd nach dem Goldenen Löwen",
 ]
 
 let randomDescriptions = [
    "Eine spannende Geschichte über Mut und Abenteuer.",
    "Ein mysteriöser Fund stellt alles auf den Kopf.",
    "Abenteurer stürzen sich in ein gefährliches Abenteuer.",
    "Ein Schatz, der alles verändern könntem, wird gesucht.",
    "In einer fernen Zeit beginnt ein epischer Kampf.",
 ];

 let randomDescriptionsSecond = [
    "Geheimnisse aus vergangenen Zeiten kommen ans Licht.",
    "Eine Reise durch unbekannte Gefahren und Rätsel.",
    "Legenden und Wahrheiten vermischen sich zu einem Mythos.",
    "Die Welt hält den Atem an, während die Suche beginnt.",
    "Helden stehen auf und stellen sich dem Unbekannten.",

 ]

let arrDescriptions = [];
let arrTitles = [];


 function renderFiltered(index) {
    if (index == 1) {
        arrTitles = randomTitles;
        arrDescriptions = randomDescriptions;
        render()
    }
    if (index == 2) {
        arrTitles = randomTitlesSecond;
        arrDescriptions = randomDescriptionsSecond;
        render()
    }
 }


 function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let index = 0; index < arrTitles.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index, arrTitles, arrDescriptions);
    }
 }


 function getNoteTemplate(i) {
    return `   <div onclick="toggleOverlay()" class="single_element">
                                        <h2>
                                          ${arrTitles[i]}
                                        </h2>
                                        <p>
                                          ${arrDescriptions[i]}
                                        </p>
                                    </div>`
 }


 function toggleOverlay(index) {
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.toggle('d_none')
>>>>>>> origin/main
 }