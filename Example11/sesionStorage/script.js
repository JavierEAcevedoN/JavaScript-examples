// sessionStorage se utiliza para guardar valores en el navegador.
// Los datos guadados en sessionStorage no se pueden compartir entre paginas web.
// Los datos guardados se mantienen hasta que se cierra o se sale del la pagina.
const crearDivBtn = document.getElementById("crear_div");
const cambiarColorBtn = document.getElementById("cambiar_color");
const miDiv = document.getElementById("mi_div");
const miH1 = document.getElementById("mi_h1");

if (sessionStorage.getItem("elementos_mi_div") != null) {
    // Para recuperar datos de sessionStorage se utiliza el metodo getItem.
    // En el parametro se pone la key del dato del que se quiere sacar la informacion.
    miDiv.innerHTML = sessionStorage.getItem("elementos_mi_div");
    // Y par sacar la informacion de texto plano utilizar un metodo que convierta el dato.
}

crearDivBtn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML = `
        <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub">
        `;
    miDiv.appendChild(div);
    // Para guardar datos en sessionStorage se utiliza el metodo setItem.
    // El primer parametro se pone la key del dato.
    // El segundo paraametro se pone lo que se va a guaradar.
    sessionStorage.setItem("elementos_mi_div", miDiv.innerHTML);
    // Se recomienda que cuando se valla a guardar algun dato se guarde como cadena de texto plano.
});

if (sessionStorage.getItem("color_mi_h1") != null) {
    miH1.style.color = sessionStorage.getItem("color_mi_h1");
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
    sessionStorage.setItem("color_mi_h1", colorR);
});
