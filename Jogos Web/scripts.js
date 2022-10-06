var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var playerImg = new Image()
playerImg.src = "./assets/player.png"

function fundo() {

    ctx.fillStyle = "#fefae0"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

}
var player = {

    x: 0,
    y: 0,
    largura: 30,
    altura: 30,
    
    desenhar: function () {
        ctx.drawImage(playerImg, this.x, this.y, this.largura, this.altura)
    }

}

window.requestAnimationFrame(function () {
    player.desenhar()

})

var tecla = "nenhuma"

window.addEventListener("keydown", (evento) => {

    tecla = evento.key

})

function loop() {

    var velocidadex = 5;
    var velocidadey = 5;

    fundo()

    switch (tecla) {
        case "a":
        case "A":

            player.x -= velocidadex

            break;
        case "d":
        case "D":

            player.x += velocidadex
            tecla = ""

            break;
        case "w":
        case "W":

            player.y -= velocidadey


            break;
        case "s":
        case "S":

            player.y += velocidadey

            break;
    }

    tecla = ""

    player.desenhar()

    setTimeout(() => {loop()} , 1000 / 60)

}

setTimeout(() => {loop()} , 1000 / 60)

/*
function rectangle() {
    ctx.fillStyle = "red"
    ctx.fillRect(0 , 0 , 10 , 10)
}
function triangulo() {
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.fill();
}
function mensagem() {

    var mensagem = document.getElementById("mensagem");
    
    if(mensagem.classList.value == 'newMessage') {
        mensagem.innerText = 'Aperte Aqui!';
        mensagem.classList.remove('newMessage')
    }else {
        mensagem.innerText = 'Boa 06!';
        mensagem.classList.add('newMessage');
    }
    
}
*/

