var bird;
var pipes = [];
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;

function setup() {
  createCanvas(400, 600);
  mic = new p5.AudioIn();
  textSize(15);
  mic.start();
  bird = new Bird();
  pipes.push(new Pipe());
  sliderTop = createSlider(0, 1, 0.3, 0.01);
  sliderTop.position(30, 30);
  sliderBottom = createSlider(0, 1, 0.1, 0.01);
  sliderBottom.position(30, 80);
}

function draw() {
  background(0);

  var vol = mic.getLevel();

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      //console.log('hit');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  var thresholdTop = sliderTop.value();
  var thresholdBottom = sliderBottom.value();
  fill(255, 0, 0);
  text("Actuation Sound", 30, 20);
  fill(0, 0, 255);
  text("Background Noise", 30, 70);

  if (vol > thresholdTop && !clapping) {
    bird.up();
    clapping = true;
  }

  if (vol < thresholdBottom) {
    clapping = false;
  }

  fill(0, 255, 0)
  var y = map(vol, 0, 1, height, 0);
  rect(width-50, y, 50, height-y);

  var ty = map(thresholdTop, 0, 1, height, 0);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(width -50, ty, width, ty)

  var by = map(thresholdBottom, 0, 1, height, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  line(width -50, by, width, by)

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
 }
}
