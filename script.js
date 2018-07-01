window.onload = function(){
    var canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var context = canvas.getContext("2d");
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var radius = 20;
    var dx = 5;
    var dy = 5;
    function animate() {
        requestAnimationFrame(animate);
        drawBall();
        moveBall();
    }
    function drawBall(){
        context.beginPath();
        context.clearRect(0, 0, innerWidth, innerHeight);
        context.arc(x, y, radius, 0, 2*Math.PI, false);
        context.fillStyle = "white";
        context.fill();
    }
    function moveBall(){
        if(x+radius > innerWidth || x-radius < 0){
            dx = -dx;
        }
        if(y+radius > innerHeight || y-radius < 0){
            dy = -dy;
        }
        x += dx;
        y += dy;
    }
    animate();
}