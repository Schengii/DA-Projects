const IMAGES = [
  { src: "./img/canyon-9215914_1920.jpg", title: "Canyon" },
  { src: "./img/cascade-7152189_1280.jpg", title: "Cascade" },
  { src: "./img/deer-8052359_1920.jpg", title: "Deer" },
  { src: "./img/elephant-8359382_1920.jpg", title: "Elephant" },
  { src: "./img/forest-3369950_1280.jpg", title: "Forest" },
  { src: "./img/fox-715588_1920.jpg", title: "Fox" },
  { src: "./img/mountain-9172053_1280.jpg", title: "Mountain" },
  { src: "./img/nature-8622415_1280.jpg", title: "Nature" },
  { src: "./img/pile-1651945_1920.jpg", title: "Pile" },
  { src: "./img/raccoons-8282171_1920.jpg", title: "Raccoons" },
];

let slideIndex = 0;

/**
 * Initializes the application and renders the initial gallery.
 */
function init() {
  renderGallery();
  setupEventListeners();
}

/**
 * Renders the gallery images dynamically into the container.
 */
function renderGallery() {
  const container = document.getElementById("gallery-container");
  container.innerHTML = "";

  IMAGES.forEach((image, index) => {
    container.innerHTML += getGalleryTemplate(image, index);
  });
}

/**
 * Generates the HTML template for a single thumbnail image.
 * @param {Object} image - The image object from the array.
 * @param {number} index - The current index of the image.
 * @returns {string} The final HTML string.
 */
function getGalleryTemplate(image, index) {
  return `
        <img src="${image.src}" 
             alt="${image.title}" 
             class="image-thumbnail" 
             onclick="openDialog(${index})"
             onkeydown="if(event.key === 'Enter') openDialog(${index})"
             tabindex="0">
    `;
}

/**
 * Toggles the accessibility of background elements for keyboard users.
 * @param {boolean} isOpen - Whether the dialog is active or not.
 */
function toggleBackgroundAccessibility(isOpen) {
  const thumbnails = document.querySelectorAll(".image-thumbnail");
  thumbnails.forEach((img) => {
    img.tabIndex = isOpen ? -1 : 0;
  });
}

/**
 * Opens the dialog, freezes background scrolling and handles focus.
 * @param {number} index - Index of the clicked image.
 */
function openDialog(index) {
  slideIndex = index;
  updateDialog();
  
  document.getElementById("body-overlay").classList.add("visible");
  document.body.classList.add("no-scroll");
  
  toggleBackgroundAccessibility(true);
  document.getElementById("dialog-close-btn").focus();
}

/**
 * Closes the dialog and restores background functionality.
 */
function closeDialog() {
  document.getElementById("body-overlay").classList.remove("visible");
  document.body.classList.remove("no-scroll");
  
  toggleBackgroundAccessibility(false);
}

/**
 * Navigates to the next or previous image in the dialog.
 * @param {number} direction - 1 for next, -1 for previous.
 */
function plusSlides(direction) {
  slideIndex += direction;

  if (slideIndex >= IMAGES.length) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = IMAGES.length - 1;
  }

  updateDialog();
}

/**
 * Updates the image source, title, and counter inside the dialog.
 */
function updateDialog() {
  const image = IMAGES[slideIndex];
  document.getElementById("dialog-img").src = image.src;
  document.getElementById("dialog-title").innerText = image.title;
  document.getElementById("image-counter").innerText =
    `${slideIndex + 1} / ${IMAGES.length}`;
}

/**
 * Sets up global event listeners for the overlay and keyboard navigation.
 */
function setupEventListeners() {
  const overlay = document.getElementById("body-overlay");

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeDialog();
    }
  });

  document
    .getElementById("dialog-close-btn")
    .addEventListener("click", closeDialog);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDialog();
    }
  });
}