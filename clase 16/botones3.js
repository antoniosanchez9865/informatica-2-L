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
    
    console.log("Boton clickeado");
}

// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function cambiarAAzul(){
    // cambio el color a azul y luego de 3 segundos
    // lo cambio a negro
    boton2.style.color = "blue";
    imagen.style.display = "none"
    setTimeout(cambiarANegro, 3000);
}
function cambiarANegro(){
    // lo cambio a negro
    boton2.style.color = "black";
    imagen.style.display = "block"
}

boton2.style.color = "black";
setTimeout(texto, 3000 )