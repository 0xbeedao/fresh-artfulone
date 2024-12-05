// @ts-check
// @ts-nocheck
// @ts-ignore
// @ts-expect-error
// @ts-mime: application/typescript

let colors: any;
let span: number;

function setup(): void {
  createCanvas(windowWidth, windowHeight);
  colors = chromatoneColors();
  background(colors.background());
  span = windowWidth / 6;
  frameRate(10);
}

let running: boolean = true;

function keyPressed(code: number): void {
  console.log("code", code);
  if (!running) {
    running = true;
    loop();
  } else {
    running = false;
    noLoop();
  }
}

function Lotus(
  x: number,
  y: number,
  span: number,
  petals: number,
  petalColor: string,
  innerColor: string,
  dotColor: string,
): void {
  push();
  translate(x, y);
  SawTooth(0, 0, span, petals, petalColor, 2);
  const seg = PI / petals;
  for (let i = 0; i < petals * 2; i++) {
    rotate(seg);
    fill(innerColor);
    circle(span / 4, 0, span / 12);
    triangle(span / 6, span / 16, span / 6, -span / 16, span / 3, 0);
    fill(dotColor);
    circle(span / 5, 0, span / 32);
  }
  noFill();
  strokeWeight(span / 48);
  stroke(petalColor);

  circle(0, 0, span / 3.1);
  pop();
}

function drawAll(color: string, span: number, r: number): void {
  let s1 = colors.next();
  let fg1 = colors.next();
  let fg2 = colors.next();
  //drawingContext.shadowBlur = 20;
  //drawingContext.shadowColor = colors.nextWithOpacity(0.8);
  Lotus(0, 0, span * 1.5, 6, s1, fg1, fg2);
  rotate(-r);
  s1 = colors.next();
  fg1 = colors.next();
  fg2 = colors.next();
  const s1b = colors.next();
  const fg1b = colors.next();
  const fg2b = colors.next();

  const seg = PI / 6;
  for (let i = 0; i < 12; i++) {
    (i > 0) && rotate(seg);
    if (i % 2 === 0) {
      Lotus(span * 2, 0, span * 0.66, 8, s1b, fg1b, fg2b);
      stroke(s1);
      strokeWeight(span / 32);
      line(span * 0.8, 0, span * 1.6, 0);
      noStroke();
    } else {
      Lotus(span * 1.5, 0, span, 8, s1, fg1, fg2);
    }
  }
}

function draw(): void {
  clear();
  colors.reset();
  translate(windowWidth / 2, windowHeight / 2);
  drawAll(color, span, frameCount % (40 * PI));
}

function SawTooth(
  x: number,
  y: number,
  span: number,
  teeth: number,
  fg: string,
  triangleWidth: number,
): void {
  const increment = (2 * PI) / teeth;
  noStroke();
  fill(fg);
  for (let i = 0; i < teeth; i++) {
    i > 0 && rotate(increment);
    triangle(0, -span / triangleWidth, 0, span / triangleWidth, span / 2, 0);
  }
}
