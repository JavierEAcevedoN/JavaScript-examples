var lista = {
    tamano: 3,
    nodo_initial: {
        valor: 1,
        siguiente_nodo: {
            valor: 2,
            siguiente_nodo: {
                valor: 3,
                siguiente_nodo: null
            }
        }
    }
}
console.log("Acceder en un objeto");
// Acceder al valor 3.
console.log(lista.nodo_initial.siguiente_nodo.siguiente_nodo.valor);

// Lista constante.
const dulces = ["Chocolate", "Barrilete", "Masmelo"];
console.log("Acceder al valor");
console.log(dulces[1]);

console.log("Modificar elemento");
dulces[3] = "Paleta";
// La lista se puede modificar aunque sea constante, porque "const" solo cuenta el tipo de dato, no el contenido.
// Lo que sigifica que no dejaria cambiar el dato de lista a numero, string, etc.
console.log(dulces);

console.log("Agregar elementos a la lista");
// Agrega el elemento al final de la lista.
dulces.push("Menta");
console.log(dulces);
// Agrgar el elemento al principio de la lista.
dulces.unshift("Fresa");
console.log(dulces);

console.log("Remover elementos de la lista");
// Remueve el ultimo elemento de la lista.
dulces.pop();
console.log(dulces);
// Remueve el primero elemento de la lista.
dulces.shift();
console.log(dulces);
// Remueve el elemento indicado de la lista.
dulces.splice(1, 1);
console.log(dulces);

console.log("Otras funciones de la lista");
console.log("Largo de la lista");
console.log(dulces.length);

console.log("Convertir lista a string");
console.log(dulces.toString());

console.log("Unir elementos de la lista con separado personalizado");
console.log(dulces.join("-"));

console.log("Buscar indice de un elemento de la lista");
console.log(dulces.indexOf("Masmelo"));

console.log("Buscar elemento");
console.log(dulces.includes("Masmelo"));

console.log("Ordenar lista");
console.log(dulces.sort());