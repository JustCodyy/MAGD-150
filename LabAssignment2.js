function setup() {
    createCanvas(128, 128);
    colorMode(RGB, 255, 255, 255, 1);
    background(200); // Grayscale background
  }
  
  function draw() {
    // Define colors
    let redColor = color(255, 0, 0, 0.8); // Red with alpha
    let blueColor = color(0, 0, 255, 0.8); // Blue with alpha
    let yellowColor = color(255, 255, 0, 0.8); // Yellow with alpha
    let whiteColor = color(255, 255, 255, 0.8); // White with alpha
  
    // Draw planets or balloons
    drawCircle(width * 0.3, height * 0.4, 40, redColor); // Red planet/balloon
    drawCircle(width * 0.7, height * 0.5, 35, blueColor); // Blue planet/balloon
    drawCircle(width * 0.5, height * 0.8, 45, yellowColor); // Yellow planet/balloon
    drawCircle(width * 0.4, height * 0.2, 30, whiteColor); // White planet/balloon
  
    // Design principles: symmetry, color, organization
    noLoop(); // Stops draw loop after one iteration
  }
  
  function drawCircle(x, y, size, fillColor) {
    fill(fillColor);
    ellipse(x, y, size, size);
  }
  