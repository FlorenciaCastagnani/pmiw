let vidas = []
  let sasara = []
  let peces = []
  let fondo
  let pantallas = []
  let ichisama;
  
  let efectos = []

let musicaIniciada = false;
let cambio = false;

//  let e;
//let tiempo = 0;
//let segundos = 60000;

let e;
let tiempo = 0;
let segundos = 60000; // 1 minuto
let cronometroIniciado = false; // Nueva variable de control

let videojuego;

function preload() {

  vidas[0] = loadImage('/assets/vidas0.png')
    vidas[1] = loadImage('/assets/vidas1.png')
    vidas[2] = loadImage('/assets/vidas2.png')
    vidas[3] = loadImage('/assets/vidas3.png')

    sasara[1] = loadImage('/assets/sasara1.png')
    sasara[2] = loadImage('/assets/sasara2.png')
    sasara[3] = loadImage('/assets/sasara3.png')

    peces[1] = loadImage('/assets/pez.png')
    peces[2] = loadImage('/assets/salvacion.png')

    pantallas[1] = loadImage('/assets/ganar.png')
    pantallas[2] = loadImage('/assets/perder.png')
    pantallas[3] = loadImage('/assets/inicio.png')
    
    efectos[1] = loadSound('assets/grito.mp3');
    efectos[2] = loadSound('assets/sasaraSalvacion.mp3');
    ichisama = loadSound('assets/ichisama.mp3');
    

    fondo = loadImage('/assets/fondo1.png')

    e = 0;
  //tiempo = millis();
}


function setup() {
  createCanvas(640, 480 );


  videojuego = new Sistema();
}

function draw() {
  background( 255 );

if ((e === 2 || e === 3) && musicaIniciada) {
    ichisama.stop();
    musicaIniciada = false;  // Para poder reiniciar después si quieres
}
  
  image(fondo, 0, 0);

  if (e == 0) {
    image(pantallas[3],0,0);
  }

  //if ( e == 1) {
  //  fill(255,255,255);
  //  text( int( millis() ) + " MILISEGUNDOS", 100, 100 );           //milisegundos
  //text( int( millis() / 1000 ) + " SEGUNDOS", 100, 150 );
    
  //  videojuego.dibujar();
  //} else if ( millis() - tiempo >= segundos && e < 1) {
  //  e = 4;
  //  tiempo = millis();
  //}
  
   if (e == 1) {
    // Iniciar el cronómetro la primera vez que e sea 1
    if (!cronometroIniciado) {
      tiempo = millis();
      cronometroIniciado = true;
      
    }
      fill(255,255,255);
   text( int( millis() ) + " MILISEGUNDOS", 100, 100 );           //milisegundos
  text( int( millis() / 1000 ) + " SEGUNDOS", 100, 150 );
    videojuego.dibujar();
    
    // Verificar si pasó 1 minuto
    if (millis() - tiempo >= segundos) {
      e = 3; // Cambiar a pantalla 3 (perder)
    }
  }

  

  if (e == 2) {
    image(pantallas[2], 0, 0);
  }

  if (e == 3) {
    image(pantallas[1], 0, 0);
  }
}


function mousePressed() {


if (!musicaIniciada && e === 1) {
    ichisama.loop();
    musicaIniciada = true;
 }
 e++

    if (e === 4) {
    e = 4;
    return;
  }
  if (e === 3) {
    e = 3;
    return;
  }
}


function keyPressed() {

  videojuego.teclear();
}
