const alternarClase = (id, claseOld, claseNew) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        elemento.classList.replace(claseOld, claseNew);
        console.log(
            `El elemento con la id ${id}, se remplaso la clase ${claseOld} por la clase ${claseNew}`
        );
    }, 2000);
};
alternarClase("mi_elemento", "clase_1", "clase_5");