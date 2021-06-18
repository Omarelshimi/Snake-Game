// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

let score = 0;
let speed = 5;
let framecount = 0;
let dir = "right"

// Initialize Snake Array
let snake = [];

// Snake Stuff
function initilaizeSnake() {
    for (let x = 250; x >= 180; x = x - 10) {
        snake.push(snakeObject(x, 200));
    }
}
initilaizeSnake();

function snakeObject(initX, initY) {
    return {
        x: initX,
        y: initY,
        r: 10
    };
}

function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, aSnake.r, "fill");
}

function moveSnake(event) {
    if (framecount % 2 === 0) {
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
    } else if (key === 82 && level === "gameover") {
        level = "gameon";
        snake = [];
        initilaizeSnake();
        dir = "right"
    }
}

// Draw Stuff
let level = "home"

requestAnimationFrame(draw);

function draw() {
    document.getElementById("score").innerHTML = score;
    framecount++;
    if (level === "home") {
        page();
    } else if (level === "gameon") {
        gameon();
    } else if (level === "gameover") {
        gameOver();
        score = 0;
    }
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
    checkGameOver();
    touchingItself();

    background("lightsalmon");

    drawFood();
    eatFood();

    for (let i = 0; i < snake.length; i++) {
        drawSnake();
    }
}

function checkGameOver() {
    if (snake[0].x >= cnv.width || snake[0].x <= 0 || snake[0].y >= cnv.width || snake[0].y <= 0) {
        level = "gameover";
    }
}

function gameOver() {
    background("lightsalmon");
    fill("red");
    text("Game Over", 190, 250, "fill");
    font("30px Comic Sans");
    text("Press (R) to Restart", 195, 300, "fill");
    font("50px Comic Sans");
}

function touchingItself() {
    for (let i = 3; i < snake.length; i++) {
        let dx = snake[0].x - snake[i].x
        let dy = snake[0].y - snake[i].y
        let hyp = Math.sqrt(dx * dx + dy * dy);
        if (hyp < snake[0].r + snake[i].r) {
            level = "gameover"
        }
    }
}

// Food Stuff

// Initialize Food in an Object
let food = []

food.push(foodObject());

function foodObject() {
    return {
        x: randInt(10, cnv.width - 10),
        y: randInt(10, cnv.height - 10),
        r: 7
    }
}

// Draw Food
function drawFood() {
    fill("brown");
    circle(food[0].x, food[0].y, food[0].r, "fill");
}

function eatFood() {
    let dx = snake[0].x - food[0].x
    let dy = snake[0].y - food[0].y
    let hyp = Math.sqrt(dx * dx + dy * dy);
    if (hyp < snake[0].r + food[0].r) {
        snake.push(snakeObject());
        food.pop();
        food.push(foodObject());
        snake[snake.length - 1].x = snake[snake.length - 2].x;
        snake[snake.length - 1].y = snake[snake.length - 2].y;
        score++;
    }
}
