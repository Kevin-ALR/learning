 //Valor fijo = literal
 
 //Tipos de datos primitivos en JS
 //Number representa a todos los numeros tanto enteros como flotantes (INT y FLOAT)
 let miEntero = 10;
console.log(miEntero);

let miFlotante = 7.9;
console.log(miFlotante);

//Cadena de caracteres (String) se puede declarar de 3 formas con comillas "", '', ``;
let miCadena = "Hola";
console.log(miCadena);

//Boleanos o operadores logicos
let miBoolean = true;
console.log(miBoolean);

//Nulos o null (sin referencia a un objeto)
let miNull = null;
console.log(miNull);

//Variable que no se ha definido su valor (undefined)
let miUndefined = undefined;
console.log(miUndefined);

let myVariable = `Ya pero va a pasar algo`;
console.log(myVariable);

//Para conocer el tipo de dato que estamos manejando tenemos un operador conocido como typeof
console.log(typeof miBoolean);
console.log(typeof miEntero);
console.log(typeof miFlotante);
console.log(typeof miCadena);
console.log(typeof miNull);
console.log(typeof miUndefined);

//El typeof sirve para revisar dentro de nuestro codigo el tipo de la variable que estamos manejando ya que pueden cambiar dinamicamente durante la ejecucion del programa

