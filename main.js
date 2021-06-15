// Snake Game by Omar Elshimi

// Initialize canvas and graphics context
initGraphics("my-canvas", 600, 600);

snake = [];
const speed = 5;

for (let i = 0; i < 8; i++) {
    snake.push(snakeObject());
    snake[i].x -= i * 5;
}

function snakeObject() {
    return {
        x: 250,
        y: 200
    };
}


function drawSnakePart(aSnake) {
    fill("green");
    circle(aSnake.x, aSnake.y, 10, "fill");
}

let framecount = 0;

right = true;
left = false;
up = false;
down = false;

function moveSnake() {
    if (right) {
        if (framecount % 60 === 0) {
            snake.splice(snake.length - 1, 1)
            snake.unshift(snakeObject());
            snake[0].x = snake[1].x + speed;
        }
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


function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        drawSnakePart(snake[i]);
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
    background("green");
    fill("white")
    text("Press ENTER to Start", 250, 250, "fill");
}

function gameon() {
    moveSnake();

    background("lightsalmon");
    for (let i = 0; i < snake.length; i++) {
        drawSnake();
    }

}