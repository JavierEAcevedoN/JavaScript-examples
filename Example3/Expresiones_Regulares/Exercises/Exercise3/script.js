// Una persona necesita saber si el formato que esta usando de fecha es el estandar AAAA-MM-DD.
// Entonces lo que se va a a hacer es un patron de expresion regular que verifique las fechas.
// Primero hacemos la expresion regular que vamos a utilizar.
const verificarFecha = /(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/;
// En el patron anterior se utiliza (19\d{2}|20\d{2}) el (19\d{2}) indica que valen años que empiezen con 19 y sus otros dos digitos desde el 0 hasta el 99.
// el (|) es como una opcion entre la anterior (19\d{2}) y la siguiente (20\d{2}).
// Luego el (20\d{2}) indica que valen años que empiezen con 20 y sus otros dos digitos desde el 0 hasta el 99.
// Luego el (-) para separar el formato.
// Luego el patron (0[1-9]|1[0-2]) el (0[1-9]) indica que valen meses que empiezen con 0 y sus otros dos digitos desde el 1 hasta el 9.
// el (|) es como una opcion entre la anterior (0[1-9]) y la siguiente (1[0-2]).
// Luego el (1[0-2]) indica que valen meses que empiezen con 1 y sus otros dos digitos desde el 0 hasta el 2.
// Luego el (-) para separar el formato.
// Luego el patron (0[1-9]|[1-2]\d|3[0-1]) el (0[1-9]) indica que valen dias que empiezen con 0 y sus otros dos digitos desde el 1 hasta el 9.
// el (|) es como una opcion entre la anterior (0[1-9]) y la siguiente ([1-2]\d).
// Luego el ([1-2]\d) indica que valen dias que empiezen con 1 o 2 y sus otros dos digitos desde el 0 hasta el 9.
// el (|) es como una opcion entre la anterior ([1-2]\d) y la siguiente (3[0-1]).
// Luego el (3[0-1]) indica que valen dias que empiezen con 3 y sus otros dos digitos desde el 0 hasta el 1.
var Fecha1 = "1900-01-01";
var Fecha2 = "2024-07-19";
var Fecha3 = "2099-12-31";
var Fecha4 = "1111-14-99";
// Ahora utilizamos el metodo test() para verificar si las Fechas cumplen con la expresion regular.
console.log(verificarFecha.test(Fecha1));
console.log(verificarFecha.test(Fecha2));
console.log(verificarFecha.test(Fecha3));
// Los 3 dan "true" ya que si cumplen el patron de año de (19\d{2}|20\d{2}) que va de 1900 a 2099.
// Luego cumple la (-).
// Luego sigue el patron de los meses (0[1-9]|1[0-2]) que va de 01 a 12.
// Luego cumple la (-).
// Y ultimo cumple el patron de los dias (0[1-9]|[1-2]\d|3[0-1]) que va de 01 a 31.
console.log(verificarFecha.test(Fecha4));
// Este da "false" porque no cumple el patron de año de (19\d{2}|20\d{2}) que va de 1900 a 2099.
// No cumple el patron de los meses (0[1-9]|1[0-2]) que va de 01 a 12.
// No cumple el patron de los dias (0[1-9]|[1-2]\d|3[0-1]) que va de 01 a 31.