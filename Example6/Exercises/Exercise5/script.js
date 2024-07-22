/* 
findIndex

    -Crear una función findIndex que acepte un array y un callback y que:
    -por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    -devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
    -si ningún callback devuelve true, devuelva undefined
*/

// Este es un modo de replicar el funcionamiento del metodo find().
findIndex = (numeros, multiploDe10) => {
    for (let numero = 0; numero < numeros.length; numero++) {
        const element = numeros[numero];
        if (multiploDe10(element)) {
            console.log(numero);
            return
        }
    }
    console.log(undefined);
};

const numeros = [8, 2, 3, 40, 33, 50]
    const multiploDe10 = x => x % 10 === 0
    findIndex(numeros, multiploDe10) // 3

console.log(numeros.findIndex(x => multiploDe10(x)));