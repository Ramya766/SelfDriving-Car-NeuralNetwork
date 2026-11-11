const canvas = document.getElementById("Mycanvas");
//console.log(document);
canvas.width = 200;
const ctx = canvas.getContext("2d"); //don't know
const road = new Road(canvas.width/2,canvas.width*0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);


animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7); //to get road moving and car remains in the same place
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate); //don't know

}