let dishes = [
  { 
    name: "Veggie mushroom black burger", 
    description: "Mixed green salad, Tomatoes, Edamame, Mushrooms", 
    price: 16.90 
  },
  { 
    name: "Pizza Margherita", 
    description: "Tomato Sauce, Mozzarella", 
    price: 11.90 
  },
  // Füge hier mindestens 3 weitere Gerichte ein, um die Checkliste zu erfüllen
];

let basket = []; // Hier speichern wir die hinzugefügten Gerichte


function renderDishes() {
  let contentRef = document.getElementById('menu-container');
  contentRef.innerHTML = ''; 

  for (let index = 0; index < dishes.length; index++) {
    let dish = dishes[index];
    contentRef.innerHTML += getDishTemplate(dish, index);
  }
}

// 1 Leerzeile Abstand
function getDishTemplate(dish, index) {
  return `
    <div class="dish-card">
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <b>${dish.price}€</b>
      <button onclick="addToBasket(${index})">+</button>
    </div>
  `;
}