//Sentencias de decision
//Sentencia IF

//Revisamos si el numero es positivo
let miNumero = 8;
if(miNumero > 0){
    console.log(`Valor positivo: ${miNumero}`);
}
else if(miNumero < 0){
    console.log(`valor negativo: ${miNumero}`);
}
else{ 
    console.log(`Valor cero ${miNumero}`);
}

//Operador ternario, (Se puede omitir los parentesis al inicio de la expresion)
(miNumero > 0) ? console.log(`Positivo`) : console.log(`Cero o negativo`);


//Ejercicios para practicar
//Algoritmo para ver si una persona es mayor de edad
const EDAD_ADULTO = 18;
let edadPersona = 18;

//Revisar si la persona es mayor de edad
if(edadPersona >= EDAD_ADULTO){
    console.log(`La persona con edad de ${edadPersona} anios es un adulto`);
}
else{
    console.log(`La persona con edad de ${edadPersona} anios no es un adulto`);
}

(edadPersona >= EDAD_ADULTO) ? console.log(`Mayor de edad`) : console.log(`Menor de edad`);


//Algoritmo dia de la semana con if-else (no es practico, es mejor usar un switch)
let diaSemana = 1;

if(diaSemana == 1)
    console.log(`Lunes`);
else if(diaSemana == 2)
    console.log(`Martes`);
else if(diaSemana == 3)
    console.log(`Miercoles`);
else if(diaSemana == 4)
    console.log(`Jueves`);
else if(diaSemana == 5)
    console.log(`Viernes`);
else if(diaSemana == 6)
    console.log(`Sabado`);
else if(diaSemana == 7)
    console.log(`Domingo`);
else
    console.log(`Dia de la semana erroneo ${diaSemana}`);


//Dia de la semana (switch), hay que poner el break debido a que se seguiran ejecutando los demas casos hasta que exista un break o la finalizacion del switch
switch(diaSemana){
    case 1: 
        console.log(`Lunes`);
        break;
    case 2:
        console.log(`Martes`);
        break
    case 3:
        console.log(`Miercoles`);
        break;
    case 4:
        console.log(`Jueves`);
        break;
    case 5:
        console.log(`Viernes`);
        break;
    case 6:
        console.log(`Sabado`);
        break;
    case 7:
        console.log(`Domingo`)
        break;
    default:
        console.log(`Dia de la semana erroneo ${diaSemana}!!`);
}