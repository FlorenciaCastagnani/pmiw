class salvacion {

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
    image(salvacio, this.x ,this.y );
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
  }
