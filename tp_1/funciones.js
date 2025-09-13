
function cuadrados( x,  y) {
  push();
  translate(dhc, 0);
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {

      let xc = i * tamCuad;
      let yf = j * tamCuad;
      
      fill(0, 0, 99);
      noStroke();
      
      rect(x+xc+23, y+yf, 27, 27);
      fill(0);
      quad(xc, yf+24, xc+24, yf, xc+24, yf+25, xc, yf+tamCuad);
      quad(xc, yf+tamCuad, xc+24, yf+25, xc+tamCuad, yf+25, xc+26, yf+tamCuad);
    }
  }
  pop();
}
