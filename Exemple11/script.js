let pagina = 1;
const botonAnterior = document.getElementById("boton-anterior");
const botonSiguiente = document.getElementById("boton-siguiente");

botonSiguiente.addEventListener("click", () => {
    if (pagina < 1000) {
        pagina++;
        cargarPeliculas();
    }
});
botonAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina--;
        cargarPeliculas();
    }
});
const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=552681f63887313aafb6afe891cba218&language=es-MX&page=${pagina}`
        );
        console.log(respuesta);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();

            let peliculas = "";
            datos.results.forEach((pelicula) => {
                peliculas += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="poster">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
            `;
            });
            document.getElementById("con_peliculas").innerHTML = peliculas;
        } else if (respuesta.status === 401) {
            console.log("pusiste la llave mal");
        } else if (respuesta.status === 404) {
            console.log("La pelicula que buscas no existe");
        } else {
            console.log("Hubo un error y no sabemos que paso");
        }
    } catch (error) {
        console.log(error);
    }
};
cargarPeliculas();
