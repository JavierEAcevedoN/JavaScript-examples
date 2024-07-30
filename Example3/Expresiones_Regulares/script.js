// Las expresiones regulares son aquellas que nos permiten buscar, capturar, remplazar texto utilizando patrones.
// Los patrones son sencillos y abtractos lo que nos permite hacer una buena busqueda de texto, si se utilizan.
// Para crear una Expresion Regular se pueden utilizar dos formas:

// La primera es utilizando los signo slash (/).
var ExpresionRegular1 = /.a.b/i;
console.log(typeof ExpresionRegular1);
console.log(ExpresionRegular1);
// Los signos de slash sirven para delimitar la expresion y el caracter que esta al final es el "flag" lo que indica que hacer.

// El segundo modo es unilizando su constructor.
var ExpresionRegular2 = new RegExp(".a.b", "i");
console.log(typeof ExpresionRegular2);
console.log(ExpresionRegular2);
// Tambien se puede hacer asi.
var ExpresionRegular3 = new RegExp(/.a.b/, "i");
console.log(typeof ExpresionRegular3);
console.log(ExpresionRegular3);

// Ejemplo de uso:
const texto = `Hola como estas
Te escribo para notificarte que tienes que hacer la tarea de Expresiones Regulares
Entonces continua haciendo el trabajo como sea necesario
Att i'm(yo)`;

console.log("Ejemplo 1");
// Aqui se esta buscando la palabra "como"
var prueva = /como/;
// En el resultado se puede ver que en el "lastIndex" devuelve 0 ya que busca la 1º coincidencia que encuentra y no busca mas.
console.log(prueva.lastIndex);
// Se puede ver que el resultado es "true" ya que si encontro una coincidencia.
console.log(prueva.test(texto));

console.log("Ejemplo 1.2");
// Aqui es el mismo ejemplo que el anterio pero con la "flag" g (global) que sirve para que busque por todo el texto.
var prueva = /como/g;
// En el resultado se puede ver que en el "lastIndex" devuelve 0 ya que busca la 1º coincidencia que encuentra.
console.log(prueva.lastIndex);
// Se puede ver que el resultado es "true" ya que si encontro una coincidencia.
console.log(prueva.test(texto));
// En el resultado se puede ver que en el "lastIndex" devuelve 9 ya que ahi es donde se encontro la siguiente coincidencia.
console.log(prueva.lastIndex);
// Se puede ver que el resultado es "true" ya que si encontro una coincidencia.
console.log(prueva.test(texto));
// En el resultado se puede ver que en el "lastIndex" devuelve 141 ya que ahi es donde se encontro la siguiente coincidencia.
console.log(prueva.lastIndex);
// Se puede ver que el resultado es "false" ya que termino la busqueda y no encontro mas coincidencias.
console.log(prueva.test(texto));

console.log("Ejemplo de banderas (flags)");
// Como se puedo ver en el ejercicio anterior se utilizaron "flags".
// A continuacion se va a ver para que sirve cada "flag":

// La "flag" "g" (global) sirve para buscar coincidencias por toda la cadena de texto.
console.log("Flag g");
var flagG = /..../g;
const textoG = `Ejemplo de la flag G: como what four come hola`;
console.log(flagG.test(textoG));
// .test() sirve para indicar si en el texto se encontro el patron de 4 caracteres (true) o no se encontro nada (false).
console.log(flagG.lastIndex);
console.log(flagG.test(textoG));
console.log(flagG.lastIndex);
console.log(flagG.test(textoG));
console.log(flagG.lastIndex);
console.log(flagG.test(textoG));
console.log(flagG.lastIndex);
console.log(flagG.test(textoG));
console.log(flagG.lastIndex);
// Como se puede ver se buscaron las subcadenas que tuvieran 4 caracteres juntos.

