// Promise es un objeto que funciono como un if, asincronicamente.
// al crear un Promise tiene dos parametros resolve 

/* const ejemploPromesa = new Promise((resolve, reject) => {
    var edad = 1
    if (edad > 18) {
        resolve("puede entrar")
    } else {
        reject("no puede entrar")
    }
})

ejemploPromesa.then(resolve => {
    console.log(resolve);
})
.then(() => {
    console.log("termine");
})
.catch(reject => {
    console.error(reject);
})
.finally(() => {
    console.log("fin fin");
}) */

saludar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hola "+nombre);
            resolve(nombre)
        },1000)
    })
}

hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Bla bla bla");
            resolve(nombre)
        },2000)
    })
}

despedir = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios "+nombre);
            resolve()
        },1000)
    })
}

console.log("inicia proseso");
saludar("Javier")
.then(hablar)
.then(despedir)
.then(()=>{
    console.log("fin del proceso");
})