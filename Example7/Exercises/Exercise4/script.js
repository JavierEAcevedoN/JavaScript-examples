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