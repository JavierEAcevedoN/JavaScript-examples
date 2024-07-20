console.log("Bucles");

console.log("Bucles controlados");
// For sirve para poder repetir un bucle una cantidad de veces definida
console.log("For");
console.log("For incremento");
for (let i = 0; i < 11; i++) {
    console.log(i);
}

console.log("For decremento");
for (let i = 11; i > 0; i--) {
    console.log(i);
}

console.log("Recorrer lista con for");
// For tambien sirve para recorrer listas
var frutas = ["Manzana","Uva","Banana"];
for(let fruta of frutas) {
    console.log(fruta);
}

console.log("Bucles condicionados");
console.log("While");

console.log("While mientas");
// While sirve para repetir un bucle siempre que la condicion se cumpla
var i = 1;
while (i <= 10) {
    console.log(i++);
}

console.log("While hasta");
// Do while sirve para repetir un bucle hasta que se cumpla la condicion se cumpla (garantiza una ejecucion)
var j = 0;
do {
    console.log(j++);
} while (j <= 10);


// ForEach sirve para recorrer los elementos de una lista y ejecutar una funcion 
console.log("ForEach");
var animales = ["gato","perro","gallina"];
animales.forEach(function(animal) {
    console.log(animal);
});


// Map sirve para recorrer los elementos de una lista y ejecutar una funcion que afecta a esos mismos elementos
console.log("Map");
var animales_mayuscula = animales.map(function(animal) {
    return animal.toUpperCase();
})

animales_mayuscula.forEach(function(animal) {
    console.log(animal);
});