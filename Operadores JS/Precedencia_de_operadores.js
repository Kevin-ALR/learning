//Precedencia de operadores

//1.- Parentesis y corchetes
//2.- Operadores unarios, como -,++,--, !
//3.- Aritmeticos *,/,%
//4.- Aritmeticos + y -
//5.- Relacionales <, <=, >, >=
//6.- Igualdad == y !=
//7.- Logicos && y ||
//8.- Asignacion =, =-, =+, /=, *=, etc

//Ej. Se revisa de izquierda a derecha
let a = 12 / 3 + 2 * 3 - 1;
console.log(a);

console.log(`${6 * (4 + ++a) * 2}`)