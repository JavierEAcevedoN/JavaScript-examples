document.addEventListener("DOMContentLoaded", () => {
    // addEventListener sirve para agregar un evento que espera a que pase lo indicado y ejecuta una función
    // El parametro "DOMContentLoaded" indica que cuando carge el elemento indicado, en esta caso el HTML, ejecute una función.
    console.log("La página ha sido cargada");
});

const mostrarAlerta = () => {
    alert("Hola, Mundo!");
};

const mostrarAlerta2 = () => {
    alert("Se a modificado el texto");
};

const mostrarAlerta3 = () => {
    alert("Mouse sobre la imagen");
};
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    // El parametro "click" indica que cuando se clicke el elemento indicado (button) ejecute una función.
    console.log("Click");
});

const btn2 = document.getElementById("btn2");
btn2.setAttribute("onclick", "mostrarAlerta4()");
// Se puede utilizar setAttribute para para agregarle el atributo con el evento deseado (onclick) al elemento (button), sin tener que ponerlo desde el HTML.
const mostrarAlerta4 = () => {
    alert("Botón clickeado");
};