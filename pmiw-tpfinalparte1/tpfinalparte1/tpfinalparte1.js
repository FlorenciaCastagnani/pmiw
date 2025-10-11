let inicio;
let sasara = [];
let dial;
let jakurai = [];
let daisu = [];
let ichijiku;
let fondo;
let png = [];

let e;
let indice;

let velImagen = 2;
let x = 1;
let limiteX = 0;
let y = 1;
let limiteY = 0;
let degrade = 0;


function preload() {

    ichijiku = loadImage('/assets/ichijiku1.webp')

    fondo = loadImage('/assets/fondo.webp')

    sasara[1] = loadImage('/assets/sasara2.webp')
    sasara[2] = loadImage('/assets/jakuraiysasara1.webp')
    sasara[3] = loadImage('/assets/sasaraenojado.webp')

    jakurai[1] = loadImage('/assets/jakurai1.webp')
    jakurai[2] = loadImage('/assets/jakuraideterminado.jpg')


    daisu[1] = loadImage('/assets/dicefeliz.webp')
    daisu[2] = loadImage('/assets/diceenojado.webp')
    
     ramugen = loadImage('/assets/ramudagentaro.jpg')
     
     rosho = loadImage('/assets/rosho.jpg')
     
     png[1] = loadImage('/assets/fondo2.png')
     png[2] = loadImage('/assets/sasarasolo.png')
     png[3] = loadImage('/assets/jakuraisolo.png')
     png[4] = loadImage('/assets/dialogo2.png')
     png[5] = loadImage('/assets/dialogo3.png')
     png[5] = loadImage('/assets/diceenojado2.png')


     
     



  dial = loadStrings( '/assets/dialogos4.txt');
  indice = 0;
  e = 0;  // "pantalla_01"
  
  
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
    //fill(255);
    //strokeWeight(5);
    //stroke(0)
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 1) { //---------------------- 1
    //image( ichijiku, 0, 0 );
    
    
    //image( png[1], 0,0);
    //image( png[2], 0,0);
    //image( png[3], 0,0);
    //image( png[4], 0,0);
    
    if( y < limiteY){
      y += velImagen;
    }
    
    image( png[1], 0,0);
    image( png[2], 0,y);
    image( png[3], 0,0);
    image( png[4], 0,0);
    
    
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 2) { //-----------------------2

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 3) { //-----------------------3

    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 4) { //-----------------------4

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 5) { //-----------------------5 inicia competencia

    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 6) { //-----------------------6

    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 7) { //-----------------------7

    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  } else if ( e == 8) { //-----------------------8 ELECCION DE CARNADA

    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    //textAlign(CENTER);
    text("Carnada Normal", 275 , 162);
    text("Carnada Rara", 280 , 223);

  } else if ( e == 9) { //-----------------------9
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 10) { //-----------------------10
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 11) { //-----------------------11
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 12) { //-----------------------12
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 13) { //-----------------------13 ELECCION DE SI DEJAR A SASARA PESCAR O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Dejar pescar a Sasara", 275 , 162);
    text("Jakurai sigue pescando", 280 , 223);

  } else if ( e == 14) { //-----------------------14 
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 15) { //-----------------------15
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 16) { //-----------------------16
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 17) { //-----------------------17
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 18) { //-----------------------18
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 19) { //-----------------------19
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 20) { //-----------------------20
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 21) { //-----------------------21
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 22) { //-----------------------22
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 23) { //-----------------------23
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 24) { //-----------------------24
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 25) { //-----------------------25
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 26) { //-----------------------26 FINAL GANAN JAKURAI NO PUEDE CELEBRAR 
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
   
    
  } else if ( e == 27) { //-----------------------27
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 28) { //-----------------------28
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 29) { //-----------------------29
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 30) { //-----------------------30
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 31) { //-----------------------31 ELECCION DE SI DEJAR A JAKURAI PESCAR O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Dejar pescar a Jakurai", 275 , 162);
    text("Sasara tiene una corazonada", 280 , 223);
    
  } else if ( e == 32) { //-----------------------32
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 33) { //-----------------------33 
    image( jakurai[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 34) { //-----------------------34
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 35) { //-----------------------35 ELECCION DE SI PESCAR EN BURBUJAS O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    texto();
    text("Pescar en las burbujas", 275 , 162);
    text("No pescar en las burbujas", 280 , 223);
    
  } else if ( e == 36) { //-----------------------36
    image( jakurai[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 37) { //-----------------------37
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 38) { //-----------------------38
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 39) { //-----------------------39
    image( ramugen, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 40) { //-----------------------40
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 41) { //-----------------------41
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 42) { //-----------------------42
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 43) { //-----------------------43 ELECCION DE VER QUE PASA O NO
    image( fondo, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    fill(0, 0, 0, 150);
    boton(110, 140);
    boton(110, 200);
    
    text("Ver que pasa", 275 , 162);
    text("No ver que pasa", 280 , 223);
    
  } else if ( e == 44) { //-----------------------44
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 45) { //-----------------------45
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 46) { //-----------------------46
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 47) { //-----------------------47
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 48) { //-----------------------48
    image( daisu[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 49) { //-----------------------49
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 50) { //-----------------------50
    image( daisu[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 51) { //-----------------------51
    image( daisu[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 52) { //-----------------------52
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 53) { //-----------------------53
    image( sasara[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 54) { //-----------------------54
    image( rosho, 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 55) { //-----------------------55
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 56) { //-----------------------56
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 57) { //-----------------------57
    image( jakurai[1], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 58) { //-----------------------58
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 59) { //-----------------------59
    image( sasara[3], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
    
  } else if ( e == 60) { //-----------------------60
    image( sasara[2], 0, 0 );
    texto();
    text(dial[indice], 92, 325, 500);
  }
}

function mousePressed() {
  
  if (e === 8) {
    if (mouseX > 110 && mouseX < 565 && mouseY > 140 && mouseY < 190) {
      e = 9;
      indice = 9;
      return;
    }if (mouseX > 110 && mouseX < 565 && mouseY > 200 && mouseY < 250) {
      e = 27;
      indice = 27;
      return;
    }
    return;
  }
  
  if (e === 13) {
    if (mouseX > 110 && mouseX < 565 && mouseY > 140 && mouseY < 190) {
      e = 14;
      indice = 14;
      return;
    }if (mouseX > 110 && mouseX < 565 && mouseY > 200 && mouseY < 250) {
      e = 23;
      indice = 23;
      return;
    }
    return;
  }
  
  if (e === 31) {
    if (mouseX > 110 && mouseX < 565 && mouseY > 140 && mouseY < 190) {
      e = 32;
      indice = 32;
      return;
    }if (mouseX > 110 && mouseX < 565 && mouseY > 200 && mouseY < 250) {
      e = 40;
      indice = 40;
      return;
    }
    return;
  }
  
   if (e === 35) {
    if (mouseX > 110 && mouseX < 565 && mouseY > 140 && mouseY < 190) {
      e = 36;
      indice = 36;
      return;
    }if (mouseX > 110 && mouseX < 565 && mouseY > 200 && mouseY < 250) {
      e = 23;
      indice = 23;
      return;
    }
    return;
  }
  
  if (e === 43) {
    if (mouseX > 110 && mouseX < 565 && mouseY > 140 && mouseY < 190) {
      e = 44;
      indice = 44;
      return;
    }if (mouseX > 110 && mouseX < 565 && mouseY > 200 && mouseY < 250) {
      e = 53;
      indice = 53;
      return;
    }
    return;
  }
   

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
