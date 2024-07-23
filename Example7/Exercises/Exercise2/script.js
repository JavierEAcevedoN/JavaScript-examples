var p1 = new Promise((resolve, reject) => { // se crea una variable p1 donde se crea la promesa  usando  el opeador new y el objeto promise, se colocan los parametros resolve, reject y se crea un operador  flecha donde se implementa la funcion setTimeout donde se llama al parametro resolve, se coloca el parametro tiempo en milisegundos y se da un un parametro  en cadena.
    setTimeout(resolve, 1000, "TAZ");
});

var p2 = 1337;// se crea una varible llamada p2 que guarda un entero.
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {//se usa un objeto promaise con el  metodo .all que retorna la promesa si se concluyen  con exito, o se rechaza la peticion con la primera promesa rechazada, e guardan las variables en una lista dentro del metodo .all y mediante el metodo .then  se le ingresa el parametro value, se crea un operador flecha donde adentro de este se crea una varible "console", se aplica el metodo .log y se le da el parametro value para imprimir en la consola del navegador.
    console.log(values); // ["TAZ", 1337, "foo"]
    // todas la promesas se resuelven y se imprime el arreglo en la consola. 
});

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "uz");
});

var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    //setTimeout(resolve, 1000, "fuz");
    reject("reject");
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
},
    (reason) => {// se crea un operador flecha donde adentro de este se crea una varible "console", se aplica el metodo .log y se le da el parametro reason para imprimir en la consola del navegador si llega a haver una peticion negada.
        console.log(reason);//"reject".
        // se resuelven las varibles p1 y p2 pero p3 es rechazada y se imprime en consola el rechazo.
    },
);