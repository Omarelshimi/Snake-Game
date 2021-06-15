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

function moveSnake() {
    if (framecount % 60 === 0) {
        snake.splice(snake.length - 1, 1)
        snake.unshift(snakeObject());
        snake[0].x = snake[1].x + speed;
    }
}

function changeDirection(event) {
    const key = event.keyCode;

    if (key === 38) {
        snake[0].y += speed;
        snake.splice(snake.length - 1, 1)
        snake.unshift(snakeObject());
    }
}
changeDirection();

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        drawSnakePart(snake[i]);
    }
}



let level = "home"

function page() {
    if (level === "home") {
        background("green");
        fill("white")
        text("Press ENTER to Start", 300, 300, "fill");
    } else if (level === "gameon") {
        
    }


    requestAnimationFrame(draw);

    function draw() {
        moveSnake();

        background("lightsalmon");
        for (let i = 0; i < snake.length; i++) {
            drawSnake();
        }

        requestAnimationFrame(draw);
    }
}
page();


