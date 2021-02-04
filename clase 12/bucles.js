//versión con bucles
function factorialbucles(n) {
    if (n<=1)
    return 1
    else {
        return n* factorial (n-1)
    }
}



function factorialrecursivo(n){
    //versión recursiva
    //si n es igual menor o igual a 1 el resultado es inmediato
    if (n<=1) return 1
    else{
        //se bede llamar al factorial de número anterior
        console.log(`Calculando ${n} * factorial (${n - 1})`);
        return n * factorial (n - 1)
    }
}
