//Operadores aritmeticos: Suma, Resta, Multiplicacion, Division, Modulo, Potencia, Incremento y Decremento 
let a, b, c, d, e, f;

//Suma
a = 3 + 5;
console.log(a);

//Resta
b = 75 - 45;
console.log(b);

//Division
c = b / 8;
console.log(c);
console.log(typeof c);

//Multiplicacion
d = a * 2;
console.log(d);

//Modulo
f = 9 % 2;
console.log(f);

//Potencia (ES2016 - ECMAScript 2016)
e = 2 ** 3;
console.log(e);

e = Math.pow(3,3);
console.log(e);

//Operadores de incremento y decremento ++ --
let g, h, i;
g = 0;
//Pre-incremento (añadir un valor antes)
++g;
console.log(g);
//Post-incremento (primero se utiliza el valor de la variable y despues se añade un valor despues)
g++;
console.log(g);

//Pre-decremento (primero se realiza el decremento en la variable y despues se utiliza)
--g;
console.log(g);

//Post-decremento (contrario al pre-decremento, la proxima vez que se vuelva a utilizar la variable se le aplicara el decremento)
g--;
console.log(g);

//Ejemplo
g = 7;
h = 5;
i = ++g * h--;
console.log(i);
console.log(g); //Se realizo primero el incremento y despues se utilizo la variable
console.log(h); //Se utilizo primero la variable y despues se le hizo el decremento pendiente
