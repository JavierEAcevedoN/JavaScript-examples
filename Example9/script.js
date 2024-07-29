// XMLHttpRequest
/* // Se utilisa XMLHttpRequest para crear una variable con el metodo para hacer peticiones a un servidor.
const xhr = new XMLHttpRequest();
// El metodo "open" se utiliza para solicitar del servidor.
// En el primer parametor se utiliza "GET" para recibir datos del servidor.
// El segundo parametro se utiliza para poner la URL del servidor de donde se van a aextraer los datos.
// El tercer parametro es para poner si se va a utilizar el asyncronismo (viene en true por defecto).
xhr.open("GET", "https://fakestoreapi.com/products");
// "setRequestHeader" sirve para poner un encabezado de solicitud de HTTP.
xhr.setRequestHeader("Content-Type", "application/json");

// "onload" sirve para ejecutar una funcion cuando se procese la solicitud de la API.
xhr.onload = function () {
    // "status" se utiliza para ver si la solicitud de la API se realizo con exito, ya que el codigo que devuelve es 200 (ok).
    if (xhr.status === 200) {
        // "responseText" sirve para almacenar los datos (formato texto) recibidos de la solicitud en una variable.
        // luego se utiliza "parse" para transformar los detos de texto plano a un archivo JSON y hacer mas facil la manipulacion de este.
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        response.forEach(element => {
            // "price" es para ver uno de los valores que fueron devuletos de la API.
            if (element.price > 110) {
                console.log(element);
            }
        });
    } else {
        // Si la solicitud de la API falla, se imprime el codigo de error.
        console.log("Error: " + xhr.status);
    }
};

// "send" es para mandar la solicitud a la API.
xhr.send(); */

// Fetch
// "Headers" se utiliza para poner el encabezado de la solicitud HTTP.
const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");
// opcines es un objeto que se va a utilizar para un parametro del "fetch".
const opciones = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    // body: JSON.stringify(datos)
};
const url = "https://fakestoreapi.com/products";

// "fetch" es una version mejorada de XMLHttpRequest, ya que este devuelve una promesa.
// El primer parametro es la URL de la API a la que se le va a hacer la solicitud.
// El segundo parametro sirve para la configuracion de la solicitud de la API.
/* fetch(url, opciones)
// Si la promesa se cumple se usa un if para ver si se cumplio la solicitud para pasarlo a un JSON y devolverlo.
    .then((respuesta) => {
        if (respuesta.ok) {
            return respuesta.json();
        }
    })
// Luego imprime el resultado (JSON) en la consola.
    .then((datos) => console.log(datos))
// Si la promesa no se cumple, da un error.
    .catch((error) => console.error("Error: " + error)); */

// Async / await
// Se usa "async" para la funcion "fetch" ya que devulelve una promesa.
const peticion = async (url, opciones) => {
    // "await" se utiliza para esperar a que la promesa se cumpla para asignarla a una variable.
    const respuesta = await fetch(url, opciones);
    if (respuesta.ok) {
        // "await" se utiliza para que espere a convertir el resultado a JSON y pasarlo a la variable datos.
        const datos = await respuesta.json();
        return datos;
    } else {
        // Si la promesa se cumple, pero el estado no es correcto retorna una lista vacia.
        return [];
    }
};

// Esta funcion sirve para ejecutar la funcion anterior y imprimir en la cunsola la peticion.
async function ejecutarPeticion(url, opciones) {
    const resultadoObtenido = await peticion(url, opciones);
    console.log(resultadoObtenido);
}

// Se ejecuta la funcion.
ejecutarPeticion(url, opciones);