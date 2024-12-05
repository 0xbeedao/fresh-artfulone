let colors: any;
let span: number;

// --- utils

interface RingStackOptions {
  background?: string;
  stroke?: string;
}

class RingStack {
  series: string[];
  options: RingStackOptions;
  index: number;

  constructor(series: string[], options: RingStackOptions = {}) {
    this.series = series;
    this.options = options;
    this.index = -1;
  }

  burn(index: number = -1): string {
    let burnIx = index === -1 ? this.index : index % this.series.length;
    if (burnIx === -1) {
      burnIx = 0;
    }
    const val = this.series[burnIx];
    const trimmed: string[] = [];
    this.series.forEach((c, ix) => {
      if (ix !== burnIx) {
        trimmed.push(c);
      }
    });
    this.series = trimmed;
    this.reset(index);
    return val;
  }

  burnRandom(): string {
    const index = Math.floor(Math.random() * this.series.length);
    return this.burn(index);
  }

  duplicate(): RingStack {
    return new RingStack(this.series);
  }

  dict(names: string[]): Map<string, string[]> {
    const ret: Map<string, string[]> = new Map();
    names.forEach((_, ix) => {
      const key: string = names[ix];
      const vals: string[] = key === "bg" ? [this.background()] : this.next();
      ret.set(key, vals);
    });
    return ret;
  }

  get(index?: number): string {
    if (index === undefined) {
      return this.get(this.index);
    }
    return this.series[index % this.series.length];
  }

  next(count: number = 1): string[] {
    this.reset(this.index + 1);
    if (count === 1) {
      return [this.get(this.index)];
    }
    const ret: string[] = [];
    for (let i = 0; i < count; i++) {
      ret.push(this.get(this.index + i));
    }
    return ret;
  }

  random(): string {
    const index = Math.floor(Math.random() * this.series.length);
    return this.series[index];
  }

  reset(ix: number = 0): this {
    this.index = ix % this.series.length;
    return this;
  }

  shuffle(): this {
    this.series = this.series.sort(() => Math.random() - 0.5);
    return this;
  }

  background(): string {
    if (!this.options.background) {
      this.options.background = this.burnRandom();
    }
    return this.options.background;
  }
}

class ColorStack extends RingStack {
  override duplicate(): ColorStack {
    return new ColorStack(this.series);
  }

  override background(): string {
    if (!this.options.background) {
      this.options.background = this.burnRandom();
    }
    return this.options.background;
  }

  stroke(): string {
    if (!this.options.stroke) {
      this.options.stroke = this.burnRandom();
    }
    return this.options.stroke;
  }

  nextWithOpacity(opacity: number): string {
    const val = this.next()[0];
    const r = val.slice(1, 3);
    const g = val.slice(3, 5);
    const b = val.slice(5, 7);
    const rgba = `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${
      parseInt(b, 16)
    }, ${opacity})`;
    return rgba;
  }
}

function chromatoneColors(pallette?: string): ColorStack {
  const chroma = chromotome.get(pallette);
  return new ColorStack(chroma.colors, chroma);
}

// --- drawing funcs

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

// --- main

let usableHeight = 500;
let usableWidth = 500;

function setup(): void {
  const square = min(windowHeight - 250, windowWidth - 100);
  usableHeight = square;
  usableWidth = square;
  createCanvas(usableWidth, usableHeight);
  colors = chromatoneColors();
  background(colors.background());
  const smaller: number = min(usableHeight, usableWidth);
  span = smaller / 4.25;
  const frameSpeed: number = Math.floor(Math.random() * 10) + 7;
  frameRate(frameSpeed);
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
  translate(usableWidth / 2, usableHeight / 2);
  drawAll(color, span, frameCount % (40 * PI));
}
