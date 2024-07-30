// Una persona necesita saber si el formato que esta usando de telefono en colombia es el estandar (operador) [n de 8 digitos].
// Entonces lo que se va a a hacer es un patron de expresion regular que verifique el telefono.
// Primero hacemos la expresion regular que vamos a utilizar.
const verificarTelefono = /(\+57 )?(3\d{2}) (\d{7})/;
// En el patron anterior "(\+57 )?:" se utiliza el (?) indica que el patron anterior (\+57 ) es opcional.
// Luego (3\d{2}) indica que valaen digitos que enpiesen con 3 y va de 300 a 399.
// El " " es un espacio.
// Y luego (\d{7}) el (\d) significa un rango de numeros [0-9] y el {7} significa que van nuemros de 0000000 a 9999999.
var Telefono1 = "+57 310 4356732";
var Telefono2 = "316 3212123";
var Telefono3 = "305 3452341";
var Telefono4 = "+1 202 31234141";
// Ahora utilizamos el metodo test() para verificar si los telefonos cumplen con la expresion regular.
console.log(verificarTelefono.test(Telefono1));
console.log(verificarTelefono.test(Telefono2));
console.log(verificarTelefono.test(Telefono3));
// El primero da "true" ya que cumple el patron (\+57 )? que es opcional.
// Los 2 siguientes dan "true" ya que si cumplen el patron de telefono de (3\d{2}) que va de 300 a 399.
// Luego cumple el ( ).
// Y ultimo cumple el patron de los de (\d{7}) que va de 0000000 a 9999999.
console.log(verificarTelefono.test(Telefono4));
// Este da "false" porque no cumple el patron (\+57 )? que es opcional por que tiene +1 y es +57.
// No cumple el patron de telefono de (3\d{2}) que va de 300 a 399.
// No cumple el ( ).
// Y ultimo no cumple el patron de (\d{7}) que va de 0000000 a 9999999.