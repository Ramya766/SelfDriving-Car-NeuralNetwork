const canvas = document.getElementById("Mycanvas");
//console.log(document);
canvas.height = window.innerHeight;
canvas.width = 200;
const ctx = canvas.getContext("2d"); //don't know
const car = new Car(100, 100, 30, 50);
car.draw(ctx);