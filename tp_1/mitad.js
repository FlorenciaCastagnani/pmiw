function mitad() {
  return mouseX > width/2;
}

function colorA() {

  push();
  translate(dhc, 0);

  for (let x = 0; x < cant; x++) {
    for (let y = 0; y < cant; y++) {

      let xc = x * tamCuad;
      let yf = y * tamCuad;

      if ( (x+y)%2==0 ) {
        fill(0, 0, 69);
      } else {
        fill(noise(x*2+y*3)*255, 255, 255 );
      }
      //busco la coordenada:
      let mod = 400/cant;
      let i = x*mod+mod/2;
      let j = y*mod+mod/2;


      ////tamaño en funcion de la distancia al mouse:
      let tam;
      tam = map ( dist(i, j, mouseX - dhc, mouseY), 0, 200, mod, 25 );
      //para limitar los maximos de tam:
      tam = constrain( tam, 25, mod);


      push();

      rect(xc, yf, mod, mod);
      fill(0);
      quad(xc, yf+24, xc+24, yf, xc+24, yf+25, xc, yf+tamCuad);
      quad(xc, yf+tamCuad, xc+24, yf+25, xc+tamCuad, yf+25, xc+26, yf+tamCuad);
      fill(0, 0, 99);
      noStroke();
      rect(xc+25, yf, tam, tam);
      pop();
    }
  }
  pop();
}
