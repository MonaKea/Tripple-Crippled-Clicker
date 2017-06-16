/**
 * Created by lyudmilatrachuk on 6/16/17.
 */

/**
var click = 0;
function increment(e){
    var x = e.clientX - 240;
    var y = e.clientY - 160;
    var dist = Math.sqrt(y*y + x*x);
    if (dist<100){
        click++;
        redraw();
    }

}
 */

var canvas = document.getElementById('canvas');
//canvas.addEventListener('click', increment);

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    function redraw1() {
        //draw the rectangle
        ctx.strokeRect(100, 50, 100, 100);
    }

    function redraw2() {
        //draw the triangle
        ctx.beginPath();
        ctx.moveTo(250, 151);
        ctx.lineTo(380, 151);
        ctx.lineTo(310, 46);
        ctx.fill();
    }

    function redraw3() {
        // draw the circle
        ctx.beginPath();
        ctx.arc(480, 100, 50, 0, Math.PI * 2);
        ctx.moveTo(110, 75);
        ctx.stroke();
    }

}
    //ctx.font = "20px Verdana";
    //ctx.fillText("Клики: " + click, 100, 200);
    //ctx.fillText("Клики: " + click, 270, 200);
    //ctx.fillText("Клики: " + click, 430, 200);


redraw1()
redraw2()
redraw3()

