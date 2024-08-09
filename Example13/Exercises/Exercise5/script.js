const agragarClases = (id, ...clases) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        for (let i = 0; i < clases.length; i++) {
            elemento.classList.add(clases[i]);
        }
        console.log(
            `El elemento con la id ${id}, se le agregaron las siguientes clases: ${clases}`
        );
    }, 2000);
};
agragarClases("mi_elemento", "clase_4", "clase_5", "clase_6");