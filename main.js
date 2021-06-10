// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 500, 500);

snake = [];

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas
    
    for (let i = 0; i < snake.length; i++) {
        drawSnake();
        moveSnake();
    }
}

function drawSnake(aSnake) {
    fill(aSnake.color);
    circle(aSnake.x, aSnake.y. aSnake.r, "fill");
}

function moveSnake(aSnake) {
    aSnake.x += 2;
}