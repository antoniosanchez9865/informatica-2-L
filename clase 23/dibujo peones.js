let canvas = document.querySelector ("#miCanvas")
let ctx = canvas.getContext("2d") 
//voy a dibujar un peon
function dibujarPeon(x,y,color){
    ctx.beginPath()

    //primero voy a dibujar la cabeza
    ctx.strokeStyle = "black"
    ctx.fillStyle = color 
    ctx.arc (x, y, 8, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
    //segundo dibujo el estomago del peon
    ctx.fillRect(x-10, y+8, 20, 15)
    
    ctx.strokeRect(x-10, y+8, 20, 15)
    ctx.fill()
    //tercero dibujar las patas del peon
    
    ctx.arc (x-1, y+32, 9, 1*Math.PI, 0*Math.PI)    
    ctx.stroke()
    //ctx.fill()
    ctx.fillRect(x-11, y+32 , 20, 3)
    ctx.lineWidth= 1
     
}
dibujarPeon(200,200,"white")
dibujarPeon(230,200,"white")
dibujarPeon(260,200,"white")
dibujarPeon(290,200,"white")
dibujarPeon(320,200,"white")
dibujarPeon(350,200,"white")
dibujarPeon(380,200,"white")
dibujarPeon(410,200,"white")
dibujarPeon(200,350,"black")
dibujarPeon(230,350,"black")
dibujarPeon(260,350,"black")
dibujarPeon(290,350,"black")
dibujarPeon(320,350,"black")
dibujarPeon(350,350,"black")
dibujarPeon(380,350,"black")
dibujarPeon(410,350,"black")