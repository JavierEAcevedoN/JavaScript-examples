/* 
filter

Crear una función filter que acepte un array y un callback y que:

    -por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    -si dicho callback devuelve true, pushea el elemento a un nuevo array
    -devuelva el array final con los elementos que pasaron el "filtro".
*/

// Este es un modo de replicar el funcionamiento del metodo filter().
filter = (numeros, multiploDe10) => {
    let list = [];
    numeros.forEach((numero) => {
        if (multiploDe10(numero)) {
            list.push(numero);
        }
    });
    console.log(list);
};

const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;
filter(numeros, multiploDe10); // [10, 40, 50]

console.log(numeros.filter((numero) => multiploDe10(numero)));
