const alternarClase = (id, clase) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        elemento.classList.toggle(clase);
        console.log(
            `El elemento con la id ${id}, se alterno la siguiente clase: ${clase}`
        );
    }, 2000);
};
alternarClase("mi_elemento", "clase_1");