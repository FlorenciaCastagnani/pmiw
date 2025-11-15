let vidas = []
  let sasara = []
  let peces = []
  let fondo
  let pantallas = []
  let ichisama;
let cronometro;

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

    cronometro = loadImage('/assets/reloj1.png')

    sasara[1] = loadImage('/assets/sasara1.png')
    sasara[2] = loadImage('/assets/sasara2.png')
    sasara[3] = loadImage('/assets/sasara3.png')

    peces[1] = loadImage('/assets/pez.png')
    peces[2] = loadImage('/assets/salvacion.png')

    pantallas[1] = loadImage('/assets/ganar.png')
    pantallas[2] = loadImage('/assets/perder.png')
    pantallas[3] = loadImage('/assets/inicio.png')
    pantallas[4] = loadImage('/assets/tutorial.png')
    pantallas[5] = loadImage('/assets/creditos.png')

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
  console.log( mouseX + "/" + mouseY);
  background( 255 );

  if ((e === 3 || e === 4) && musicaIniciada) {
    ichisama.stop();
    musicaIniciada = false;
  }




  image(fondo, 0, 0);





  if (e == 0) {
    image(pantallas[3], 0, 0);
  }



  if (e == 1) {
    image(pantallas[4], 0, 0);
  }



  if (e == 2) {

    if (!cronometroIniciado) {
      tiempo = millis();
      cronometroIniciado = true;
    }
    let tiempoTranscurrido = millis() - tiempo;
    let tiempoRestante = segundos - tiempoTranscurrido;
    let segundosRestantes = floor(tiempoRestante / 1000);

    if (segundosRestantes < 0) {
      segundosRestantes = 0;
    }

    image(cronometro, 0, 0);

    fill(255, 255, 255);

    //strokeWeight(10);
    //stroke(10);
    textSize(20);

    if (segundosRestantes <= 10) {
      fill(255, 0, 0); // ROJO cuando quedan 10 segundos o menos
    } else {
      fill(255, 255, 255); // BLANCO normal
    }

    //text( int( millis() ) + " MILISEGUNDOS", 15, 10 );           //milisegundos
    //text( int( millis() / 1000 ), 105, 60 );
    text(segundosRestantes, 105, 60);

    videojuego.dibujar();
    image(vidas[videojuego.vidasActuales], 0, 0);


    if (videojuego.vidasActuales <= 0) {
      e = 3;
    }

    if (millis() - tiempo >= segundos) {
      e = 4;
    }
  }






  if (e == 3) {
    image(pantallas[2], 0, 0);
  }




  if (e == 4) {
    image(pantallas[1], 0, 0);
  }
}


function mousePressed() {


  if (!musicaIniciada && e === 0) {
    ichisama.loop();
    musicaIniciada = true;
  }

  if ( e == 2) {
    e=2
      return;
  }

  e++
  if ( e == 3){
  e = 0;
  }
    if ( e==4) {
    e=0;
  }
}
//---------------BOTON DE REINICIO






//  if (e === 4) {
//    e = 4;
//    return;
//  }
//  if (e === 3) {
//    e = 3;
//    return;
//  }
//}


function keyPressed() {

  videojuego.teclear();
}
