/* 
find

Crear una función find que acepte un array y un callback y que:

    -por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    -devuelva el elemento pasado como argumento del primer callback que devuelva true
    -si ningún callback devuelve true, devuelva undefined
*/

// Este es un modo de replicar el funcionamiento del metodo find().
find = (numeros, multiploDe10) => {
    for (let numero = 0; numero < numeros.length; numero++) {
        const element = numeros[numero];
        if (multiploDe10(element)) {
            console.log(element);
            return
        }
    }
    console.log(undefined);
};

const numeros = [8, 2, 3, 2, 33, 1];
const multiploDe10 = (x) => x % 10 === 0;
find(numeros, multiploDe10); // 40

console.log(numeros.find(x => multiploDe10(x)));