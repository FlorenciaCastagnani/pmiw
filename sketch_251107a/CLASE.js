class Sasara{
  
  
  constructor() {
    //aqui declaro e inicializo las PROPIEDADES
    this.y = 267;
    this.x = 387;
  }

  //los METODOS son las acciones de mi clase: las funciones

  correr() {  //"actualizar" sus propiedades
    //this.y ++;  //incrementa de a 1

    ////this.x = random( 640 );
    ////this.x = 640 * noise( 0.5 );

    ////variable = tamPantalla * noise( numeroIncrementalNormalizado );  //un numero que incremente constantemente entre 0 y 1    
    //this.x = 640 * noise(0.005 * frameCount);
    //this.y = 480 * noise(0.005 * frameCount + 10000);
    

    ////console.log( this.x );
  }

  mostrar() {  //"dibujar" en la pantalla
  let xLimitada = constrain(mouseX, 0, 640 - chibi.width);
    image(chibi, xLimitada, this.y);
  }
}
