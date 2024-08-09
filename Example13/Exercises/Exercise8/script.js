const alternarClase = (id, clase, booleano) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        elemento.classList.toggle(clase, booleano);
        if (booleano) {
            console.log(
                `El elemento con la id ${id}, se agrego la siguiente clase: ${clase}`
            );
        } else {
            console.log(
                `El elemento con la id ${id}, se elimino la siguiente clase: ${clase}`
            );
        }
    }, 2000);
};
alternarClase("mi_elemento", "clase_1", false);