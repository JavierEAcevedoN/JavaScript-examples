var p1 = new Promise((resolve, reject) => { // se crea una variable p1 donde se crea la promesa  usando  el opeador new y el objeto promise, se colocan los parametros resolve, reject y se crea un operador  flecha donde se implementa la funcion setTimeout donde se llama al parametro resolve, se coloca el parametro tiempo en milisegundos y se da un un parametro  en cadena.
    setTimeout(resolve, 500, "uno");
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 400, "dos");
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "tres");
});
var p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 700, "cuatro");
});

Promise.race([p1, p2,p3,p4]).then((value) => { // se usa un objeto promaise con el  metodo .race que retorna una promesa que se cumpla = "resolve" o no secumpla = "reject" primero, se guardan las variables en una lista dentro del metodo .race y mediante el metodo .then  se le ingresa el parametro value, se crea un operador flecha donde adentro de este se crea una varible "console", se aplica el metodo .log y se le da el parametro value para imprimir en la consola del navegador.
    console.log(value); // "tres"
    // todos se resuelven, pero la p3 se resuelve primero y se imprime en la consola.
});