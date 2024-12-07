import { ColorStack, chromatomeColors } from "./lib/colors.ts";
import { PatternFunctions } from "./lib/patterns.ts";

let colors: ColorStack = chromatomeColors();
let lines: MyLine[] = [];
let linesNum: number = 60;

const DIST: number = 10;
let MAX: number;
const GEN: number = 30;

let stColor: string;

let usableHeight = 500;
let usableWidth = 500;

export function setup(): void {
  const canvasElement = document.getElementById("lines-with-patterns");
  if (canvasElement) {
    usableHeight = parseInt(canvasElement.height, 10);
    usableWidth = parseInt(canvasElement.width, 10);
  }
  console.table({ usableHeight, usableWidth });
  console.log("canvasElement", canvasElement);
  createCanvas(usableWidth, usableHeight, canvasElement);
  angleMode(DEGREES);

  MAX = Math.min(usableHeight, usableWidth);
  stColor = colors.next();

  for (let i = 0; i < linesNum; i++) {
    lines.push(new MyLine());
  }
  frameRate(30);
  console.log("setup complete");
}

export function draw(): void {
  const bgColor = colors.background();
  background(bgColor);

  noStroke();
  for (let i = 0; i < lines.length; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(360 * i / lines.length);
    lines[i].display();
    pop();
  }

  fill(bgColor);
  stroke(stColor);
  strokeWeight(10);
  circle(width / 2, height / 2, MAX * 0.2);
}

class MyLine {
  objs: Obj[];
  speed: number;
  h: number;

  constructor() {
    this.objs = [];
    this.speed = random(3, 6);
    this.h = random(2, 10);
  }

  display(): void {
    if (random(100) < GEN) {
      if (
        (this.objs.length == 0) ||
        (this.objs.length > 0 && this.objs[this.objs.length - 1].hasDistance())
      ) {
        this.objs.push(new Obj(this.speed, this.h));
      }
    }

    for (let i = 0; i < this.objs.length; i++) {
      this.objs[i].move();
      this.objs[i].display();
    }

    if (this.objs.length > 0) {
      for (let j = this.objs.length - 1; j >= 0; j--) {
        if (this.objs[j].isFinished()) {
          this.objs.splice(j, 1);
        }
      }
    }
  }
}

class Obj {
  x: number;
  y: number;
  speed: number;
  w: number;
  h: number;
  c: p5.Color;
  pc: string[];
  patternFuncs: any;

  constructor(tmpSpeed: number, tmpH: number) {
    this.x = 0;
    this.y = 0;
    this.speed = tmpSpeed;
    this.w = random(10, 100);
    this.h = tmpH;
    this.c = colors.next();
    this.pc = colors.next(3);
    this.patternFuncs = new PatternFunctions(0.2);
  }

  move(): void {
    this.x -= this.speed;
  }

  isFinished(): boolean {
    return this.x < -MAX * 0.6 - this.w;
  }

  hasDistance(): boolean {
    return this.x < -(this.w + DIST);
  }

  display(): void {
    fill(this.c);
    pattern(this.patternFuncs.stripe(20));
    patternColors(this.pc);
    rectPattern(this.x, this.y, this.w, this.h, this.h / 2);
  }
}
