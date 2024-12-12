import { chromatomeColors } from "./lib/colors.ts";

let colors: any;
let bg: string;
let fg: string;
let fg2: string;

let usableHeight = 500;
let usableWidth = 500;

export function setup(): void {
  const canvasElement = document.getElementById("sawtooth");
  if (canvasElement) {
    usableHeight = parseInt(canvasElement.height, 10);
    usableWidth = parseInt(canvasElement.width, 10);
  }
  console.table({ usableHeight, usableWidth });
  console.log("canvasElement");
  console.log(canvasElement);
  createCanvas(usableWidth, usableHeight, canvasElement);

  colors = chromatomeColors();
  background(colors.background());
}

function SawToothWithDoubleCircle(
  x: number,
  y: number,
  span: number,
  teeth: number,
  bg: string,
  fg: string,
  triangleWidth: number = 4,
): void {
  push();
  translate(x, y);
  SawTooth(0, 0, span, teeth, bg, fg, triangleWidth);
  noFill();
  stroke(bg);
  strokeWeight(span / 18);
  circle(0, 0, span * 0.7);
  noStroke();
  fill(bg);
  circle(0, 0, span * 0.55);
  pop();
}

function SawToothWithInnerCircle(
  x: number,
  y: number,
  span: number,
  teeth: number,
  bg: string,
  fg: string,
  fg2: string,
  triangleWidth: number = 8,
): void {
  push();
  translate(x, y);
  SawTooth(0, 0, span, teeth, bg, fg2, triangleWidth);
  noStroke();
  fill(bg);
  circle(0, 0, span * 0.25);
  pop();
}

function SawTooth(
  x: number,
  y: number,
  span: number,
  teeth: number,
  bg: string,
  fg: string,
  triangleWidth: number,
): void {
  const increment = 2 * PI / teeth;
  noStroke();
  fill(fg);
  for (let i = 0; i < teeth; i++) {
    i > 0 && rotate(increment);
    triangle(0, -span / triangleWidth, 0, span / triangleWidth, span / 2, 0);
  }
}

export function keyPressed() {
  if (key === "r") {
    console.log("redrawing");
    colors = chromatomeColors();
    background(colors.background());
    draw();
  }
}

export function draw(): void {
  noLoop();
  blendMode(BLEND);
  const span = Math.floor(usableHeight / 6);
  bg = colors.background();
  fg = colors.next();
  fg2 = colors.next();
  for (let y = 0; y < usableHeight / span + 1; y++) {
    for (let x = 0; x < usableWidth / span + 1; x++) {
      SawToothWithDoubleCircle(x * span, y * span, span, 30, bg, fg, 4);
      SawToothWithInnerCircle(
        x * span + span / 2,
        y * span + span / 2,
        span / 3,
        8,
        bg,
        fg,
        fg2,
        8,
      );
    }
  }
}
