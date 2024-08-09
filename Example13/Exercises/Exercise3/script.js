const elemento = document.getElementById("mi_elemento");
console.log(
    "el elemento con la id 'mi_elemento' tiene las siguientes clases: "
);
for (let i = 0; i < elemento.classList.length; i++) {
    console.log(elemento.classList.item(i));
}