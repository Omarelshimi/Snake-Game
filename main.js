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

function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, 10, "fill");
} 
function drawSnake() {
    snake.forEach(drawSnakePart);
}


