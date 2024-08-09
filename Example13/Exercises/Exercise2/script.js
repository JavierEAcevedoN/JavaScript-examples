const nDeClases = (id) => {
    const elemento = document.getElementById(id);
    const Nclases = elemento.classList.length;
    console.log(`El elemento con la id ${id} tiene ${Nclases} clases`);
};
nDeClases("mi_elemento");