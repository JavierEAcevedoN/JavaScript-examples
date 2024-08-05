const mi_etiqueta_li = document.getElementsByTagName("li");
setTimeout(() => {
    for (let i = 0; i < mi_etiqueta_li.length; i++) {
        mi_etiqueta_li[i].textContent = `Elemento de la lista N°${i + 1}`;
    }
}, 2000);