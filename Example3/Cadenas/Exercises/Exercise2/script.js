function distancia(texto1,texto2) {
    let distancia = 0
    let mas_largo = texto1
    if ((texto1.length)<(texto2.length)) {
        mas_largo = texto2
    }
    for (let i = 0; i < mas_largo.length; i++) {
        if (texto1[i] != texto2[i]) {
            distancia++
        } 
    }
    return distancia
}

console.log(distancia("hola", "hola")) // 0 
console.log(distancia("sol", "tol")) // 1 
console.log(distancia("carro", "correr")) // 3
console.log(distancia("hola", "hello")) // 3
console.log(distancia("run", "ran")) // 1
console.log(distancia("sing", "sunga")) // 2