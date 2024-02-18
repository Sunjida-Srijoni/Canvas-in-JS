var c =document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.lineWidth=3;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,489,239);

ctx.fillStyle = "green";
ctx.fillRect(12,12,486,236);

var centerX = c.width / 2;
var centerY = c.height / 2;

console.log("X:" + centerX);
console.log("Y:" + centerY);


ctx.beginPath();
ctx.arc(centerX-30,centerY,60,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();


