const canvas = document.getElementById("Mycanvas");
//console.log(document);
canvas.width = 200;
const ctx = canvas.getContext("2d"); //don't know
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); //don't know

}