const mi_clase = document.getElementsByClassName("mi_clase");
setTimeout(() => {
    for (let i = 0; i < mi_clase.length; i++) {
        mi_clase[i].style.backgroundColor = "lightgreen";
    }
},2000);