var context;
var dx = 5; // 변화량(delta)
var dy = 5;
var y = 100;
var x = 100;
function draw() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 300, 200); // 당구대를 그린다.
    context.beginPath();
    context.fillStyle = "red";
    context.arc(x, y, 20, 0, Math.PI * 2, true); 
    context.closePath();
    context.fill();
    if (x < (0 + 20) || x > (300 - 20))
        dx = -dx;
    if (y < (0 + 20) || y > (200 - 20))
        dy = -dy;
    x += dx;
    y += dy;
}
setInterval(draw, 10);
