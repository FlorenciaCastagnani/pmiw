// video explicativo
 //https://youtu.be/eqJZTGRXKbs

//Audio del video mejorado
 //https://youtu.be/YwwfVA9UnVo

let dhc = 400;
let cant = 8;
let tamCuad = 50;

let optica

let mostrarColor = false;

  function preload() {
  optica = loadImage ("assets/M3.jpeg");
}

function setup() {
  createCanvas(800, 400);


  colorMode(HSB, 360, 100, 100, 100);
  background(0, 0, 99);

  optica.resize( 0, 0);
}


function draw() {
  background(0, 0, 69);

  image( optica, 0, 0);



  console.log( mouseX + "/" + mouseY);

  stroke(5);
  fill(0);
  line(dhc, dhc, dhc, 0);

  if (mostrarColor) {
    colorA();
  } else {
    cuadrados(0, 0);
  }

}

function mouseReleased() {
  if (mitad()) {
    mostrarColor = true;
  } else {
    mostrarColor = false;
  }
}

function keyReleased() {
  if ( key == ' ' )
    mostrarColor = false;
}