// La flag "i" (sensitive) sirve para buscar coincidencias sin importar las mayusculas o las minusculas.
console.log("Flag i");
var FlagI = /hola/i;
console.log(FlagI.test("hola"));
console.log(FlagI.test("hOlA"));
console.log(FlagI.test("HoLa"));
console.log(FlagI.test("HOLA"));
// Como se puede ver en todas las anteriores dio "true" sin importar que el patron fuera "hola" en minusculas.

// La "flag" "m" (multiline) sirve para buscar coincidencias en todo los saltos de linea del texto.
console.log("Flag m");
var noFlagM = /^expresiones/g;
var flagM = /^expresiones/m;
const textoM = `Hola como estas
es para informarte que mañana sale tienes que hacer el trabajo de
expresiones regulares.
att notificacion`;
console.log(noFlagM.test(textoM));
// Como se puede ver en la anterior dio "false" ya que en el patron se esta pidiendo que busque la palabra "expresiones" pero al principio de cada linea.
// La "flag" g cuenta todo el texto de corrido sin tener en cuenta los saltos de linea.
console.log(flagM.test(textoM));
// Como se puede ver en la anterior dio "true" ya que en el patron se esta pidiendo que busque la palabra "expresiones" pero al principio de cada linea.
// Y la "flag" "m" tiene en cuenta cada salto de linea como separado lo que significa que la palabra "expresiones" que enpieza al principio de la 3º linea si cuenta.
// Las "flags" "m" y "g" son muy paracidas solo que la "m" tiene en cuanta los saltos de linea lo que es util cuando se esta buscando patrones que enpiezen al inicio o al final de una linea.

// La "flag" "u" (unicode) permite considerar codigo unicode como un unico caracter.
console.log("Flag u");
var noFlagU = /\u{1F916}/g;
var flagU = /\u{1F916}/u;
const textoU = `Ejemplo de flag u: 🤖`;
console.log(noFlagU.test(textoU));
// Como se puede ver en la anterior dio "false" ya que en el patron se esta pidiendo el emoji "🤖" en formato unicode pero cualquier "flag" que no sea "u", no tiene en cuenta el formato unicode como caracter.
console.log(flagU.test(textoU));
// Como se puede ver en la anterior dio "true" ya que en el patron se esta pidiendo el emoji "🤖" y la "flag" "u" tiene en cuenta el formato unicode.

// La "flag" "y" (sticky) nos permite buscar desde la posicion que marca "lastIndex"
console.log("Flag y");
var flagY = /J....r/y;
const textoY = `Hola soy Javier, att Javier`;
console.log(flagY.lastIndex);
console.log(flagY.test(textoY));
// Como se puede ver el resultado dio "false" aunque tenga cumpla el patron de J....r = Javier por que la "flag" "y" no se mueve por el texto, toca moverlo manualmente.
flagY.lastIndex = 9;
// con lastIndex se puede poner el valor para que pueda empezar a buscar, tiene que estar ubicado al pricipio de la coincidencia.
console.log(flagY.test(textoY));
// Como se puede ver el resultado dio "true" ya que se encuentra ubicado encima de la palabra que cumple a condicion.
flagY.lastIndex = 21;
console.log(flagY.test(textoY));

// La "flag" "s" (dotAll) nos permite considerar todos los caracteres como \n, \r, etc.
console.log("Flag s");
var noFlagS = /Hola.J....r/m;
var flagS = /Hola.J....r/s;
const textoS = `Hola
Javier`;
console.log(noFlagS.test(textoS));
// Como se puede ver da "false" por que el "." no tiene en cunta el \n como un caracter.
console.log(flagS.test(textoS));
// Como se puede ver da "true" por que el "." tiene en cunta el \n como un caracter ya que la "flag" "s" lo tiene en cuenta.

