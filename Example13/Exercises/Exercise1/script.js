const contieneClase = (id, clase) => {
    const elemento = document.getElementById(id);
    const contieneClase = elemento.classList.contains(clase);
    if (contieneClase) {
        console.log(`El elemento con la id ${id} si tiene la clase ${clase}`);
    } else {
        console.log(`El elemento con la id ${id} no tiene la clase ${clase}`);
    }
};
contieneClase("mi_elemento", "clase_2");