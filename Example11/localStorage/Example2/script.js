// como se puede ver se guardo los datos del localStorage, aunque sea en otra pagina.
const miDiv = document.getElementById("mi_div");
const miH1 = document.getElementById("mi_h1");

if (localStorage.getItem("elementos_mi_div") != null) {
    miDiv.innerHTML = localStorage.getItem("elementos_mi_div");
}

if (localStorage.getItem("color_mi_h1") != null) {
    miH1.style.color = localStorage.getItem("color_mi_h1");
}