let inicio;
let flecha;
let sasara = [];
let dial;
let jakurai = [];
let daisu = [];
let ichijiku;
let fondo;

let e;
let indice;


function preload() {
  inicio = loadImage('/assets/key_resized.png')

    ichijiku = loadImage('/assets/ichijiku1.webp')

    fondo = loadImage('/assets/fondo.webp')

    sasara[1] = loadImage('/assets/sasara2.webp')
    sasara[2] = loadImage('/assets/jakuraiysasara1.webp')
    sasara[3] = loadImage('/assets/sasaraenojado.webp')

    jakurai[1] = loadImage('/assets/jakurai1.webp')
    jakurai[2] = loadImage('/assets/jakuraideterminado.webp')


    daisu[1] = loadImage('/assets/dicefeliz.webp')
    daisu[2] = loadImage('/assets/diceenojado.webp')


    dial = loadStrings( '/assets/dialogos4.txt');
  indice = 0;
  e = 0;  // "pantalla_01"
  flecha = loadImage('/assets/flecha2.png')
}


function setup() {
  createCanvas(640, 480);
  background(255);
  console.log( dial );
  textSize(15);
}


function draw() {
  console.log( mouseX + "/" + mouseY);


  //----------------------------------------- PANTALLA INICIO
  if ( e== 0) {
    image( ichijiku, 0, 0 );
    fill(0, 0, 0, 150);
    strokeWeight(2);
    stroke(255, 255, 255, 255)
    text(dial[indice], 80, 330, 500);
  } else if ( e == 1) { //---------------------- 1
    image( ichijiku, 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 2) { //-----------------------2

    image( jakurai[1], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 3) { //-----------------------3

    image( sasara[1], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 4) { //-----------------------4

    image( jakurai[1], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 5) { //-----------------------5 inicia competencia

    image( fondo, 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 6) { //-----------------------6

    image( jakurai[1], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 7) { //-----------------------7

    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 8) { //-----------------------8 ELECCION

    image( fondo, 0, 0 );
    text(dial[indice], 80, 330, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);

  } else if ( e == 9) { //-----------------------9
    image( sasara[1], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 10) { //-----------------------10
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 11) { //-----------------------11
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 12) { //-----------------------12
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 13) { //-----------------------13
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 14) { //-----------------------14
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 15) { //-----------------------15
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 16) { //-----------------------16
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 17) { //-----------------------17
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 18) { //-----------------------18
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 19) { //-----------------------19
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 20) { //-----------------------20
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 21) { //-----------------------21
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 22) { //-----------------------22
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 23) { //-----------------------23
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 24) { //-----------------------24
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 25) { //-----------------------25
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 26) { //-----------------------26
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 27) { //-----------------------27
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 28) { //-----------------------28
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 29) { //-----------------------29
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 30) { //-----------------------30
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 31) { //-----------------------31
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 32) { //-----------------------32
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 33) { //-----------------------33
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 34) { //-----------------------34
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 35) { //-----------------------35
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 36) { //-----------------------36
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 37) { //-----------------------37
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 38) { //-----------------------38
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 39) { //-----------------------39
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 40) { //-----------------------40
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 41) { //-----------------------41
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 42) { //-----------------------42
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 43) { //-----------------------43
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 44) { //-----------------------44
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 45) { //-----------------------45
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 46) { //-----------------------46
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 47) { //-----------------------47
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 48) { //-----------------------48
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 49) { //-----------------------49
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 50) { //-----------------------50
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 51) { //-----------------------51
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 52) { //-----------------------52
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 53) { //-----------------------53
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 54) { //-----------------------54
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 55) { //-----------------------55
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 56) { //-----------------------56
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 57) { //-----------------------57
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 58) { //-----------------------58
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 59) { //-----------------------59
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  } else if ( e == 60) { //-----------------------60
    image( sasara[3], 0, 0 );
    text(dial[indice], 80, 330, 500);
  }
}

function mousePressed() {
  e++;
  indice++;
  if ( indice == 60 ) {
    indice = 0;
  }
  if ( e == 60 ) {
    e = 0;
  }
}

function keyPressed() {
  e--;
  indice--;
}
