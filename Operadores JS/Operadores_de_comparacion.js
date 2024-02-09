//Operadores relacionales (De comparacion)
let a = 5;
let b = '5';

console.log(a);
console.log(b);

//Operador de igualdad ==, (solo compara valores y solo realiza la conversion si es necesario) 
console.log("a == b --> ", a == b);

//Operador de igualdad exacto ===, (compara valor y tipo de dato)
console.log(`${a} === ${b} -> ${a === b}`);

//String interpolation (sirve para imprimir en consola texto y valores al convertir el valor de la variable en texto)
console.log(`Variables existentes: a -> ${a}, b -> ${b}`);


//Operador distintos !=, Compara valor y convierte el tipo de dato si es requerido
console.log(`${a} != ${b} -> ${a != b}`);

//Operador distinto exacto !==, compara el valor de las variables es distinto y tambien el tipo de dato
console.log(`${a} !== ${b} -> ${a !== b}`);


//Operador de menor que <,
console.log(`${a} < ${b} -> ${a < b}`);

//Operador de menor o igual que <=
console.log(`${a} <= ${b} -> ${a <= b}`);


//Operador mayor que >, no importa el tipo de dato ya que se realiza la conversion
console.log(`${a} > ${b} -> ${a > b}`);

//Operador mayot o igual que >=, no importa el tipo de dato ya que se realiza la conversion 
console.log(`${a} >= ${b} -> ${a >= b}`);