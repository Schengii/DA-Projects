<<<<<<< HEAD
// let discount = 50;
// let price = 500;

/* Umständlich
console.log((price - discount) * 1.19);

price = 400;
*/

// Ausgabe in der Konsole:
logCalculatePrice(50, 500);
logCalculatePrice(50, 300);


// Funktionsdefinition
function logCalculatePrice() {
    console.log((price - discount) * 1.19);     // ohne Parameter in () Klammern
}


function logCalculatePrice(discount, price) {   // mit Parameter in () Klammern
    console.log((price - discount) * 1.19);
}


console.log(logCalculatePrice(50, 300));

function logCalculatePrice(discount, price) {   // mit Parameter in () Klammern
    let value = (price - discount) * 1.19;
    return value;                                     // Rückgabe, nach return abbruch
}



=======
// let discount = 50;
// let price = 500;

/* Umständlich
console.log((price - discount) * 1.19);

price = 400;
*/

// Ausgabe in der Konsole:
logCalculatePrice(50, 500);
logCalculatePrice(50, 300);


// Funktionsdefinition
function logCalculatePrice() {
    console.log((price - discount) * 1.19);     // ohne Parameter in () Klammern
}


function logCalculatePrice(discount, price) {   // mit Parameter in () Klammern
    console.log((price - discount) * 1.19);
}


console.log(logCalculatePrice(50, 300));

function logCalculatePrice(discount, price) {   // mit Parameter in () Klammern
    let value = (price - discount) * 1.19;
    return value;                                     // Rückgabe, nach return abbruch
}



>>>>>>> origin/main
