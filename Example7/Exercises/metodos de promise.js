// Integrantes:
// Javier Eduardo Acevedo Noguera
// Mario Felipe Parra Delgado 

// race
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





// all

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




// any

// Se crea la 1º promesa que tiene un "reject" con un 0 (es una promesa rechazada por defecto)
const promesa1 = Promise.reject(0);
// Se crea la 2º promesa que tiene una funcion con el parametro "resolve" que tiene un setTimeOut de 100 milisegundos que devuelve la cadena "rapido"
const promesa2 = new Promise((resolve) => setTimeout(resolve, 100, "rapido"));
// Se crea la 3º promesa que tiene una funcion con el parametro "resolve" que tiene un setTimeOut de 500 milisegundos que devuelve la cadena "lento"
const promesa3 = new Promise((resolve) => setTimeout(resolve, 500, "lento"));

// Se crea una lista que contiene todas la promesas que se crearon.
const promesas = [promesa1, promesa2, promesa3];

// El metodo .any() del objeto Promise agarra el elemento o elemetos que se cumpla (resolve) primero.
// el metodo .any() acepta un iterable (lista) como parametro.
// Si no se cumple ningun Promise (resolve) devuelve un error "AggregateError".
Promise.any(promesas).then((value) => console.log(value)); // rapido
// Aqui los que hace el metodo .any() se revisar todo el iterable (lista) buscar cual o cuales se cumplienron (resolve) y devolver la que se cumplio primero.
// Luego esa que encontro se utiliza .then() el resultado de la proesa cumplida, en este caso muestra la promesa2 que se cumplio 1º ya que el tienpo que tiene es de 100 milisegundos.

// El uso del metodo .any() sirve para casos en donde sea necesario ver cual promesa de las promesas se cumplio (resolve) primero.





// allSettled

// Se crea la 1º promise que tiene un "resolve" con un 3 (es una promesa resuelta por defecto)
const promise1 = Promise.resolve(3);
// Se crea la 2º promise que tiene una funcion con el parametro "resolve" (no se usa) y "rejected" que tiene un setTimeOut de 100 milisegundos que devuelve la cadena "foo"
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
);

// Se crea una lista que contiene todas la promises que se crearon.
const promises = [promise1, promise2];

// El metodo .allSettled() del objeto Promise agarra los elemetos que se cumplan (resolve) o no se cumplan (rejected).
// el metodo .allSettled() acepta un iterable (lista) como parametro.
Promise.allSettled(promises).then((results) =>
// Se utiliza el .forEach() para mirar por medio de una funcion el estado de cada uno de los resultados de cada promesa si se cumplio o no se cumplio.
    results.forEach((result) => console.log(result.status))
    // Los resultados que va a mostrar son "fulfilled" si se cumplio la promesa y "rejected" si no se cumplio la promesa.
);

// El uso del metodo .allSettled() sirve para ver que promesas de una lista se cumplieron o no.