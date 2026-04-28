/*
let myDishes = [
    { name: "Pizza Margherita", description: "Tomatensoße, Mozzarella und Basilikum", price: 11.90 },
    { name: "Pizza Salami", description: "Tomatensoße, Mozzarella und würzige Salami", price: 13.90 },
    { name: "Cheeseburger", description: "Rindfleisch, Cheddar, Salat, Tomate und Haussoße", price: 15.90 },
    { name: "Veggie Burger", description: "Gemüsepatty, Salat, Tomate und vegane Mayo", price: 14.90 },
    { name: "Gemischter Salat", description: "Grüner Salat, Tomaten, Gurken, Hausdressing", price: 7.90 }
];
*/

let myDishes = [
    { 
        name: "Pizza Margherita", 
        description: "Tomatensoße, Mozzarella und frischer Basilikum", 
        price: 11.90,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=400" 
    },
    { 
        name: "Classic Cheeseburger", 
        description: "100% Rindfleisch, Cheddar, Salat und Haussauce", 
        price: 14.50,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" 
    },
    { 
        name: "Pizza Salami", 
        description: "Mit würziger Rindersalami und extra Käse", 
        price: 13.90,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400" 
    },
    { 
        name: "Crispy Chicken Burger", 
        description: "Paniertes Hähnchenfilet mit Mayo und Gurken", 
        price: 13.90,
        image: "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=400" 
    },
    { 
        name: "Insalata Mista", 
        description: "Gemischter Saisonsalat mit Balsamico-Dressing", 
        price: 8.50,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" 
    }
];


let basket = [];
let deliveryCost = 2.99;

function render() {
    let container = document.getElementById('menu-container');
    container.innerHTML = '';
    
    for (let i = 0; i < myDishes.length; i++) {
        container.innerHTML += getDishTemplate(i);
    }
    renderBasket();
}


function getDishTemplate(index) {
    let dish = myDishes[index];
    let formattedPrice = dish.price.toFixed(2).replace('.', ',');
    
    return `
        <div class="dish-card" onclick="addToBasket(${index})">
            <div class="dish-info">
                <h3>${dish.name}</h3>
                <p class="dish-description">${dish.description}</p>
                <p class="dish-price"><b>${formattedPrice} €</b></p>
            </div>
            <div class="dish-image-container">
                <img src="${dish.image}" alt="${dish.name}" class="dish-thumb">
                <button class="add-btn">+</button>
            </div>
        </div>
    `;
}


function addToBasket(index) {
    let dish = myDishes[index];
    let basketIndex = getBasketIndex(dish.name);

    if (basketIndex === -1) {
        basket.push({ name: dish.name, price: dish.price, amount: 1 });
    } else {
        basket[basketIndex].amount++;
    }
    renderBasket();
}

function getBasketIndex(dishName) {
    return basket.findIndex(item => item.name === dishName);
}

function renderBasket() {
    let container = document.getElementById('basket-items');
    container.innerHTML = '';

    if (basket.length === 0) {
        showEmptyBasket(container);
    } else {
        renderBasketItems(container);
    }
    calculateBasketSum();
}

function showEmptyBasket(container) {
    container.innerHTML = `<div class="empty-basket-message">Wähle leckere Gerichte aus.</div>`;
    document.getElementById('basket-calculation').classList.add('d-none');
    updateMobileBasketSum(0);
}

function renderBasketItems(container) {
    for (let i = 0; i < basket.length; i++) {
        container.innerHTML += getBasketItemTemplate(i);
    }
    document.getElementById('basket-calculation').classList.remove('d-none');
}

function getBasketItemTemplate(index) {
    let item = basket[index];
    let itemTotal = (item.price * item.amount).toFixed(2).replace('.', ',');
    
    return `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; align-items:center;">
            <span><b>${item.amount}x</b> ${item.name}</span>
            <div style="display:flex; gap:10px; align-items:center;">
                <span>${itemTotal} €</span>
                <button onclick="decreaseQuantity(${index})">-</button>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>
        </div>
    `;
}

function increaseQuantity(index) {
    basket[index].amount++;
    renderBasket();
}

function decreaseQuantity(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--;
    } else {
        basket.splice(index, 1);
    }
    renderBasket();
}

function calculateBasketSum() {
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].amount;
    }
    updateSumTexts(subtotal);
}

function updateSumTexts(subtotal) {
    let total = subtotal > 0 ? subtotal + deliveryCost : 0;
    
    document.getElementById('subtotal').innerHTML = `${subtotal.toFixed(2).replace('.', ',')} €`;
    document.getElementById('total-price').innerHTML = `${total.toFixed(2).replace('.', ',')} €`;
    updateMobileBasketSum(total);
}

function updateMobileBasketSum(total) {
    document.getElementById('mobile-total').innerHTML = `${total.toFixed(2).replace('.', ',')} €`;
}

function placeOrder() {
    if (basket.length > 0) {
        basket = [];
        renderBasket();
        showOrderSuccessMessage();
    }
}

function showOrderSuccessMessage() {
    let container = document.getElementById('basket-items');
    container.innerHTML = `
        <div style="text-align:center; padding: 20px; color: green;">
            <h3>Vielen Dank!</h3>
            <p>Deine Testbestellung wurde erfolgreich entgegengenommen.</p>
        </div>
    `;
    document.getElementById('basket-calculation').classList.add('d-none');
}

function openMobileBasket() {
    let basketContainer = document.getElementById('basket-container');
    basketContainer.style.display = 'flex';
    basketContainer.style.position = 'fixed';
    basketContainer.style.top = '0';
    basketContainer.style.left = '0';
    basketContainer.style.width = '100%';
    basketContainer.style.height = '100vh';
    basketContainer.style.zIndex = '999';
}