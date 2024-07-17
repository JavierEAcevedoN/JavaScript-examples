var numero = 5/0
console.log(numero);
console.log(typeof(numero));

//conversion a numeros
console.log(Number("3"));
console.log(Number("Hola"));
console.log(Number("false"));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// "toFixed" sirve para aproximar numeros
var numero = 53.352353;
console.log(numero.toFixed(2));
console.log(typeof(numero.toFixed(2)));

// "toExponential" sirve para mostrar el numero en notacion cientifico
var numero2 = 454.234;
console.log(numero2.toExponential());