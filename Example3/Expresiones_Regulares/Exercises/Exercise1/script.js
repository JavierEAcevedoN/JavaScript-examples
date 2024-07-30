// Una empresa necesita ingresar a su base de datos unicamente correos electronicos con el formato valido.
// Entonces lo que se va a a hacer es un patron de expresion regular que verifique los correos electronicos.
// Primero hacemos la expresion regular que vamos a utilizar.
const verificarCorreo = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}/;
// En el patron anterior [a-zA-Z0-9._%+-] se utiliza para verificar si tiene letras de la (a-z) en mayuscula (A-Z) numeros (0-9) y simbolos (. _ % + -).
// El (+) indica que el anterior [a-zA-Z0-9._%+-] se puede repetir indefinidas veces hasta antes de la (@).
// Luego sigue la arroba (@).
// Luego sigue [a-zA-Z0-9] que indica las letras (a-z) mayusculas (A-Z) y numeros (0-9).
// El (+) indica que el anterior [a-zA-Z0-9] se puede repetir indefinidas veces hasta antes del (.).
// El (\.) indica un punto (.) literal.
// Y el [a-zA-Z] indica letras (a-z) y mayusculas (A-Z), el {2,6} indica que el anterior [a-zA-Z] tiene como minimo 2 caracteres y maximo 6.
var correo1 = "coreodepruea@github.app";
var correo2 = "correode.pru-eva@discord.xyz";
var correo3 = "app%dsadwas2024@gmail.com";
var correo4 = "dawadwdawss++ḉ`-q.a-z.adawasds";
// Ahora utilizamos el metodo test() para verificar si los correos cumplen con la expresion regular.
console.log(verificarCorreo.test(correo1));
console.log(verificarCorreo.test(correo2));
console.log(verificarCorreo.test(correo3));
// Los 3 dan "true" ya que si cumplen el patron de la (a-z) en mayuscula (A-Z) numeros (0-9) y simbolos (. _ % + -).
// Luego sigue la (@).
// Luego sigue las letras (a-z) mayusculas (A-Z) y numeros (0-9).
// Luego cumple el (.).
// Y por ultimo las letras (a-z) y mayusculas (A-Z) entre 2 a 6 caracteres.
console.log(verificarCorreo.test(correo4));
// Este da "false" porque en la parte de la (a-z) en mayuscula (A-Z) numeros (0-9) y simbolos (. _ % + -).
// Tiene simbolos que no pertenecen al patron (ḉ`).
// No tiene la (@).
// No cumple las letras (a-z) mayusculas (A-Z) y numeros (0-9), porque tiene un simbolo que no pertenece (-).
// Y va mas alla de las letras (a-z) y mayusculas (A-Z) entre 2 a 6 caracteres.
