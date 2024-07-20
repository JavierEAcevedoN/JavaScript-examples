// Ejemplo de un objeto
var carro = {
    marca: "Mazda",
    referencia: "3",
    modelo: 2000,
    partes: ["puertas","llantas","espehos"],
    frenos : {
        tipo: "ABS",
        costo: 2315
    },
    encender:() => console.log("Enciende el motor")
}

console.log("Descomponer objetos");
var camper = {
    nombre: "Javier Acevedo",
    edad: 17,
    grupo: "U3",
    direccion: "Calle 3",
    mejor_amigo: {
        nombre: "David Leonardo",
        edad: 20
    }
}

// Poner dentro de las llaves las componentes que se quieren extraer del objeto.
const {grupo, edad} = camper;
// Al poner un "=" en la variable se pone un valor predeternimado por si el objeto llamado no lo tiene.
const {direccion = "Calle 1"} = camper;
// Los ":" se utilizan para ponerle un alias a esa variable. 
const {nombre : nombre1} = camper;
// Para extraer un objeto dentro de un objeto.
const {mejor_amigo : {nombre : nombre2, edad : edad1}} = camper;

console.log(edad);
console.log(direccion);
console.log(nombre1);
console.log(grupo);

console.log(nombre2);
console.log(edad1);

console.log("Descomponer objeto con una funcion");
// Extraer el nombre.
function conocer_nombre({nombre}) {
    console.log(nombre);
}
conocer_nombre(camper);

console.log("Spread");
// Operador spread (...) sirve para extraer propiedades de un objeto.
console.log("Descomponer propiedades faltantes");
var silla = {
    altura: 150,
    color: "Rojo",
    material: "Madera"
}

const {color, altura, ...otros} = silla;
// se utiliza los (...) para extraer las propiedades del objeto, en este caso se extraen las propiedades que no se llamaron.

console.log(color);
console.log(altura);
console.log(otros);
// se puede ver que se imprime la propiedad de material.

console.log("Añadir otras propiedades");
var silla2 = {...silla, numerosPatas: 4};
// Se utiliza los (...) para traer las propiedades de la variable silla a silla2 y se le agrega el numeroPatas.
console.log(silla2);

console.log("Concatenar");
var objetoConcatenado = {...silla, ...camper};
// Se utiliza los (...) para traer las propiedades de la variable silla y camper y unirlos en una variable.
console.log(objetoConcatenado);

console.log("Clonar objeto");
var gorra = {
    marca: "Gef",
    color: "Negro"
}

var gorra2 = {...gorra};
// Se utiliza los (...) para traer las propiedades de la variable gorra y replicarlos en la variable gorra2.
console.log(gorra2);

gorra2.talla = "L";
// Se le agrega una nueva propiedad a la variable gorra2 que es la talla.

console.log(gorra);
console.log(gorra2);

console.log("Conversion de objeto a JSON");

// Esta funcion se utiliza para remplazar el valor del objeto que se ingresa.
// key sirve para la key de la propiedad del objeto.
// value sirve para el valor de la propiedad del objeto.
ejemploRplacer = (key,value) => {
    if(key === "marca"){
        return value + " C:";
    } else {
        return value;
    }
}

// stringify sirve para convertir un odjeto de JavaScript a JSON.
// El parametro value sirve para ingresar el objeto que se va a convertir.
// El parametro replacer sirve para convertir el valor del objeto (opcional).
// El parametro space sirve para la identacion del archivo.
var gorra3 = JSON.stringify(gorra,ejemploRplacer,4);
console.log(gorra);
console.log(gorra3);

console.log("Conversion de JSON a objeto");

// parse sirve para converdir un objeto de JSON a JavaScript.
// El parametro text sirve para ingresar el texto del JSON que se va a convertir.
// El parametro reviver sirve para convertir el valor del objeto (opcional).
var gorra3_objeto = JSON.parse(gorra3);
console.log(gorra3_objeto);