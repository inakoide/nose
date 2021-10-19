function setup() {
  var cambas = createCanvas(640, 480);
  //cambas.parent('lienzo');
  background(255,200,267);
}

function draw() {
  fill (random(255),random(255),random(255) );
  textSize(10);
  text("poto",mouseX,mouseY);

}