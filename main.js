var canvas;
var video;

function setup()
{
    canvas = createCanvas(800, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.center();
}

function draw() {
    background("white");
    fill("yellow");
    rect(20, 20, 760, 460);
    fill("white");
    rect(30, 30, 740, 440);
    fill("red");
    circle(30, 30, 40);
    circle(770, 30, 40);
    circle(30, 470, 40);
    circle(770, 470, 40);
  }
  
  function takeSnapshot(){    
    save('myFilterImage.png');
  }
  