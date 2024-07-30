// Una persona necesita saber si sus URLs tienen un formato valido.
// Entonces lo que se va a a hacer es un patron de expresion regular que verifique las URLs.
// Primero hacemos la expresion regular que vamos a utilizar.
const verificarURL = /https?:\/{2}([a-zA-Z0-9-]+\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,6}.*/;
// En el patron anterior "https?:" se utiliza el (?) indica que el caracter anterior (s) es opcional.
// Luego el (\/) es para indicar un (/) literal y el {2} indica que el anterior (\/) tiene 2 caracteres exactos.
// Luego el patron [a-zA-Z0-9-] se utiliza para verificar si tiene letras de la (a-z) en mayuscula (A-Z) numeros (0-9) y el simbolo (-).
// El (+) indica que el anterior [a-zA-Z0-9-] se puede repetir indefinidas veces hasta antes del (\.).
// El (\.) inica un punto (.) literal.
// El ([a-zA-Z0-9-]+\.)? indica que los tres anteriores estan dentro "()" y tienen un (?) al final lo que hace que esos 3 patrones anteriores [a-zA-Z0-9-], (+), (\.) sean opcionales.
// Luego el patron [a-zA-Z0-9] se utiliza para verificar si tiene letras de la (a-z) en mayuscula (A-Z) y numeros (0-9).
// El (+) indica que el anterior [a-zA-Z0-9] se puede repetir indefinidas veces hasta antes del (\.).
// El (\.) inica un punto (.) literal.
// El [a-zA-Z] indica letras (a-z) y mayusculas (A-Z), el {2,6} indica que el anterior [a-zA-Z] tiene como minimo 2 caracteres y maximo 6.
// Y el (.*) indica cualquier caracter, simbolo que siga
var URL1 = "https://github.com/JavierEAcevedoN";
var URL2 = "https://discord.com/login";
var URL3 = "http://www.ejemplo.com/example/1";
var URL4 = "http:/xyz.e-j-e-m-p-l-o.j";
// Ahora utilizamos el metodo test() para verificar si los URLs cumplen con la expresion regular.
console.log(verificarURL.test(URL1));
console.log(verificarURL.test(URL2));
console.log(verificarURL.test(URL3));
// Los 3 dan "true" ya que si cumplen el patron de https: o http:.
// Luego sigen los (\/) que se repite {2} dos veces.
// Luego sigue las letras (a-z) mayusculas (A-Z) numeros (0-9) y el simbolo (-).
// Luego cumple el (.).
// Las dos anteriores son opcionales
// Luego sigue las letras (a-z) mayusculas (A-Z) y numeros (0-9).
// Luego cumple el (.).
// Luego sigue las letras (a-z) y mayusculas (A-Z) entre 2 a 6 caracteres.
// Y ultimo (.*) continua el URL.
console.log(verificarURL.test(URL4));
// Este da "false" porque en la parte de los (\/) que se repite {2} dos veces, solo se repite 1 vez.
// No cumple las letras (a-z) mayusculas (A-Z) y numeros (0-9), porque tiene simbolos que no pertenecen (-).
// No cumple las letras (a-z) y mayusculas (A-Z) entre 2 a 6 caracteres, por que solo tiene 1 caracter.