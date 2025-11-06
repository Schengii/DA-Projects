document.addEventListener('click', function (event) {
    console.log('Geklickt auf:' , event.target);
})

let myImgs = [
    "canyon-9215914_1920.jpg",
    "cascade-7152189_1280.jpg",
    "deer-8052359_1920.jpg",
    "elephant-8359382_1920.jpg",
    "forest-3369950_1280.jpg",
    "fox-715588_1920.jpg",
    "mountain-9172053_1280.jpg",
    "mountain-range-8508224_1280.jpg",
    "nature-8622415_1280.jpg",
    "pile-1651945_1920.jpg",
    "raccoons-8282171_1920.jpg",
    "simba-8618301_1920.jpg",
    "skyscraper-9226515_1920.jpg",
    "swans-7736415_1920.jpg",
    "waterfall-5873630_1280.jpg",
  ];


// Rendert Bild-Gallerie in HTML
function renderImg() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let index = 0; index < myImgs.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(index) {
    return`
    <section onclick="openOverflow(${index})">
        <img onclick="currentSlide(${index+1})" class="preview" src="./img/${myImgs[index]}" alt="Bild ${index}">
    </section>  `
}


// öffnet das Overlay
function openOverflow() {
    document.getElementById("myOverflow").style.display = "block";
}


// schließt das Overlay
function closeOverflow() {
    const overlay = document.getElementById("myOverflow");
        if (overlay) {
            overlay.style.display = "none";
    }
}


// EventListener zum schließen des Overlays über dm Main
function setEventListener() {
    document.getElementById("myMain").addEventListener("click", function(event) {
        if (event.target.id === "myMain") {
            closeOverflow();
        }
    });
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace("active", "");   
        }
        slides[slideIndex-1].style.display = "block";
        slides.innerHTML = slides[slideIndex-1].alt;
}


// zeigt das nächste Bild
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// zeigt das vorherige Bild
function currentSlide(n) {
    showSlides(slideIndex = n);
}











/*
function render() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let index = 0; index < arrImgs.length; index++) {
        contentRef.innerHTML += getNoteTemplate(index, arrImgs)
    }
}

function getNoteTemplate(i) {
    return `    <div onclick="toggleOverlay()" class="single_element">
                                        <p>
                                           ${arrImgs[i]}
                                        </p>
                </div> `
}


function toggleOverlay(index) {
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.toggle('d_none')
}

/*






/*
showButton.addEventListener("click", () => {
    dialog.showModal();
});

dialog.addEventListener("close", (e) => {
    outputBox.value = 
    dialog.returnValue === "default"
    ? "No return value."
    : `ReturnValue: ${dialog.returnValue}.`;
});


confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.closest(selectEl.value);
});*/