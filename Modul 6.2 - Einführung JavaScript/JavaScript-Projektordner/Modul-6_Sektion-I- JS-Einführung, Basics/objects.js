// Objekt erstellen
let myFancyObject = {
    age : 22, 
    height : 160,
    name : "Max",
    logNumber : function () {
        console.log(123);
        return 123456;
    }
}

// Konsolenaufruf
console.log(myFancyObject.age);
console.log(myFancyObject.logNumber());
console.log(myFancyObject.height);

console.log(myFancyObject["age"]);


// falsche eingabe
let name = "Max";
name.age
