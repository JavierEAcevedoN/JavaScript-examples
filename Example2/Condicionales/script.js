console.log("Variables globales y locales");
// "let" sirve para asignar variables a nivel local (solo se puede usar dentro de su bloque de codigo)
if(5==5){
    let varlet = 4321231;
    console.log(varlet);
}
// console.log(varlet);

// "var" sirve para asignar variables a nivel global (que se puede usar en todo el codigo)
if(5==5){
    var varglobal = 4212;
    console.log(varglobal);
}
console.log(varglobal);

// "const" sirve para declarar variables constantes (que no se puede cambiar)
const varconstante = 123123;
console.log(varconstante);
// varconstante++;
// console.log(varconstante);

console.log("Condicionales");

// condicional if
var edad = 17;

if(edad<18){
    console.log("usted es menor de edad");
} else if (edad < 31) {
    console.log("Usted es un adulto joven");
} else {
    console.log("Usted es un adulto");
}

// condicional swicth
var dia = 1;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    // "default" funciona cuando ningun "case" se cumple
    default:
        console.log("Eso no es un dia");
}