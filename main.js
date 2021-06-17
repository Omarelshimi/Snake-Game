// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

let speed = 5;
let framecount = 0;
let dir = "right"

// Initialize Snake Array
let snake = [];


// Snake Stuff
for (let x = 250; x >= 200; x = x - 10) {
    snake.push(snakeObject(x, 200));
}

function snakeObject(initX, initY) {
    return {
        x: initX,
        y: initY
    };
}

function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, 10, "fill");
}

function moveSnake(event) {
    if (framecount % 3 === 0) {
        if (dir === "right") {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject(snake[0].x + 10, snake[0].y));
        } else if (dir === "left") {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject(snake[0].x - 10, snake[0].y));
        } else if (dir === "up") {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject(snake[0].x, snake[0].y - 10));
        } else if (dir === "down") {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject(snake[0].x, snake[0].y + 10));
        }
    }
}

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        drawSnakePart(snake[i]);
    }
}

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    const key = event.keyCode;

    if (key === 13) {
        level = "gameon";
    } else if (key === 37 && dir !== "right") {
        dir = "left";
    } else if (key === 39 && dir !== "left") {
        dir = "right";
    } else if (key === 38 && dir !== "down") {
        dir = "up";
    } else if (key === 40 && dir !== "up") {
        dir = "down";
    } else if (key === 82) {
        level = "gameon";
    }
}

// Draw Stuff
let level = "home"

requestAnimationFrame(draw);

function draw() {
    framecount++;
    if (level === "home") {
        page();
    } else if (level === "gameon") {
        gameon();
    }
    gameOver();
    touchingItself();

    requestAnimationFrame(draw);
}

function page() {
    background("lightsalmon");
    fill("white")
    text("Press ENTER to Start", 195, 250, "fill");
    text("Use Arrow Keys to Move", 180, 280, "fill");
    font("25px Comic Sans")
}

function gameon() {
    moveSnake();

    background("lightsalmon");
    for (let i = 0; i < snake.length; i++) {
        drawSnake();
    }
}

function gameOver() {
    if (snake[0].x >= cnv.width || snake[0].x <= 0 || snake[0].y >= cnv.width || snake[0].y <= 0) {
        background("lightsalmon");
        fill("red");
        text("Game Over", 190, 250, "fill");
        font("30px Comic Sans");
        text("Press (R) to Restart", 195, 300, "fill");
        font("50px Comic Sans");
    }
}

function touchingItself() {
    for (let i = 0; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver();
        }
    }
}