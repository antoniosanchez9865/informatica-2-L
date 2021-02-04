let total = 0
let sumando = 1
while (sumando <= 100) {
    console.log(`Total:${Total}.Sumando ${sumando}`)
    total = total + sumando;
    sumando = sumando + 1;
}
console.log(`la suma es ${total}`);
//do while
//para pedir input del usuario
let numero; //creo la variable
do {
    numero = parseFloat(prompt("ingrese un numero"));
} while (inNaN(numero) || numero < 0);
//se le pide de nuevo el número al usuario si no es un número o si es menor que cero
console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);