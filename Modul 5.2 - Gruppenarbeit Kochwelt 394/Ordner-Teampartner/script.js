let amount1 = [3];
let amount2 = [1];
let amount3 = [250];
let amount4 = [200];
let amount5 = [100];
let amount6 = [150];

function AddPortion(){
  let valuePortion = document.getElementById("valuePortion").value;
  let recipe1 = document.getElementById("recipe1");
  let recipe2 = document.getElementById("recipe2");
  let recipe3 = document.getElementById("recipe3");
  let recipe4 = document.getElementById("recipe4");
  let recipe5 = document.getElementById("recipe5");
  let recipe6 = document.getElementById("recipe6");

  for (let index = 0; index < amount1.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount1[index]);
    recipe1.innerHTML = `<li>${result}</li>`;
  }

  for (let index = 0; index < amount2.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount2[index]);
    recipe2.innerHTML = `<li>${result} </li>`;
  }

  for (let index = 0; index < amount3.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount3[index]);
    recipe3.innerHTML = `<li>${result}</li>`;
  }

  for (let index = 0; index < amount4.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount4[index]);
    recipe4.innerHTML = `<li>${result}</li>`;
  }

  for (let index = 0; index < amount5.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount5[index]);
    recipe5.innerHTML = `<li>${result}</li>`;
  }

  for (let index = 0; index < amount6.length; index++) {
    let result = parseInt(valuePortion) * parseInt(amount6[index]);
    recipe6.innerHTML = `<li>${result}</li>`;
  }
}
