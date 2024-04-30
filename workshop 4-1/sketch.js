let myPicker;
let img = [];
let sculpture;

function preload(){
  sculpture = loadImage("images/david.jpeg");
}

function setup() {
  createCanvas(400, 400);
  img.push(sculpture);

  // Create a color picker and set its position.
  myPicker = createColorPicker('navy');
  myPicker.position(150, 280);

  describe('A blue square with a color picker beneath it. The square changes color when the user picks a new color.');
}

function draw() {
  // Use the color picker to paint the background.
  let c = myPicker.color();
  background(c);

  let r = random(img);
  image(r, 68, 50)


  
}
