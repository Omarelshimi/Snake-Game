// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

snake = [
        {x: 650, y:500},
        {x: 645, y:500},
        {x: 640, y:500},
        {x: 635, y:500},
        {x: 630, y:500},
        {x: 625, y:500},
];

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas 
    for (let i = 0; i < snake.length; i++) {

    }
    requestAnimationFrame(draw);
}

function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, 10, "fill");
} 
function drawSnake() {
    snake.forEach(drawSnakePart);
}

function moveSnake(aSnake) {
    aSnake.x += 2;
}

