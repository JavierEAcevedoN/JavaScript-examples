// "setTimeout" sirve para hacer procesos asincrono no bloqueantes, lo que significa que al llamarse ese proceso se ejecutara despues del tiempo indicado sin interferiri en los demas procesos.
// el parametro nombre sirva para poner el nombre.
// El parametro "callback" sirve para pasarle una funcion para ejecutarla despues de un tiempo.
saludar = (nombre, callback) => {
    setTimeout(() => {
        console.log("Hola "+nombre);
// La funcion callback recive el parametro del nombre.
        callback(nombre)
    }, 4000)
}

// Aqui se llama a la funcion saludar y se pasa el paraetro de nombre "Javier" y el parametro de callback que es una funcion.
saludar("Javier", (nombre) => {
    console.log("se fue "+nombre);
})





saludar = (nombre, callback) => {
    setTimeout(() => {
        console.log("Hola "+nombre);
        callback(nombre)
    }, 1000)
}

hablar = (otroCallback) => {
    setTimeout(() => {
        console.log("bla, bla, bla");
        otroCallback()
    }, 2500)
}

despedir = (nombre) => {
    setTimeout(() => {
        console.log("Adios "+nombre);
    }, 1000)
}

saludar("Javier",(nombre)=>{
    hablar(()=>{
        hablar(()=>{
            hablar(()=>{
                despedir(nombre)
            })
        })
    })
})