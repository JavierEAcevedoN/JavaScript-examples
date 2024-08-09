const nombreNodo = (id) => {
    const elemento = document.getElementById(id);
    console.log(`El elemento con la id ${id} el contenido del elemento es "${elemento.textContent}"`);
};
nombreNodo("mi_elemento");