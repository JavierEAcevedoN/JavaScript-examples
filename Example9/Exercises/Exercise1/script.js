const url = "https://restcountries.com/v3.1/all";
const opciones = {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
};

const consulta = async (url, opciones) => {
    const resultado = await fetch(url, opciones);
    if (resultado.ok) {
        const datos = await resultado.json();
        return datos;
    } else {
        console.error("Hubo un error en la consulta de los datos");
        return [];
    }
};

const menu = async () => {
    const resultadoPeticion = await consulta(url, opciones);
    console.log(resultadoPeticion);
    while (true) {
        let choice = -1;
        choice = Number(
            prompt(`
        (0) Terminar programa.
        (1) Buscar por regiones.
        (2) Ordenar por nombre.
        (3) Terminar programa.
        (4) Terminar programa.
        (5) Terminar programa.
        (6) Terminar programa.
        (7) Terminar programa.
        (8) Terminar programa.
        (9) Terminar programa.
        (10) Terminar programa.
            `)
        );
        switch (choice) {
            case 0:
                return;
            case 1:
                buscarRegiones(resultadoPeticion);
            case 2:
                ordenarPorNombre(resultadoPeticion);
            case 3:
                NaN;
            case 4:
                NaN;
            case 5:
                NaN;
            case 6:
                NaN;
            case 7:
                NaN;
            case 8:
                NaN;
            case 9:
                NaN;
            case 10:
                NaN;
        }
    }
};

const buscarRegiones = (datos) => {
    let choice = -1;
    let regionS = "";
    choice = Number(
        prompt(`
        (0) Regresar.
        (1) Antarctic.
        (2) Oceania.
        (3) Americas.
        (4) Europe.
        (5) Africa.
        (6) Asia.
        `)
    );
    switch (choice) {
        case 0:
            return;
        case 1:
            regionS = "Antarctic";
            break
        case 2:
            regionS = "Oceania";
            break
        case 3:
            regionS = "Americas";
            break
        case 4:
            regionS = "Europe";
            break
        case 5:
            regionS = "Africa";
            break
        case 6:
            regionS = "Asia";
            break
    }
    console.clear()
    datos.forEach((element) => {
        if (element.region == regionS) {
            console.log(element);
        }
    });
};

const ordenarPorNombre = (datos) => {
    console.clear()
        
}

menu();