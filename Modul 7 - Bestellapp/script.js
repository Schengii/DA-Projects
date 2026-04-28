let myDishes = [
    { name: "Pizza Margherita", description: "Tomatensoße, Mozzarella und Basilikum", price: 11.90 },
    { name: "Pizza Salami", description: "Tomatensoße, Mozzarella und würzige Salami", price: 13.90 },
    { name: "Cheeseburger", description: "Rindfleisch, Cheddar, Salat, Tomate und Haussoße", price: 15.90 },
    { name: "Veggie Burger", description: "Gemüsepatty, Salat, Tomate und vegane Mayo", price: 14.90 },
    { name: "Gemischter Salat", description: "Grüner Salat, Tomaten, Gurken, Hausdressing", price: 7.90 }
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
            <div>
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p><b>${formattedPrice} €</b></p>
            </div>
            <button class="add-btn">+</button>
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