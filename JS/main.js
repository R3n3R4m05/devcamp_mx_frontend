for(var i = 0; i < 21; i++){
  console.log(i);
}

var edad = 18;

function isLegal(edad){
  if(edad >= 18){
    console.log('legal');
  }else{
    console.log('ilegal');
  }
}

isLegal(edad);

var base;

function ac() {
  base = prompt("Ingrese un numero:");
  base = base * base;
  console.log(base);
}

ac();
