let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 10;
let snake = [];
snake[0] = {
    x: 16 * box,
    y: 16 * box
}
let direction = "right"
let food = {
    x: Math.floor(Math.random() * 39 + 1) * box,
    y: Math.floor(Math.random() * 39 + 1) * box   
}

function criarBG() {
    context.fillStyle = "#97BF04"
    context.fillRect (0, 0, 60 *box, 40* box);
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "#1A2601";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
 //comidinha
function drawFood(){
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box);
}
//direções do jogo
document.addEventListener('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}
function iniciarJogo() {
    // transpassando as bordas
    if (snake[0].x > 39* box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 39 * box;
    if (snake[0].y > 39 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 39 * box;


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    //direções do jogo
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //alimentando a cobrinha
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else {food.x = Math.floor(Math.random() * 39 + 1) * box;
        food.y = Math.floor(Math.random() * 39 + 1) * box;
    }

    

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
    
}



// níveis
function nivelVel() {

    let nivel = document.getElementsByClassName('dropdown-item');

    if (nivel == 'FÁCIL'){
        jogo = setInterval(iniciarJogo, 600);
    }  if (nivel == 'MÉDIO'){
         jogo = setInterval(iniciarJogo, 400);
    } else {
         jogo = setInterval(iniciarJogo, 200);
    }
}



