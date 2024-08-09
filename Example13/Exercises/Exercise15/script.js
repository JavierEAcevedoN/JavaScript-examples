const ContenidoInnerHTML = (id,elementoHTML) => {
    setTimeout(() => {
        const elemento = document.getElementById(id);
        // setHTML ya no esta disponible asi que se usa innerHTML
        elemento.innerHTML = elementoHTML
    },2000)
};
ContenidoInnerHTML("mi_elemento","<p>Otro parrafo</p>");