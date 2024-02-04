//Operadores de asignacion (=),
// y asignacion compuesto (+=, -=, *=, /=, %=)
let miNumero = 13;
console.log(miNumero);

miNumero = 20;
console.log(miNumero);

// Operador += (x = x + 5)
miNumero += 5;
console.log(miNumero);

//Operador -= (x = x - 3)
miNumero -= 3;
console.log(miNumero);

//Operador *= (x = x * 3)
miNumero *= 2;
console.log(miNumero);

//Operador /= (x = x / 4)
miNumero /= 4;
console.log(miNumero);

//Operador %= (x = x % .3)
miNumero %= 3; 
console.log(miNumero);

//Exponente **= (x = x ^ 3)
miNumero **= 3;
console.log(miNumero); 

//Ejercicio piensa en un numero;
//piense mi lector en un número. Súmele 3. Multiplique por 2. Súmele 4. Divida entre 2. Réstele el número que pensó originalmente. La respuesta es 5.

//Definimos las variables
const MI_NUMERO = 15;
let numeroMagico = 0;

//Realizamos las operaciones
numeroMagico += MI_NUMERO;
numeroMagico += 3;
numeroMagico *= 2;
numeroMagico += 4;
numeroMagico /= 2;
numeroMagico -= MI_NUMERO;

//Imprimimos el resultado
console.log(numeroMagico);

//Uso de las operadores de exponente y modulo
numeroMagico **= 2;
console.log(numeroMagico);

numeroMagico %= 3;
console.log(numeroMagico);

