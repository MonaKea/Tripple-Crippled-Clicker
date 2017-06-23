/**
 * Created by lyudmilatrachuk on 6/16/17.
 */


var counterRectangle = 0;
function incrementRectangle(e){
    var x = 200 - e.clientX;
    var y = 150 - e.clientY;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<100){
        counterRectangle++;
        redraw();
    }

}

var counterTriangle = 0;
function incrementTriangle(e){
    var x = 65 - e.clientX;
    var y = 105 - e.clientY;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<130){
        counterTriangle++;
        redraw();
    }

}

var counterCircle = 0;
function incrementCircle(e){
    var x = 480 - e.clientX;
    var y = 100 - e.clientY;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50){
        counterCircle++;
        redraw();
    }

}

var canvas = document.getElementById('canvas');
canvas.addEventListener('click', incrementRectangle);
canvas.addEventListener('click', incrementTriangle);
canvas.addEventListener('click', incrementCircle);

var ctx = canvas.getContext('2d');

function redrawRectangle() {
    ctx.strokeRect(100, 50, 100, 100);
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + counterRectangle, 100, 200);
}

function redrawTriangle() {
    ctx.beginPath();
    ctx.moveTo(250, 151);
    ctx.lineTo(380, 151);
    ctx.lineTo(310, 46);
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + counterTriangle, 270, 200);

}

function redrawCircle() {
    ctx.beginPath();
    ctx.arc(480, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillText("Клики: " + counterCircle, 430, 200);

}

function redraw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    redrawRectangle();
    redrawTriangle();
    redrawCircle();
}

redraw()


//ctx.font = "20px Verdana";
//ctx.fillText("Клики: " + click, 100, 200);
//ctx.fillText("Клики: " + click, 270, 200);
//ctx.fillText("Клики: " + click, 430, 200);


