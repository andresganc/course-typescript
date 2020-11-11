
// FUNCIONES PURAS Y NO PURAS

// Funcion no pura
// Esta accediendo a constantes externas que pueden ser modificadas y afectar el entorno
let a: number = 10;
let b: number = 15;

function sumaInpura() {
    let resultado = (a + b);
    return resultado;
}

console.log(sumaInpura());


// funcion pura
// No esta accediendo a variables fuera de su metodo
function sumaPura(num1: number, num2: number ) { 
    let resultado = num1 + num2;
    return resultado;
}

console.log(sumaPura(987, 6846))