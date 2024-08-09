const eliminarClases = (id, ...clases) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        for (let i = 0; i < clases.length; i++) {
            elemento.classList.remove(clases[i]);
        }
        console.log(
            `El elemento con la id ${id}, se le eliminaron las siguientes clases: ${clases}`
        );
    }, 2000);
};
eliminarClases("mi_elemento", "clase_1", "clase_3", "clase_6");