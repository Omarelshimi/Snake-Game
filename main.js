// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

snake = [];

function snakeObject() {
    return {
        x: 250,
        y: 200
    }
}

for (let i = 0; i < 8; i++) {
    snake.push(snakeObject());
    snake[i].x += 10;
}

// requestAnimationFrame(draw);

// function draw() {
//     for (let i = 0; i < snake.length; i++) {

//     }
//     requestAnimationFrame(draw);
// }

function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, 10, "fill");
}
function drawSnake() {
    for (let i = 0; i < snake.length; snake++) {
        drawSnakePart(snake[i]);
    }
}

drawSnake();
