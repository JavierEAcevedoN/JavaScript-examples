console.log("Funciones");

// funciones declarativas
function suma(a,b) {
    return a + b;
}
console.log(suma(5,3));

// funciones de expresión
const suma2 = function(a,b) {
    return a + b;
}
console.log(suma2(15,3));

// funciones de expresión tipo flecha
// el signo "=>" sirve para hacer funciones
const suma3 = (a,b) => {
    return a + b;
}
console.log(suma3(15,23));

// se puede poner despues de la flecha el valor a retornar en la misma linea
const suma4 = (a,b) => a+b;
console.log(suma4(15,223));

// si la funcion solo tiene un parametro no se utiliza los parantesis
const saludo = saludo => saludo + "!";
console.log("Javier");

//funciones autoejecutables
(function (a,b) {
    console.log(a-b);
})(4,2);