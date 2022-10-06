var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext("2d")

var marcio = new Image()
marcio.src = "./marcinho.jpg"


function fundo() {

    ctx.fillStyle = "pink"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

}

var player = {

    x: canvas.width / 2,
    y: canvas.height / 2,
    largura: 400,
    altura: 250,
    desenhar: function () {

        ctx.drawImage(marcio, this.x, this.y, this.largura, this.altura)

    }

}

var tecla = "nenhuma"

window.addEventListener("keydown", (evento) => {

    tecla = evento.key

})

function loop() {

    fundo()
    fillStyle = "white"
    ctx.font = "30px arial"
    ctx.fillText("tecla: " + tecla , 100 , 50)

    var vx = 100;
    var vy = 100;

    switch (tecla) {
        case "a":

            player.x -= vx
            tecla = ""

            break;
        case "d":

            player.x += vx
            tecla = ""

            break;
        case "w":

            player.y -= vy
            tecla = ""

            break;
        case "s":

            player.y += vy
            tecla = ""

            break;
    }
 
    player.desenhar()



    setTimeout(() => {loop()} , 1000 / 60)

}

setTimeout(() => {loop()} , 1000 / 60)

