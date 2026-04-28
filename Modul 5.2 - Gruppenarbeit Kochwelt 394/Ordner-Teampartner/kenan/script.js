let amount1 = [250];
let amount2 = [200];
let amount3 = [100];
let amount4 = [150];
let amount5 = [1];
let amount6 = [2];
let amount7 = [2];
let amount8 = [2];
let amount9 = [1];
let amount10 = [100];
let amount11 = [1];

function AddPortion() {
  let valuePortion = document.getElementById("valuePortion").value;
  let needed = document.getElementById("needed");

  let recipe1 = document.getElementById("recipe1");
  let recipe2 = document.getElementById("recipe2");
  let recipe3 = document.getElementById("recipe3");
  let recipe4 = document.getElementById("recipe4");
  let recipe5 = document.getElementById("recipe5");
  let recipe6 = document.getElementById("recipe6");
  let recipe7 = document.getElementById("recipe7");
  let recipe8 = document.getElementById("recipe8");
  let recipe9 = document.getElementById("recipe9");
  let recipe10 = document.getElementById("recipe10");
  let recipe11 = document.getElementById("recipe11");

  if (valuePortion.length <= 0) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
  } else if (parseInt(valuePortion) < 1 || isNaN(valuePortion)) {
    needed.innerHTML = "Die Menge muss mindestens 1 Portion enthalten!";
    recipe1.innerHTML = "";
    recipe2.innerHTML = "";
    recipe3.innerHTML = "";
    recipe4.innerHTML = "";
    recipe5.innerHTML = "";
    recipe6.innerHTML = "";
    recipe7.innerHTML = "";
    recipe8.innerHTML = "";
    recipe9.innerHTML = "";
    recipe10.innerHTML = "";
    recipe11.innerHTML = "";
  } else {
    needed.innerHTML = "";

    for (let index = 0; index < amount1.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount1[index]);
      recipe1.innerHTML = `${result} g ` + `&nbsp`;
    }

    for (let index = 0; index < amount2.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount2[index]);
      recipe2.innerHTML = `${result} g` + `&nbsp`;
    }

    for (let index = 0; index < amount3.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount3[index]);
      recipe3.innerHTML = `${result} g` + `&nbsp`;
    }

    for (let index = 0; index < amount4.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount4[index]);
      recipe4.innerHTML = `${result} ml` + `&nbsp`;
    }

    for (let index = 0; index < amount5.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount5[index]);
      recipe5.innerHTML = `${result} Stk.` + `&nbsp`;
    }

    for (let index = 0; index < amount6.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount6[index]);
      recipe6.innerHTML = `${result} Stk.` + `&nbsp`;
    }

    for (let index = 0; index < amount7.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount7[index]);
      recipe7.innerHTML = `${result} EL` + `&nbsp`;
    }

    for (let index = 0; index < amount8.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount8[index]);
      recipe8.innerHTML = `${result} EL` + `&nbsp`;
    }

    for (let index = 0; index < amount9.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount9[index]);
      recipe9.innerHTML = `${result} kleine(r) EL` + `&nbsp`;
    }

    for (let index = 0; index < amount10.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount10[index]);
      recipe10.innerHTML = `${result} g` + `&nbsp`;
    }

    for (let index = 0; index < amount11.length; index++) {
      let result = parseInt(valuePortion) * parseInt(amount11[index]);
      recipe11.innerHTML = `${result} kleine(r) EL` + `&nbsp`;
    } 
  }

}
