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
function dibujarLapiz(x, y, color){
    // cuerpo de la función
    ctx.strokeStyle = "black"
    ctx.fillStyle = color 
    ctx.arc (x, y, 8, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.fillRect(x-Math.random()* 10, y+Math.random()*15,0, 15)  
    ctx.strokeRect(x+Math.random()*10, y-Math.random()*15, 20, 15)
    ctx.fill()
    ctx.arc (x-Math.random()*10, y+Math.random()*15, 9, 1*Math.PI, 0*Math.PI)    
    ctx.stroke()
    ctx.fillRect(x-Math.random()*10, y+Math.random()*15 , 20, 3)
    ctx.lineWidth= 1
 
}
