
// Operatoren
let myCondition = true;
let myCondition2 = false;

// not Operator
myCondition = !myCondition      // NOT-Operator


// Oder-Operator wenn 1 true, dann ergebnis true
myCondition =  true || false || false;    // OR-Operator

// Und-Operator
myCondition = true && false;    // AND-Operator

// Consolen abfrage
console.log(myCondition);



/*****************************************************************/
// Abfragen / Vergleiche

myCondition = 45 == 45;     // == testet ob exakt gleich, ohne Typ  

myCondition = 45 === 45;     // === testet ob exakt gleich, mit Typ  --> true
myCondition = 45 === "45";  // === testet ob exakt gleich, mit Typ  --> false



myCondition = 45 > 123;     // größer Vergleich
myCondition = 45 < 123;     // kleiner Vergleich

myCondition = 45 <= 120;    // kleinergleich Abfrage, kleiner oder gleich
myCondition = 45 >= 120;    // größergleich Abfrage, größer oder gleich

myCondition = 45 != 120;    // = testet ob exakt gleich, ohne Typ
myCondition = 45 != "47";   // = testet ob exakt gleich, ohne Typ
myCondition = 45 !== 47;    //  == testet ob exakt gleich, mit Typ  --> true
myCondition = 45 !== "47";  // == testet ob exakt gleich, mit Typ  --> true







let myIfCondition = false;
let mysecondIfCondition = true;

// Wenn dann Abfrage
if(myIfCondition) {                              // Wenn
    console.log("hello world! if teil");
} else if(!myIfCondition) {                      // Wenn-Dann
    console.log("hello world! else if teil");
} else {                                         // Dann
    console.log("hello world! else teil");
}




