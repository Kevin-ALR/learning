//Operadores Logicos
let a = true;
let b = false;

console.log(a);
console.log(b);

//Operador logico &&, AND, Y, regresa verdadero si los dos valores son verdaderos
console.log(`${a} && ${b} -> ${a && b}`);

//Operador logico ||, OR, O, regresa verdadero si cualquiera de los valores es verdadero
console.log(`${a} || ${b} -> ${a || b}`);

//Operador NOT !, invierte el resultado del operador logico
console.log(`!${a} -> ${!a}`);
console.log(`!${b} -> ${!b}`);


//Valor dentro del rango
let minValue = 0, maxValue = 5;

//Valor para saber si se encuentra dentro del rango
let data = 4;

//Revisamos si esta dentro del rango
let betweenRange = data >= minValue && data <= maxValue;
console.log('El valor se encuentra dentro del rango: ', betweenRange);