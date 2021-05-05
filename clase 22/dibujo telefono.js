let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
ctx.fillStyle = "black"
ctx.strokeStyle = "blue"

// dibujo un rectángulo

ctx.fillRect(130, 150 , 100, 200)
ctx.lineWidth= 8
ctx.strokeRect(130, 150, 100, 200)

//dibujo boton del telefono

let ctx1 = canvas.getContext("2d")

ctx1.fillStyle = "white"

ctx1.fillStyle = "white"

ctx1.beginPath()

ctx1.arc(182.5, 350, 6, 0, 2*Math.PI)

ctx1.stroke()

ctx1.fill()








