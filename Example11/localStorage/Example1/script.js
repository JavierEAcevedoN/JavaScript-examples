// localStorage se utiliza para guardar valores en el navegador.
// Los datos guadados en localStorage se pueden compartir entre paginas web y los datos guardados se mantienen hasta que se cierra el navegador.
const crearDivBtn = document.getElementById("crear_div");
const cambiarColorBtn = document.getElementById("cambiar_color");
const miDiv = document.getElementById("mi_div");
const miH1 = document.getElementById("mi_h1");

if (localStorage.getItem("elementos_mi_div") != null) {
    // Para recuperar datos de localStorage se utiliza el metodo getItem.
    // En el parametro se pone la key del dato del que se quiere sacar la informacion.
    miDiv.innerHTML = localStorage.getItem("elementos_mi_div");
    // Y par sacar la informacion de texto plano utilizar un metodo que convierta el dato.
}

crearDivBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub">
    `;
    miDiv.appendChild(div);
    // Para guardar datos en localStorage se utiliza el metodo setItem.
    // El primer parametro se pone la key del dato.
    // El segundo paraametro se pone lo que se va a guaradar.
    localStorage.setItem("elementos_mi_div", miDiv.innerHTML);
    // Se recomienda que cuando se valla a guardar algun dato se guarde como cadena de texto plano.
});

if (localStorage.getItem("color_mi_h1") != null) {
    miH1.style.color = localStorage.getItem("color_mi_h1");
}

cambiarColorBtn.addEventListener("click", () => {
    const colores = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];
    const colorR = colores[Math.floor(Math.random() * colores.length)];
    miH1.style.color = colorR;
    localStorage.setItem("color_mi_h1", colorR);
});