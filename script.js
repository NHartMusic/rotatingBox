let angle = 0
let boxImage

function preload() {
    boxImage = loadImage('./Tech_Triangle_02.png');
}

function setup() {
    createCanvas(400, 400, WEBGL)
}

function draw() {
    background(0)
    //light
    ambientLight(255)
    directionalLight(255, 255, 255, 1, 0, 1)
    //rotation
    rotateX(angle)
    rotateY(angle * 1.1)
    rotateZ(angle * 0.8)
    angle+=0.02
    //box
    texture(boxImage)
    box(150)
}
