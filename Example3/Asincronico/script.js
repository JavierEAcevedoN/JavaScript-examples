console.log("incio del proceso");

// "setTimeout" sirve para ejecutar funciones despues de un tiempo
// JavaScript es un lenguaje asincronico, los que significa que este proceso no detiene el proceso de todo el codigo y se ejecutara despues.
setTimeout(function() {
    console.log("Esto se ejecutará después de 3 segundos");
}, 3000)

console.log("final del proceso");