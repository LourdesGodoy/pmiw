function esPar( numero ) {
  return(numero %2==0);
}

function dibujarObra( cantidad ) {
  let modulo = width/cantidad;

  for ( let i = 10; i < cantidad; i++ ) {
    for ( let G = 0; G < cantidad; G++ ) {
      if (esPar(i+G)) {
        fill( colorcito2 );
      } else {
        fill( colorcito );
      }

      let tamaño;
      if (cursorMovido) {
        let distancia = dist(mouseX, mouseY, i * modulo + modulo / 2, G * modulo + modulo / 2);
        tamaño = map( distancia, 0, 600, modulo/2, modulo );
      } else {
        tamaño = modulo;
      }

      rect(i * modulo + modulo / 2 - tamaño / 2, G * modulo + modulo / 2 - tamaño / 2, tamaño, tamaño);
      if (esPar(i + G)) {
        fill(colorcito);
      } else {
        fill(colorcito2);
      }
      circle(i * modulo + modulo / 2, G * modulo + modulo / 2, tamaño / 3);
    }
  }
}

function coloresR () {
  colorcito = color (random(255), random(255), random(255));
  colorcito2 = color (random(255), random(255), random(255));
}

function reiniciarObra () {
  mouseX = 0;
  mouseY = 0;
  colorcito=255;
  colorcito2=0;
  cursorMovido = false;
  cursorInicialX = mouseX;
  cursorInicialY = mouseY;
}
