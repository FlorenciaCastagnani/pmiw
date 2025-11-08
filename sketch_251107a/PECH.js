// Define la clase
class pe {
  constructor() {
    this.x = 640;
    this.y = -100;
    this.velocidad = 2; // Velocidad de caída
  }

  // Método para actualizar la posición
  actualizar() {
    this.y += this.velocidad;
  }

  // Método para mostrar el objeto
  dibujar() {
    image(pez, this.x, this.y); // Dibuja un círculo en la posición actual
  }
}
