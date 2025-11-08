let chibi;
let fondo;
let pez;
let peces = new pe();
let grillo = new Sasara();

function preload() {
  chibi = loadImage('/assets/Schibi1.png')
    fondo = loadImage('/assets/fondo.png')
    pez = loadImage('/assets/pz.png')
}

function setup() {
  createCanvas(640, 480);
  background(255);
  textSize(15);
}


function draw() {
  image(fondo, 0, 0);
  //if (mouseX > 0 && mouseX < 640 && mouseY > 0 && mouseY < 480) {
      grillo.correr();
      grillo.mostrar();
      peces.dibujar();
      peces.actualizar();
      //peces.reciclar();
  
}

function mouseDragged() {
  if ( mouseX > 620 ) {  //zona cuadrada c
    //aplico mis variables a mi lapiz (line)
    grillo.correr();
    grillo.mostrar();
    //line( pmouseX, pmouseY, mouseX, mouseY );
  }
}
