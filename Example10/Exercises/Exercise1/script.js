function validarUrl() {
    const urlInput = document.getElementById("urlInput").value;
    const resultDiv = document.getElementById("result");

    if (URL.canParse(urlInput)) {
        resultDiv.innerHTML = `<p style="color: green;">La url <strong>${urlInput}</strong> es válida.</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">La url <strong>${urlInput}</strong> no es válida.</p>`;
    }
}