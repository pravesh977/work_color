function setup() {
    //created the canvas so the rest of the code can work
    createCanvas(800, 900);
    background('#222222');
  
}

function draw() {
    //created the poitions for the circles on the canvas
    fill('red')
    ellipse(100, 100, 75, 75);
    //i fixed up the order of the color on the circles on the canvas
    fill(color(0, 0, 255));
    ellipse(200, 150, 60, 60);
    //i added a stroke color of green for all the circles since i just did one circle only it affets all the other circles 
    stroke('rgb(0,255,0)');
    fill(255, 204, 0);
    ellipse(300, 200, 50, 50);
    
    
    
    //i added this comment to your color file(pravesh)
    
  
}
