//Ejercicios con ciclos
//Imprimir los primeros 10 numeros en 3 en 3, positivos y negativos

let maximo = 10;
for(let a = 1; a <= maximo; a += 3){
    console.log(a);
}

let minimo = -10;
for(let b = 1; b >= minimo; b -= 3){
    console.log(b);
}


//Ejercicio Acumulador Suma
//Realiza la suma de los primeros 5 numeros
let acumuladoSuma = 0, numMaximo = 5;
for(let numero = 1; numero <= numMaximo; numero++){
    //Imprimimos lo que se va a sumar
    console.log(`${acumuladoSuma} + ${numero}`);
    
    //Realizamos la suma parcial
    acumuladoSuma += numero;
    console.log(acumuladoSuma);
}
console.log(acumuladoSuma);
acumuladoSuma = 0;


//Ejercicio resuelto empleando While
/*let numero = 1
while(numero <= numMaximo){
    acumuladoSuma += numero;
    numero++;
}
console.log(acumuladoSuma);
acumuladoSuma = 0;*/


//Ejercicio resuelto empleando Do while
/*let numero = 1;
do{
    acumuladoSuma += numero;
    numero++;
}while(numero <= numMaximo);
console.log(acumuladoSuma);*/