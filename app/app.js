
const dicesOn = ()=>{
  document.getElementById('dicesId').className = 'd-none';
  document.getElementById('cubeOne').className = 'cube';
  document.getElementById('cubeTwo').className = 'cube';
  document.getElementById('bgsectt').classList.replace('sectionBg', 'd-none');
  document.getElementById('vasoSect').classList.remove('d-none');
  document.getElementById('sound').play()
  document.getElementById('vasoSect').classList.add('vasoAnimate');
  const total = document.getElementById('resultSum');
  total.lastChild === null ? '' : total.removeChild(total.lastChild);
  let dado1, dado2, suma, stringCube = '' , stringCubetwo = '';
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  suma = dado1 + dado2;

  stringCube = dado1===1 ? 'one' : stringCube;
  stringCube = dado1===2 ? 'two' : stringCube;
  stringCube = dado1===3 ? 'tree' : stringCube;
  stringCube = dado1===4 ? 'for' : stringCube;
  stringCube = dado1===5 ? 'five' : stringCube;
  stringCube = dado1===6 ? 'six' : stringCube;

  stringCubetwo = dado2===1 ? 'one' : stringCubetwo;
  stringCubetwo = dado2===2 ? 'two' : stringCubetwo;
  stringCubetwo = dado2===3 ? 'tree' : stringCubetwo;
  stringCubetwo = dado2===4 ? 'for' : stringCubetwo;
  stringCubetwo = dado2===5 ? 'five' : stringCubetwo;
  stringCubetwo = dado2===6 ? 'six' : stringCubetwo;
  
  setTimeout(()=>{
    document.getElementById('cubeOne').classList.add(`result-${stringCube}`);
    document.getElementById('cubeTwo').classList.add(`result-${stringCubetwo}`);
    document.getElementById('dicesId').classList.replace('d-none', 'dices');
  },[1900]);
  setTimeout(()=>{
    document.getElementById('resultSum').innerHTML = `<h2>Total: ${suma}</h2>`;
  },[3500]);
  setTimeout(()=>{
    document.getElementById('vasoSect').classList.remove('vasoAnimate');
  },[3000]);
}