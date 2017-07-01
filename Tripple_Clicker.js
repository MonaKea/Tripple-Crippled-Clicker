/**
 * Created by lyudmilatrachuk on 6/16/17.
 */


var counterRect1 = 0;
function incrementRect1(e){
    var x = e.clientX;
    var y = e.clientY;
    if (x > 50 && x < 150 && y > 70 && y < 170){
        counterRect1++;
        redraw();
    }
}

var counterRect2 = 0;
function incrementRect2(e){
    var x = e.clientX;
    var y = e.clientY;
    if (x > 350 && x < 450 && y > 70 && y < 170){
        counterRect2++;
        redraw();
    }
}

var counterCir1 = 0;
function incrementCir1(e){
    var x = 250 - e.clientX;
    var y = 115 - e.clientY;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50){
        counterCir1++;
        redraw();
    }
}

var counterCir2 = 0;
function incrementCir2(e){
    var x = 550 - e.clientX;
    var y = 115 - e.clientY;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50){
        counterCir2++;
        redraw();
    }
}

var counterTotal = 0;
function incrementTotal (){
    counterTotal = counterRect1 + counterRect2 + counterCir1 + counterCir2;
}

var canvas = document.getElementById('canvas');

canvas.addEventListener('click', incrementRect1);
canvas.addEventListener('click', incrementRect2);
canvas.addEventListener('click', incrementCir1);
canvas.addEventListener('click', incrementCir2);


var ctx = canvas.getContext("2d");

function drawRectangle(centerX, centerY, width, height, counter) {
    ctx.strokeRect(centerX, centerY, width, height);
    ctx.stroke()
    ctx.font = "20px Verdana"
    ctx.fillText("Клики: " + counter, centerX, centerY + 150)
}


function redrawRect1 () {
    drawRectangle(50, 70, 100, 100, counterRect1);
}



function redrawRect2 () {
    drawRectangle(350, 70, 100, 100, counterRect2);
}


function drawCircle(centerX, centerY, radius, counter) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()
    ctx.font = "20px Verdana"
    ctx.fillText("Клики: " + counter, centerX - 50, centerY + radius + 50)
}

function drawRectangleShape(props) {
    drawRectangle(props.x, props.y, props.w, props.h, props.counter)
}
function drawCircleShape(props) {
    drawCircle(props.x, props.y, props.r, props.counter)
}

var shapes = [
    {x:50, y:70, w:100, h:100},
    {x:350, y:70, w:100, h:100},
    {x:250, y:115, r:50},
    {x: 550, y: 115, r: 70},
]

function redraw() {
    incrementTotal()
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.stroke();
    ctx.font = "20px Verdana";
    ctx.fillText("Сумма кликов: " + counterTotal, 250, 250);
    shapes[0].counter = counterRect1
    drawRectangleShape(shapes[0]);
    shapes[1].counter = counterRect2
    drawRectangleShape(shapes[1]);
    shapes[2].counter = counterCir1
    drawCircleShape(shapes[2]);
    shapes[3].counter = counterCir2
    drawCircleShape(shapes[3]);
}

redraw();
