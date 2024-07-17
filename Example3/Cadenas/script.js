var saludo = "Hola a todos"
var saludo2 = "Bienvenidos a JavaScript"
var saludo3 = "Hola"
console.log(saludo);

// el signo "$" sirve para insertar expresiones a la cadena
console.log(`Hola ${saludo2}`);

//Con "length" se obtiene el largo de una cadena
console.log(saludo2.length);

//Con "slice" se obtiene una subcadena (fragmento de la cadena)
console.log(saludo2.slice(0,11));

//Con "replace" se cambia una subcadena
console.log(saludo2.replace("JavaScript","Python"));

//Con "toUpperCase" se pasa la cadena a minúsculas
console.log(saludo2.toUpperCase());

//Con "concat" sirve para unir textos
console.log(saludo3.concat(saludo2));