// La "flag" "d" (hasIndices) activa una caracteristica especial cuando se utiliza .exec().
console.log("Flag d");
var noFlagD = /c.m./g;
var flagD = /c.m./d;
const textoD = `Hola como estas
es para decirte como vas con el trabajo?
att notificacion`;
var resultNoD = noFlagD.exec(textoD);
// .exec() sirve para mostrar un array con algunos datos sobre donde se encontro la coincidencia, cual fue el texto que se proporciono, etc.
console.log(resultNoD);
// Aqui se puede var los datos que proporciona .exec()
resultNoD = noFlagD.exec(textoD);
// Aqui se vuelve a ejecutar para buscar mas coincidencias.
console.log(resultNoD);
// Aqui se puede ver que los datos cambiaron.
console.log(Object.keys(resultNoD).includes("indices"));
// Como se puede ver el resultado da "false" ya que no contiene un dato especial que proporciona la "flag" "d".
var resultD = flagD.exec(textoD);
console.log(resultD);
resultD = flagD.exec(textoD);
console.log(resultD);
// Da el mismo resultado que el anterior debido a que le "flag" "d" solo cuenta la primera linea, para eso es necesario combinarla con otras "flags".
console.log(Object.keys(resultD).includes("indices"));
// Como se puede ver el resultado da "true" ya que contiene el dato especial que proporciona la "flag" "d", que es "indices".
// "indices" indica en que lugar empieza la coincidencia que se encontro y en que lugar termina.

console.log("Ejemplo de expresiones de las expresiones regulares");
console.log("Punto");
const punto = /.a.o/;
// El punto (.) significa que cualquier caracter puede estar en ese lugar.
console.log(punto.test("gato"));
console.log(punto.test("dato"));
console.log(punto.test("pato"));

console.log("Slash invertido");
const noSlashInvertido = /.a.o./;
const slashInvertido = /.a.o\./;
// El slash invertido (\) sirve para liverar los caracteres especiales para poder usarlos talcual como son.
console.log(noSlashInvertido.test("gato."));
console.log(noSlashInvertido.test("patoa"));
console.log(noSlashInvertido.test("datoe"));
// Como se puede ver todas dan "true" devido a que el (.) cuenta cualquier caracter.
console.log(slashInvertido.test("gato."));
// Como se puede ver esta da "true" ya que el punto es literal y no un caracter especial.
console.log(slashInvertido.test("patoa"));
console.log(slashInvertido.test("datoe"));
// Como se puede ver todas dan "false" devido a que el (.) es un (.) y no esta contando cualquier caracter.

console.log("Corchetes");
const corchetes = /[aeiou]/i;
// Los corchetes ([]) sirven para indicar un rango de caracteres utilizables.
const corchetesNegados = /[^aeiou]/i;
// El circunflejo (^) dentro de los corchetes ([]) sirve para negar todo lo que hay dentro.
console.log(corchetes.test("a"));
// Da "true" ya que en el patron se esta pidiendo las vocales.
console.log(corchetes.test("g"));
console.log(corchetes.test("f"));
// Dan "false" ya que en el patron se esta pidiendo las vocales.
console.log(corchetesNegados.test("a"));
// Da "false" ya que en el patron se esta pidiendo todo menos las vocales.
console.log(corchetesNegados.test("g"));
console.log(corchetesNegados.test("f"));
// Dan "true" ya que en el patron se esta pidiendo todo menos las vocales.

console.log("Pipe");
const pipe = /Trabajador(a|e)s/;
// El "Pipe" (|) sirve para dar opciones, se meten en (()) para poder idicar ese lugar especifico.
console.log(pipe.test("Trabajadores"));
console.log(pipe.test("Trabajadoras"));
// Dan "true" devido a que cumple el patron de ("a" o "e").
console.log(pipe.test("Trabajadoris"));
// Da "false" devido a que no cumple el patron de ("a" o "e") porque esta usando "i".

