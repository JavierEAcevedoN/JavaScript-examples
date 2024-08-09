const elemento = document.getElementById("mi_elemento")

// classList se utiliza para manipular las clases de un elemento.
// El metodo de "length" de classList se utiliza para indicar cuantas clases tiene el elemento.
console.log(elemento.classList.length)

for (let i = 0; i < elemento.classList.length; i++) {
    // El metodo de "item" de classList se utiliza para indicar un indice de la clase y devuelve el nombre de la clase.
    console.log(elemento.classList.item(i))
}

// El metodo de "contains" se utiliza para indicar si el elemento tiene la clase que le pases.
console.log(elemento.classList.contains("clase_2"))

// El metodo de "add" se utiliza para agregar una nueva clase al elemento.
setTimeout(() => {
    elemento.classList.add("clase_4")
    elemento.classList.add("clase_5")
},2000)

// El metodo de "remove" se utiliza para eliminar una clase del elemento.
setTimeout(() => {
    elemento.classList.remove("clase_2")
    elemento.classList.remove("clase_3")
},4000)

// El metodo de "toggle" se utiliza para alternar la clase del elemento.
// Se refiere a que si el elemento tiene la clase que le pases la quita y viceversa.
setTimeout(() => {
    elemento.classList.toggle("clase_1")
},6000)

// El "toggle" se le puede pasar un parametro adicional para indicar si al agregar la clase que le pase.
// Se agrege si no la tiene, o no agrege nada si ya la tiene.
// O indicarle si quitar la clase si la tiene, o no hacer nada si no la tiene.
setTimeout(() => {
    elemento.classList.toggle("clase_1", false)
    // Se puede ver que como el elemento no tiene la clase_1 no hace nada.
    elemento.classList.toggle("clase_2", true)
    // Se puede ver que como el elemento no tiene la clase_2 y la agrega.
},8000)

// El metodo de "replace" se utiliza para reemplazar una clase por otra.
setTimeout(() => {
    // En el primer parametro se pasa la clase que se va a remplazar.
    // Y en el segundo parametro se pone la clase que se va a poner.
    elemento.classList.replace("clase_5", "clase_3")
},10000)