let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
ctx.fillStyle = "yellow"
ctx.strokeStyle = "yellow"

// dibujo del lapiz

ctx.fillRect(75, 50 , 50, 150)
ctx.lineWidth= 2

//dibujo del borrador del lapiz

let ctx1= canvas.getContext("2d")

ctx1.fillStyle = "pink"
ctx1.strokeStyle = "pink"

ctx1.fillRect(75, 50, 50, 10)

//punta lapiz

let ctx2= canvas.getContext("2d")

ctx2.fillStyle = "black" 

ctx2.strokeStyle = "black"

ctx2.fillRect(75, 190, 50, 20)

//dibujo punta

let ctx3 = canvas.getContext("2d")

ctx3.fillStyle = "black" 

ctx3.strokeStyle = "black"

ctx3.fillRect(80, 200, 40, 20)

//dubujo punta

let ctx4 = canvas.getContext("2d")

ctx4.fillStyle = "black" 

ctx4.strokeStyle = "black"

ctx4.fillRect(85, 210, 30, 20)

//dibujo punta
 
let ctx5 = canvas.getContext("2d")

ctx5.fillStyle = "black" 

ctx5.strokeStyle = "black"

ctx5.fillRect(90, 220, 20, 20)

//dibujo borrador 

let ctx6 = canvas.getContext("2d")

ctx6.fillStyle = "red" 

ctx6.strokeStyle = "red"

ctx6.fillRect(200, 80, 60, 130)

ctx6.strokeStyle = "black"

ctx.strokeRect(200, 80, 60, 130)


ctx6.lineWidth=4