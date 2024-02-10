let contador = 5, repeticiones = 0;

//Ciclo WHILE 
//Imprimir los valores del 0 al 5;
/*while(contador >= repeticiones){
    console.log(`${contador--}`);
    //contador++;
}*/


//Ciclo DO WHILE, (Se ejecuta al menos una vez el bloque de codigo)
do{
    console.log(contador--)
}while(contador >= repeticiones);


//Ciclo FOR, (el contador se declara dentro, ademas del incremento)
let b = 5;
for(let a = 0; a <= b; a++){
    console.log(a);
}