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