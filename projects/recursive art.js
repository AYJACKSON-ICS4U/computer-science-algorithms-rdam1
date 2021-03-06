var drawShape = function(x, y, radius) {
    var randomNumber = round(random(1, 3));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));

    if(randomNumber === 1) {
        ellipse(x, y, radius, radius);
    } else if(randomNumber === 2) {
        rect(x, y, x*2, y*2);
        rotate(10);
    } else {
    triangle(x, y, x+1, y+1, x-1, y-1);
    }
    
    var newRadius = radius/2;
    if (newRadius >= 2) {
        drawShape(x, y, newRadius);
        drawShape(x/2, y/2, newRadius);
    }
};

drawShape(width/2, height/2, 380);
