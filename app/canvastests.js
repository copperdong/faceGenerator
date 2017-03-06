console.log("hello");

document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle='#3344AA';
////////////////RECTANGLE OPTIONS

//creates filled rectangel
ctx.fillRect(60,10, 50,50);

//creates outlined rectangle
ctx.strokeRect(10,10,50,50);

//clears the content of a rectangle
ctx.clearRect(75,30,5,5);

//////////////DRAW
//always begin
ctx .beginPath();
//draw rectangle
ctx.moveTo(10, 60);
ctx.lineTo(60,60);
ctx.lineTo(30,85);
ctx.fill();
//then close
ctx.closePath();
//draw a smiley
ctx.beginPath();
//draw face

ctx.arc(120,120,50,0,10,false);
ctx.fillStyle='#DDAA88';
ctx.fill();
//mouth
ctx.moveTo(95,120);
ctx.lineTo(150,120);
ctx.stroke();
ctx.closePath();
//draw eyes
ctx.beginPath();
//left eye
ctx.moveTo(100,100);
ctx.arc(90,100,10,0,10);
//right eye
ctx.moveTo(160,100);
ctx.arc(150,100,10,0,10);
ctx.fillStyle='#FFFFFF'
ctx.fill()
ctx.stroke();
ctx.closePath();

//arcto test
ctx.beginPath();
ctx.fillStyle='#3399FF'
ctx.moveTo(10,280);;
ctx.arcTo(10,280,10,260, 20);

ctx.lineTo(90,260);
ctx.arcTo(90,260,90,280, 20);

ctx.lineTo(100,270);
ctx.arcTo(100,340,100,320, 20);

ctx.lineTo(0,320)
ctx.arcTo(0,320,0,340,20);

ctx.lineTo(10,280);

ctx.stroke();
ctx.fill();
ctx.closePath();

//BEZIER
ctx.beginPath();
ctx.moveTo(300,400);
ctx.quadraticCurveTo(300,300,405,530);
ctx.quadraticCurveTo(325, 215, 325, 62.5);
ctx.quadraticCurveTo(325, 100, 350, 100);
ctx.quadraticCurveTo(350, 120, 330, 125);
ctx.quadraticCurveTo(360, 120, 265, 100);
ctx.quadraticCurveTo(425, 100, 325, 62.5);
ctx.quadraticCurveTo(455, 215, 275, 25)
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(400,450)
ctx.quadraticCurveTo(410,420,430,450);
ctx.quadraticCurveTo(430,420,430,450);
ctx.quadraticCurveTo(450,380,230,450);
ctx.quadraticCurveTo(470,430,430,250);
ctx.fillStyle='#FAFD00'
ctx.fill();