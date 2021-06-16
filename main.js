// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

let speed = 5;
let framecount = 0;
let dir = "right"

let snake = [];
for (let x = 250; x < 200; x - 10) {
    snake.push(snakeObject());
    snake[i].x -= i * 5;
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


function moveSnake() {
        if (framecount % 60 === 0) {                                                                                                                                                                                       
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject());
            snake[0].x = snake[1].x + speed;
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
    }

    if (framecount % 60 === 0) {
        if (key === 38) {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject());
            snake[0].y = snake[1].y + speed;
            right = false;
        }
    }
}

let level = "home"

requestAnimationFrame(draw);

function draw() {
    if (level === "home") {
        page();
    } else if (level === "gameon") {
        gameon();
    }
    
    requestAnimationFrame(draw);
}

function page() {
    background("lightsalmon");
    fill("white")
    text("Press ENTER to Start", 195, 250, "fill");
    font("25px Comic Sans")
}

function gameon() {
    moveSnake();

    background("lightsalmon");
    for (let i = 0; i < snake.length; i++) {
        drawSnake();
    }

}