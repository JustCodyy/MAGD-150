function setup() {

   createCanvas(128, 128);
 
   background(128); // Gray background
 
  
 
   // Primitive shapes with grayscale stroke and fill
 
   stroke(0); // Black stroke
 
   fill(255); // White fill
 
   ellipse(64, 64, 80, 80); // Large ellipse
 
  
 
   stroke(128); // Gray stroke
 
   fill(0); // Black fill
 
   line(40, 40, 88, 88); // Diagonal line
 
  
 
   noStroke(); // No stroke
 
   fill(192); // Gray fill
 
   rect(20, 20, 40, 40); // Small rectangle
 
  
 
   stroke(64); // Dark gray stroke
 
   fill(128); // Medium gray fill
 
   point(100, 100); // Point
 
  
 
   strokeJoin(ROUND); // Rounded stroke join
} 