console.log("Rangos");
var rangoCorchetes = /[0-9]/;
// Al utilizar los corchetes ([]) se pueden hacer rangos como [0-9] que significa un digito de 0 a 9 sin tener que escribirlos a todos.
console.log(rangoCorchetes.test("4"));
// Da "true" ya que si cumple el rango.
console.log(rangoCorchetes.test("a"));
// Da "false" ya que no cumple el rango.
// Tambien se puede usar (\d) que es lo mismo que [0-9] acepta numeros de 0 a 9.
// Tambien se puede usar el contrario (\D) que es lo mismo que [^0-9] acepta cualquier cosa que no sean numeros de 0 a 9.
// Hay mas tipos de rangos como:
rangoCorchetes = /[a-z]/;
// Solo acepta letras de la a a la z minuscula.
console.log(rangoCorchetes.test("a"));
console.log(rangoCorchetes.test("A"));
// Lo mismo con:
rangoCorchetes = /[A-Z]/;
// Solo acepta letras de la A a la Z mayuscula.
console.log(rangoCorchetes.test("A"));
console.log(rangoCorchetes.test("a"));
// Tambien se puede usar [A-Za-z] que acepta caracteres de la A a la z en mayuscula y minuscula.
rangoCorchetes = /[A-Za-z0-9]/;
// Solo acepta caracteres alfanumericos.
console.log(rangoCorchetes.test("a"));
console.log(rangoCorchetes.test("A"));
console.log(rangoCorchetes.test("1"));
// Tambien se puede usar (\w) que es lo mismo que [A-Za-z0-9] acepta caracteres alfanumericos.
// Tambien se puede usar el contrario (\W) que es lo mismo que [^A-Za-z0-9] acepta cualquier cosa que no sean caracteres alfanumericos.
rangoCorchetes = /[ \t\r\n\f]/;
// Solo acepta caracteres de espacio en blanco.
console.log(rangoCorchetes.test(" "));
console.log(rangoCorchetes.test("    "));
console.log(rangoCorchetes.test("a"));
// Tambien se puede usar (\s) que es lo mismo que [ \t\r\n\f] acepta caracteres de espacio en blanco.
// Tambien se puede usar el contrario (\S) que es lo mismo que [^ \t\r\n\f] acepta cualquier cosa que no sean caracteres de espacio en blanco.
rangoCorchetes = /[\xN]/;
// Se utiliza para caracteres hexadecimal.
rangoCorchetes = /[\uN]/;
// Se utiliza para caracteres unicode.

console.log("Anclas");
var ancla = /^ca/;
// Las anclas se utilizan para indicar si un patron esat al final o al principio de la cadena.
console.log(ancla.test("cama"));
// Se puede ver que da "true" ya que el signo (^) significa "al princio de" y cama tiene "ca" al principio de la cadena.
console.log(ancla.test("arca"));
// Se puede ver que da "false" ya que el signo (^) significa "al princio de" y arca tiene "ca" al final de la cadena.
ancla = /ca$/;
console.log(ancla.test("cama"));
// Se puede ver que da "true" ya que el signo ($) significa "al final de" y arca tiene "ca" al final de la cadena.
console.log(ancla.test("arca"));
// Se puede ver que da "false" ya que el signo ($) significa "al final de" y arca tiene "ca" al principio de la cadena.
ancla = /fo\b/;
// El (\b) se utiliza para el final/principio de una palabra.
console.log(ancla.test("Esto es un párrafo de texto."));
// Como se puede ver da "true" ya que "fo" termina al final de la palabra "parrafo".
console.log(ancla.test("Esto es un párrafo."));
// Como se puede ver da "true" ya que "fo" termina al final del texto con la palabra "parrafo".
console.log(ancla.test("Frase que termina en fo"));
// Como se puede ver da "true" ya que "fo" termina al final del texto con la palabra "fo".
console.log(ancla.test("Un círculo es una forma."));
// Como se puede ver da "false" ya que "fo" empieza al principio de la palabra "forma".

