/**
 * Created by lyudmilatrachuk on 6/16/17.
 */


var counterRectangle = 0;
function incrementRectangle(e){
    var x = e.clientX - canvas.width;
    var y = e.clientY - 0;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<100){
        counterRectangle++;
        redraw();
    }

}

var click2 = 0;
function increment2(e){
    var x = e.clientX - 0;
    var y = e.clientY - 0;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<100){
        click2++;
        redraw();
    }

}

var click3 = 0;
function increment3(e){
    var x = 330 - e.clientX;
    var y = e.clientY + 80;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<50){
        click3++;
        redraw();
    }

}


var canvas = document.getElementById('canvas');
canvas.addEventListener('click', incrementRectangle);
canvas.addEventListener('click', increment2);
canvas.addEventListener('click', increment3);

var ctx = canvas.getContext('2d');

function redrawRectangle() {
    //draw the rectangle
    ctx.strokeRect(100, 50, 100, 100);
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + click1, 100, 200);
}

function redraw2() {
    //draw the triangle
    ctx.beginPath();
    ctx.moveTo(250, 151);
    ctx.lineTo(380, 151);
    ctx.lineTo(310, 46);
    ctx.fill();
    ctx.font = "20px Verdana";
    ctx.fillText("Клики: " + click2, 270, 200);

}

function redraw3() {
    // draw the circle
    ctx.beginPath();
    ctx.arc(480, 100, 50, 0, Math.PI * 2);
    ctx.moveTo(110, 75);
    ctx.stroke();
    ctx.fillText("Клики: " + click3, 430, 200);

}

function redraw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    redrawRectangle()
    redraw2()
    redraw3()
}

redraw()


    //ctx.font = "20px Verdana";
    //ctx.fillText("Клики: " + click, 100, 200);
    //ctx.fillText("Клики: " + click, 270, 200);
    //ctx.fillText("Клики: " + click, 430, 200);



