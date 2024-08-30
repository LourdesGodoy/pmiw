///////VIDEO: https://youtu.be/tCNJJD_ykPkv

let colorcito, colorcito2;
let cursorMovido = false;
let cursorInicialX, cursorInicialY;

function preload() {
  F_42 = loadImage ('data/F_42.png');
}

function setup() {
  createCanvas(800, 400);
  
  colorcito = color(255);
  colorcito2 = color(0);
}

function draw() {
  background(255);

  image (F_42, 0, 0, 400, 400);
  
  if (mouseX != cursorInicialX || mouseY != cursorInicialY) {
    cursorMovido = true;
  }

  dibujarObra( 20 );
}

function mousePressed() {
  coloresR();
}

function keyPressed () {
  if (key == 'r' || key == 'R');
  {
    reiniciarObra();
  }
}
