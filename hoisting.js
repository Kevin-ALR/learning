//WTF, okay hoisting significa que podemos utilizar inicialmente una variable y despues podemos declararla, esto por que todas las declaraciones de la variables se ponen al inicio del programa

//Forma uno declarar e inicializar, lo basico pues
var x; // 1.- Declarar la variable
x = 10; // 2.- Inicializamos la variable
console.log(x);


//Forma dos empleando hoisting(usar una variable, y despues declararla)
y = 5;
console.log(y);
var y;

//Esto solo funciona usando var, ya que con let funciona de esta manera ya que con let no es posible redefinir la variable;
//Ademas no es posible asignar el valor a nuestra variable y despues la definimos con let, ya que esto nos dara un error de que no se ha inicializado;
//Al usar let no aplica el concepto de hoisting :D

z = 21;
let z;
//var z;

//Por esto ya no se suele emplear var como declaracion ya que suele causar muchas confusiones 
//Podemos usar al inicio del codigo el modo estricto poniendo el siguiente codigo en la parte del inicio 'use strict'
//Primero debemos declarar al inicio y despues inicializar!!!