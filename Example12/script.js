// El DOM es la manipulacion de la pagina web (HTML) por medio de JavaScript.
// Para obtener los elementos del DOM se utiliza lo siguiente:
const my_id = document.getElementById("my_id");
// Se utiliza "getElementById" para agarrar el elemento del HTML por medio de la id de este.
// Para manipular el elemento del HTML se utiliza lo siguiente:
setTimeout(() => {
    // "textContent" sirve para cambiar el contenido del elemento selecccionado.
    my_id.textContent = "My ID";
    setTimeout(() => {
        // "innerHTML" sirve para cambiar el contenido del elemento seleccionado, incluso si contiene etiquetas HTML.
        // Ya que si las aplica a diferencia de "textContent" que solo lo interpreta como texto plano.
        my_id.innerHTML = "<strong>My ID</strong>";
    }, 2000);
}, 2000);
const my_class = document.getElementsByClassName("my_class");
// Se utiliza "getElementsByClassName" para agarrar todos los elementos del HTML que tengan la misma clase.
setTimeout(() => {
    for (let i = 0; i < my_class.length; i++) {
        my_class[i].textContent = "My Class"
    }
    setTimeout(() => {
        for (let i = 0; i < my_class.length; i++) {
            my_class[i].innerHTML = "<strong>My Class</strong>"
        }
    },2000)
},2000)
// Se utiliza "getElementsByTagName" para agarrar todos los elementos del HTML que sean del mismo elemento.
const my_tag = document.getElementsByTagName("span");
setTimeout(() => {
    for (let i = 0; i < my_tag.length; i++) {
        my_tag[i].textContent = "My Tag"
    }
    setTimeout(() => {
        for (let i = 0; i < my_tag.length; i++) {
            my_tag[i].innerHTML = "<strong>My Tag</strong>"
        }
    },2000)
},2000)
// Ademas se pueden manipular los estilos de los elementos.
// Para eso se utiliza lo siguiente:
const my_id_css = document.querySelector("#my_id_css")
// Se utiliza "querySelector" para agarrar el elemento del HTML que tenga el mismo selector (CSS).
// Para el anterior recomiendo que el selector que se indique sea una ID (#)
setTimeout(() => {
    my_id_css.style.color = "green";
},2000)
const my_class_css = document.querySelectorAll(".my_class_css")
// Se utiliza "querySelectorAll" para poder agarrar todos los elemento del HTML que tengan el mismo selector (CSS).
// Para el anterior recomiendo que el selector que se indique sea una Clase (.)
setTimeout(() => {
    for (let i = 0; i < my_class_css.length; i++) {
        my_class_css[i].style.color = "orange";
    }
},2000)