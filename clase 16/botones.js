// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let boton = document.querySelector("#click")
let parrafo = document.querySelector("#miParrafo")
// onclick es un evento que ocurrecuando el usario hace click sobre un elemento, en este caso sobre el botón
boton.onclick = cambiarColor

// cambiarColor es la función que se ejecuta cuando el usuario hace click en el botón
// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function cambiarColor(){
    // cambio el color a azul
    if (boton.style.color == "red")
    {
        boton.style.color = "green";
    

    }
    else
    {
        boton.style.color = "blue"
        console.log(parrafo.style.color);
        parrafo.style.color = "blue";
        
    }
    console.log("Boton clickeado");
}

boton.style.color = "blue";
console.log(parrafo.style.color);
parrafo.style.color = "blue";