console.log("Cuantificadores");
var cuantificadores = /a*/;
// El signo (*) sirve para indicar que el caracter anterior puede no salir o puede salir 1 vez o mas.
console.log(cuantificadores.test(""));
console.log(cuantificadores.test("a"));
console.log(cuantificadores.test("aa"));
console.log(cuantificadores.test("aaa"));
console.log(cuantificadores.test("aaaa"));
// Como se puede ver en todos los anteriores la letra "a" no sale o sale 1 vez o mas
cuantificadores = /a+/;
// El signo (+) sirve para indicar que el caracter anterior puede salir 1 vez o mas.
console.log(cuantificadores.test(""));
// Como se puede ver da "false" ya que la letra "a" no sale ni 1 vez.
console.log(cuantificadores.test("a"));
console.log(cuantificadores.test("aa"));
// Como se puede ver dan "true" ya que la letra "a" sale 1 vez o mas.
cuantificadores = /a?/;
// El signo (?) sirve para indicar que el caracter anterior no sale o sale 1 vez, lo que significa que es opcional.
console.log(cuantificadores.test(""));
// Como se puede ver da "true" ya que la letra "a" no sale ni 1 vez.
console.log(cuantificadores.test("a"));
// Como se puede ver da "true" ya que la letra "a" sale 1 vez.

console.log("Cuantificadores numericos");
var cuantificadoresNumericos = /^\d{2}$/;
// Los signos ({}) sirve para indicar cuantas veces se repite el caracter anterior.
console.log(cuantificadoresNumericos.test(22));
// Como se puede ver da "true" ya que se repite exactamente 2 veces los numeros.
console.log(cuantificadoresNumericos.test(321));
// Como se puede ver da "false" ya que se repite 3 veces los numeros.
console.log(cuantificadoresNumericos.test(3121));
// Como se puede ver da "false" ya que se repite 4 veces los numeros.
cuantificadoresNumericos = /^\d{3,}$/;
// Cuando se pone ({3,}) indica que el caracter anterior se repite 3 o mas veces.
console.log(cuantificadoresNumericos.test(22));
// Da "false" ya que solo se repite 2 veces y el minimo son 3.
console.log(cuantificadoresNumericos.test(321));
console.log(cuantificadoresNumericos.test(3121));
// Como se puede ver dan "true" ya que los caracteres se repiten dos o mas veces
cuantificadoresNumericos = /^\d{3,4}$/;
// Cuando se pone ({3,4}) indica que el caracter anterior se puede repetir de 3 a 4 veces.
console.log(cuantificadoresNumericos.test(22));
// Da "false" ya que solo se repite 2 veces y el minimo son 3.
console.log(cuantificadoresNumericos.test(321));
console.log(cuantificadoresNumericos.test(3121));
// Dan "true" ya que el caracter anterior se repite de 3 a 4 veces.
console.log(cuantificadoresNumericos.test(31213));
// Da "false" ya que se repite 5 veces y el maximo son 4.

console.log("Parantesis");
const parantesis = /(a[0-9]) (b[0-3])/d;
// Los "parantesis" "()" sirven para poner grupos de patrones dentro del patron.
console.log(parantesis.test("a4 b2"));
// Una propiedad de los parenteis es, cuando se usa el metodo de "exec" puede dar algunas datos extra.
console.log(parantesis.exec("a4 b2"));
// Se puede ver que en vez de encontrar un solo resultado, encuentra mas, el primer resultado es el patron completo.
// Y los siguientes son los grupos de patrones que se encontraron en el texto.
// Y mas la "flag" "d" le puede indicar en que parte del texto se encontro la coincidencia y los grupos de coincidencias.
const parantesisNombre = /(?<numero1>a[0-9]) (?<numero2>b[0-3])/d;
// Al usar (?<nombre>) se le puede asignar un nombre a cada grupo de parentesis (siempre va al principio).
console.log(parantesisNombre.exec("a4 b2"));
// Como se puede ver aparece en la propieded de "groups" aparecen los grupos de coincidencias con el nombre que se le asigno en (?<nombre>).
