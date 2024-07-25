var tareas = [
    {
        nombre: "Tarea de ingles",
        descripcion: "Presente continuo",
        responsable: "Javier",
        subtareas: [
            {
                nombre: "Que es un gerunt?",
                descripcion: "Buscar que es",
                estado: "Pendiente",
            }
        ],
        estado: "Pendiente",
    },
    {
        nombre: "Tarea de matamaticas",
        descripcion: "Resolver los 5 polinomios que dejaron en clase",
        responsable: "Hugo",
        subtareas: [
            {
                nombre: "Polinomios",
                descripcion: "Hacer los polinomios y enviarlos por el classroom",
                estado: "Completado",
            }
        ],
        estado: "Completado",
    },
    {
        nombre: "Tarea de español",
        descripcion: "Hacer un ensayo",
        responsable: "Angel",
        subtareas: [
        ],
        estado: "Completado",
    },
];

var verificaraTareas = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (tareas.length <= 0) {
            reject(new Error("Hubo un error en cargar las tareas"));
        } else {
            resolve(tareas);
        }
    }, 3000);
});

async function cargarTareas() {
    let tareasCargadas = await verificaraTareas.then();
    try {
        console.log(tareasCargadas);
    } catch (error) {
        console.log(error);
    }
}

function agregarTareas() {
    let nuevaTarea = {};
    nuevaTarea.nombre = prompt("Ingresa el nombre de la tarea");
    nuevaTarea.descripcion = prompt("Ingresa la descripcion de la tarea");
    nuevaTarea.responsable = prompt("Ingresa el responsable de la tarea");
    let choice = -1;
    choice = prompt("Quieres agregar subtareas? (1) si (0) no");
    if (choice == 1) {
        nuevaTarea.subtareas = [];
        while (true) {
            let repetir = -1;
            let nuevaSubtarea = {};
            nuevaSubtarea.nombre = prompt("Ingresa el nombre de la sub-tarea");
            nuevaSubtarea.descripcion = prompt(
                "Ingresa la descripcion de la sub - tarea"
            );
            let estado = -1;
            estado = Number(
                prompt(
                    "Ingresa el estado de la sub-tarea: (1) Completado (2) Pendiente"
                )
            );
            if (estado == 1) {
                nuevaSubtarea.estado = "Completado";
            } else if (estado == 2) {
                nuevaSubtarea.estado = "Pendiente";
            } else {
                alert("Esa no es una opcion");
                return;
            }
            nuevaTarea.subtareas.push(nuevaSubtarea);
            alert("Se a agregado la subtarea");
            repetir = Number(
                prompt("Quieres agregar otra subtarea? (1) si (0) no")
            );
            if (repetir == 0) {
                break;
            }
            if (repetir == 1) {
                NaN;
            } else {
                alert("Esa no es una opcion");
                return;
            }
        }
        nuevaTarea.estado = "Pendiente";
        tareas.push(nuevaTarea);
        alert("Se a agregado la tarea");
        return;
    } else if (choice == 0) {
        nuevaTarea.estado = "Pendiente";
        tareas.push(nuevaTarea);
        alert("Se a agregado la tarea");
        return;
    } else {
        alert("Esa no es una opcion");
        return;
    }
}

function eliminarTareas() {
    if (tareas.length <= 0) {
        alert("No hay tareas que eliminar")
        return
    }
    let indice = Number(
        prompt(`Ingresa el indice de la tarea que quieres eliminar (1-${(tareas.length)})`)
    );
    if (0 < indice && indice <= tareas.length) {
        tareas.splice(indice-1, 1);
    } else {
        alert("Ese indice no existe")
        return
    }
}

function listarTareas() {
    if (tareas.length <= 0) {
        alert("No hay tareas que listar")
        return
    }
    console.clear()
    tareas.forEach((tarea) => {
        console.log(" ");
        console.log("Nombre : "+tarea.nombre);
        console.log("Descripcion : "+tarea.descripcion);
        console.log("Responsable : "+tarea.responsable);
        console.log("Subtareas:");
        tarea.subtareas.forEach(subtarea => {
            console.log("   Nombre : "+subtarea.nombre);
            console.log("   Descripcion : "+subtarea.descripcion);
            console.log("   Estado : "+subtarea.estado);
        });
        console.log("Estado : "+tarea.estado);
    });
}

while (true) {
    let choice = -1;
    choice = Number(
        prompt(`
    (0) Salir del programa.
    (1) Agregar tareas.
    (2) Eliminar tareas.
    (3) Listar tareas.
    (4) Cargar tareas.
    `)
    );
    if (choice == 0) {
        break;
    } else if (choice == 1) {
        agregarTareas();
    } else if (choice == 2) {
        eliminarTareas();
    } else if (choice == 3) {
        listarTareas();
    } else if (choice == 4) {
        cargarTareas();
        break
    } else {
        alert("Esa no es una opcion");
    }
}