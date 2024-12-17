interface Point {
  position: p5.Vector;
  velocity: p5.Vector;
  activation: number;
}

interface Connection {
  p1: Point;
  p2: Point;
  strength: number;
}

let points: Point[] = [];
let connections: Connection[] = [];
const numPoints = 100;
const connectionThreshold = 100;
const fadeSpeed = 3;

let usableHeight = 800;
let usableWidth = 800;

export function setup(): void {
  const canvasElement = document.getElementById("neural-claude");
  if (canvasElement) {
    usableHeight = parseInt(canvasElement.height, 10);
    usableWidth = parseInt(canvasElement.width, 10);
  }
  console.table({ usableHeight, usableWidth });
  console.log("canvasElement", canvasElement);
  createCanvas(usableWidth, usableHeight, canvasElement);
  background(10);

  // Create initial points representing neural nodes
  for (let i = 0; i < numPoints; i++) {
    points.push({
      position: createVector(random(usableWidth), random(usableHeight)),
      velocity: p5.Vector.random2D().mult(0.5),
      activation: random(1),
    });
  }
}

export function draw(): void {
  // Fade effect for trailing
  fill(10, fadeSpeed);
  noStroke();
  rect(0, 0, usableWidth, usableHeight);

  // Update points
  points.forEach((point) => {
    // Update position with slight random movement
    point.position.add(point.velocity);
    point.velocity.rotate(random(-0.1, 0.1));

    // Bounce off edges
    if (point.position.x < 0 || point.position.x > usableWidth) {
      point.velocity.x *= -1;
    }
    if (point.position.y < 0 || point.position.y > usableHeight) {
      point.velocity.y *= -1;
    }

    // Randomly update activation
    point.activation += random(-0.05, 0.05);
    point.activation = constrain(point.activation, 0, 1);
  });

  // Draw connections
  connections = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let d = p5.Vector.dist(points[i].position, points[j].position);
      if (d < connectionThreshold) {
        connections.push({
          p1: points[i],
          p2: points[j],
          strength: map(d, 0, connectionThreshold, 1, 0),
        });
      }
    }
  }

  // Draw connections first
  connections.forEach((conn) => {
    let alpha = conn.strength * 255 * conn.p1.activation * conn.p2.activation;
    stroke(100, 200, 255, alpha);
    strokeWeight(conn.strength * 2);
    line(
      conn.p1.position.x,
      conn.p1.position.y,
      conn.p2.position.x,
      conn.p2.position.y,
    );
  });

  // Draw points
  points.forEach((point) => {
    let size = map(point.activation, 0, 1, 2, 6);
    noStroke();
    fill(200, 255, 255, point.activation * 255);
    circle(point.position.x, point.position.y, size);
  });
}
