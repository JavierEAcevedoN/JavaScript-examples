const nombreNodo = (id) => {
    const elemento = document.getElementById(id);
    console.log(`El elemento con la id ${id} el nombre del nodo es "${elemento.nodeName}"`);
};
nombreNodo("mi_elemento");