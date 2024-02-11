//Areglos y matrices en JS
// <-- Arreglos -->
//Los arreglos guardan una cantidad de espacio de memoria, la cual podremos utilizar para almacenar variables,
//cualquier valor que no se inicialice dentro del arreglo tendra el valor de undefined.

let numerosArreglo = [];
numerosArreglo[0] = 12;
numerosArreglo[1] = 8;
numerosArreglo[2] = 4;
numerosArreglo[6] = 'tonoto';

console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 4 - [3]: ${numerosArreglo[3]}`);
console.log(`Elemento 6 - [5]: ${numerosArreglo[6]}`);


//Tambien podemos definir los valores a la hora de inicializar el arreglo

let numerosArregloSimple = [2, 4, 8, 16, 32, 64, 128];

console.log(`Elemento 1 - [0]: ${numerosArregloSimple[0]}`);
console.log(`Elemento 2 - [1]: ${numerosArregloSimple[1]}`);
console.log(`Elemento 3 - [2]: ${numerosArregloSimple[2]}`);
console.log(`Elemento 4 - [3]: ${numerosArregloSimple[3]}`);


//Para iterar un arreglo empleamos el ciclo for ya que es mas practico

for(let i = 0; i < numerosArregloSimple.length; i++){
    console.log(`Arreglo[${i}] = ${numerosArregloSimple[i]}`);    
}



// <-- Matrices -->
//Son arreglos de 2 dimensiones, se definen usando corchetes dentro del arreglo ([ [],[] ]), se conforman de renglones y columnas

let  numerosMatriz = [[],[]];

//Renglon 0
numerosMatriz[0][0] = 100;
numerosMatriz[0][1] = 200;
numerosMatriz[0][2] = 300;

//Renglon 1
numerosMatriz[1][0] = 40;
numerosMatriz[1][1] = 80;
numerosMatriz[1][2] = 120;

console.log(`Elemento[0][2] = ${numerosMatriz[0][2]}`);
console.log(`Elemento[1][1] = ${numerosMatriz[1][1]}`);


//Al igual que la matriz, podemos inicializar la matriz al declararla

let numerosMatrix = [[10, 20, 30],[40, 50, 60, 70, 80]];

console.log(`Elemento[0][2] = ${numerosMatrix[0][2]}`);
console.log(`Elemento[1][1] = ${numerosMatrix[1][1]}`);


//Para iterar los elementos de la matriz deberemos de utilizar un ciclo for anidado con otro for, ya que debemos recorrer tanto renglones como columnas

//No. Renglones
console.log(numerosMatrix.length);

//No. Columnas (depende del renglon seleccionado)
console.log(numerosMatrix[0].length);
console.log(numerosMatrix[1].length);

//Renglones
for(let ren = 0; ren < numerosMatrix.length; ren++){
    //Columnas
    for(let col = 0; col < numerosMatrix[ren].length; col++){
        console.log(`Elemento[${ren}][${col}] = ${numerosMatrix[ren][col]}`);
    }
}
