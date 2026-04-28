function calculatePortion(){
  
    document.getElementById('Schweineschnitzel').innerHTML = (150) * +inputPortionen.value;
    document.getElementById('Kräutersalz und Pfeffer').innerHTML = (50) * +inputPortionen.value;
    document.getElementById('Mehl').innerHTML = (1) * +inputPortionen.value;
    document.getElementById('Semmelbrösel').innerHTML = (0.5) * +inputPortionen.value;
    document.getElementById('Salz und Pfeffer').innerHTML = (0.5) * +inputPortionen.value;
    document.getElementById('Rapsöl').innerHTML = (100) * +inputPortionen.value;
    document.getElementById('Butter').innerHTML = (1) * +inputPortionen.value;
    document.getElementById('Kartoffel(n)').innerHTML = (1) * +inputPortionen.value;
    document.getElementById('Kräutersalz und Pommesgewürz').innerHTML = (2) * +inputPortionen.value;
    document.getElementById('Öl zum frittieren').innerHTML = (0.5) * +inputPortionen.value;
    document.getElementById('Blattsalat').innerHTML = (0.5) * +inputPortionen.value;
    document.getElementById('Zitrone').innerHTML = (0.25) * +inputPortionen.value;
    document.getElementById('Olivenöl').innerHTML = (0.25) * +inputPortionen.value;
    document.getElementById('Ahornsirup').innerHTML = (1) * +inputPortionen.value;
    document.getElementById('Schnittlauch').innerHTML = (0.25) * +inputPortionen.value;
    document.getElementById('Zitronenspalten(n) zum Garnieren').innerHTML = (0.25) * +inputPortionen.value;
  
  }
  
  function toggleButtonState() {
    let inputValue = document.getElementById('inputPortionen').value;
    let button = document.getElementById('myButton');
    let containsMinus = inputValue.includes('-');
    let exceedsLimit = parseFloat(inputValue) > 8;
    let isZero = parseFloat(inputValue) === 0;
    
    if (containsMinus) {
      document.getElementById('infoMessage').style.display = 'block';
    } else if (isZero) {
        document.getElementById('infoMessage0').style.display = 'block';
    } else {
      document.getElementById('infoMessage').style.display = 'none';
      document.getElementById('infoMessage0').style.display = 'none';
  
    }
    
    if (exceedsLimit) {
      document.getElementById('limitMessage').style.display = 'block';
  
    } else {
      document.getElementById('limitMessage').style.display = 'none';
    }
    if (containsMinus || exceedsLimit || isZero || inputValue.trim() === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }
  document.getElementById('inputPortionen').addEventListener('input', toggleButtonState);
  
  toggleButtonState();