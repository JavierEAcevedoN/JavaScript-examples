var conjunto = new Set();

// Añadir elementos al set
conjunto.add("Martillo");
conjunto.add("Destornillador");
conjunto.add("Martillo");
// No se añade el elemento ya que un set no puede contener valores duplicados.
console.log(conjunto);

// Recorrer el conjunto.
conjunto.forEach(element => {
    console.log(element);
});

// Acceder al elemento del set.
console.log(conjunto.has("Martillo"));

// Eliminar elementos del set.
conjunto.delete("Destornillador");
console.log(conjunto);