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

function redrawRect1 () {
    ctx.strokeRect(50, 70, 100, 100);
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + counterRect1, 53, 220);
}



function redrawRect2 () {
    ctx.strokeRect(350, 70, 100, 100);
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + counterRect2, 355, 220);
}


function drawCircle(centerX, centerY, radius, counter) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()
    ctx.font = "20px Verdana"
    ctx.fillText("Клики: " + counter, centerX - 50, centerY + radius + 50)
}

function redrawCir1() {
    drawCircle(250, 115, 50, counterCir1)
}


function redrawCir2() {
    drawCircle(550, 115, 70, counterCir2)
}

function redraw() {
    incrementTotal()
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.stroke();
    ctx.font = "20px Verdana";
    ctx.fillText("Сумма кликов: " + counterTotal, 250, 250);
    redrawRect1();
    redrawRect2();
    redrawCir1();
    redrawCir2();
}

redraw();
