class pe {

  // constructor con las propiedades
  // es la funcion que se llama al crear el objeto
  constructor( velocidad ) {  //parametros de constructor
  //constructor(){
    // declaro las propiedades de la clase
    this.x = Math.floor( Math.random() * 800 );
    this.y = -100;
    this.vel = velocidad;
  }

  // metodos = funciones de la clase
  dibujar() {
    image(pez, this.x ,this.y );
  }

  actualizar() {
    //this.vel += 5;            //aumenta velocidad mientras cae
    this.y = this.y + this.vel;  //suma la velocidad a la pos Y
    this.y+= this.vel;
  }

  reciclar() {
    if ( this.y >= height+100 ) {
      this.x = int( random(width) );  //funciones nativas p5.js
      this.y = -100;
    }
  }
  
  //moverConMouse(){  //reemplaza a actualizar
  //  this.x = mouseX;
  //  this.y = mouseY;
  //}
  
  //colision( p ){  // p = un dato de tipo particula  
  //  //if( dist( this.x, this.y, p.x, p.y ) < 30 ){  //igual a los botones circulares
  //  if(grillo < 30){
  //    console.log("COLISIONO");
      
  //    //ej 1: cambia el tamanio
  //    this.diam = Math.floor( 10 + Math.random() * 40 );
      
  //    //ej 2: se resetea en y
  //    //this.y = -100;
      
  //    //ej 3: bajar la velocidad
  //    //this.vel = this.vel / 2;    //IMPORTANTE: la colision es un estado, uno debe convertirla a evento #ParaResolver
  //  }
  //}

  ////-----------------------------------------
  //// metodos get y set
  ////get x() {
  ////}
}
