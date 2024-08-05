const clase_parrafo = document.querySelectorAll(".parrafo");
setTimeout(() => {
    for (let i = 0; i < clase_parrafo.length; i++) {
        clase_parrafo[i].style.fontFamily = "'Times New Roman', Times, serif";
    }
}, 2000);