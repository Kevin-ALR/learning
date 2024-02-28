let a = 7, b = 4, c;

//Ejemplo de procedimiento (Funcion que no retorna valor)
function sumaProcedimiento(a,b){
    let resultado = a + b;
    console.log(resultado);
}
sumaProcedimiento(a, b);

//Ejemplo de funcion (Funcion que si retorna valor)
function sumaFunction(a, b){
    let resultado = a + b;
    return resultado
}
c = sumaFunction(a, b);
console.log(c);
