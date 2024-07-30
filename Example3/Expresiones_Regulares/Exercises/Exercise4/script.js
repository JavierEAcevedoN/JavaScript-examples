// Una persona necesita saber si el formato que esta usando de hora es el estandar HH:MM:SS.
// Entonces lo que se va a a hacer es un patron de expresion regular que verifique las horas.
// Primero hacemos la expresion regular que vamos a utilizar.
const verificarHora = /(0[1-9]|1[0-2]):([0-5]\d):([0-5]\d)/;
// En el patron anterior se utiliza (0[1-9]|1[0-2]) el (0[1-9]) indica que valen horas de 01 a 09.
// El (|) es como una opcion entre la anterior (0[1-9]) y la siguiente (1[0-2]).
// Luego el (1[0-2]) indica que valen horas de 10 a 12.
// Luego el (:) para separar el formato.
// Luego el patron ([0-5]\d) indica que valen minutos de 00 a 59.
// Luego el (:) para separar el formato.
// Luego el patron ([0-5]\d) indica que valen segundos de 00 a 59.
var Hora1 = "12:00:00";
var Hora2 = "05:35:59";
var Hora3 = "08:11:34";
var Hora4 = "13-60-60";
// Ahora utilizamos el metodo test() para verificar si las Horas cumplen con la expresion regular.
console.log(verificarHora.test(Hora1));
console.log(verificarHora.test(Hora2));
console.log(verificarHora.test(Hora3));
// Los 3 dan "true" ya que si cumplen el patron de hora de (0[1-9]|1[0-2]) que va de 01 12.
// Luego cumple la (:).
// Luego sigue el patron de los minutos ([0-5]\d) que va de 00 a 59.
// Luego cumple la (:).
// Y ultimo cumple el patron de los segundos ([0-5]\d) que va de 00 a 59.
console.log(verificarHora.test(Hora4));
// Este da "false" porque no cumple el patron de hora de (0[1-9]|1[0-2]) que va de 01 12.
// No cumple el signo (:).
// No cumple el patron de los minutos ([0-5]\d) que va de 00 a 59.
// No cumple el signo (:).
// No cumple el patron de los segundos ([0-5]\d) que va de 00 a 59.
