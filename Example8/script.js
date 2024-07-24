// var estudiantes = ["Victor", "Alvaro", "Angel", "Laura"];
var estudiantes = [];
var frutas = ["manzana", "banana", "pera"];

const obtenerEstudiantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (estudiantes.length == 0) {
                reject(new Error("No hay datos"))
            } else {
                resolve(estudiantes);
            }
        }, 3000);
    });
};

/* obtenerEstudiantes().then(res => {
    console.log(res);
}) */

const obtenerFrutas = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frutas);
        }, 3000);
    });
};

/* async function inmprimirCompleto() {
    const resultEstudiantes = await obtenerEstudiantes();
    console.log(resultEstudiantes);
    const resultFrutas = await obtenerFrutas();
    console.log(resultFrutas);
} */

// Uso basico del async await
async function inmprimirEstudiantes() {
    const resultEstudiantes = await obtenerEstudiantes();
    console.log(resultEstudiantes);
}

// Async await con then
async function imprimirFrutas() {
    return await obtenerFrutas().then((res)=>console.log(res))
}

// Async await con reject (errores)
async function imprimirEstudiantesConReject() {
    try {
        const resultEstudiantes = await obtenerEstudiantes();
        console.log(resultEstudiantes);
    } catch (error) {
        console.error(error);
    }
}

// inmprimirCompleto();
imprimirEstudiantesConReject()