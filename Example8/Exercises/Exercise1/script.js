const estudiantes = [
    {
        nombre: "Javier",
        edad: 21,
        contacto: 29312313,
    },

    {
        nombre: "Ignacio",
        edad: 22,
        contacto: 3124331423,
    },

    {
        nombre: "Mariana",
        edad: 32,
        contacto: 32112231211,
    },
];

// menu de seleccion
while (true) {
    choice = -1;
    try {
        // opciones
        choice = Number(
            prompt(`
    Menu general
    ingresa la opcion: 
    (1) Modulo de estudiantes.
    (0) Terminar.`)
        );
    } catch (error) {
        console.error(error);
        break;
    }
    switch (choice) {
        case 0:
            console.log("terminando proceso");
            break;
        case 1:
            CRUD();
    }
}

function CRUD() {
    while (true) {
        choice = -1;
        try {
            // opciones
            choice = Number(
                prompt(`
        Menu general
        ingresa la opcion: 
        (1) Crear estudiante.
        (2) Listar esdidiantes.
        (0) Terminar.`)
            );
        } catch (error) {
            console.error(error);
            return;
        }
        switch (choice) {
            case 0:
                console.log("terminando proceso");
                return;
            case 1:
                Crear_estudiante();
            case 2:
                Listar_estudiantes();
        }
    }
}

function Crear_estudiante() {
    let estudianteNuevo = {};
    var nombre = prompt("Ingresa el nombre del nuevo estudiante").replace(
        /^[a-z]/,
        function (l) {
            return l.toUpperCase();
        }
    );
    var edad = Number(prompt("Ingresa la edad del nuevo estudiante"));
    var contacto = Number(
        prompt("Ingresa el contacto del nuevo estudiante")
    );
    estudianteNuevo.nombre = nombre;
    estudianteNuevo.edad = edad;
    estudianteNuevo.contacto = contacto;
    estudiantes.push(estudianteNuevo);
    return;
}

function Listar_estudiantes() {
    console.clear();
    estudiantes.forEach((estudiante) => {
        const { nombre, edad, contacto } = estudiante;
        console.log("Nombre: " + nombre);
        console.log("Edad: " + edad);
        console.log("Contacto: " + contacto);
    });
    return
}
