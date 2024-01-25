// Crear un array vacío para la lista de compras
let lista_compras = []

// Agregar leche, pan y manzanas a la lista
lista_compras.push("Leche", "Pan", "Manzanas")

// Actualizar pan con bananas y huevos
lista_compras[1] = "Bananas"
lista_compras.push("Huevos")

// Remover el último elemento del array y mostrar en consola
let ultimo_elemento = lista_compras.pop()
console.log("Elemento removido:", ultimo_elemento)

// Ordenar la lista alfabéticamente
lista_compras.sort()

// Encontrar y mostrar el índice del valor "Leche"
let index_leche = lista_compras.indexOf("Leche")
console.log("Índice de 'Leche':", index_leche)

// Después de bananas, agregar zanahorias y lechuga
let index_bananas = lista_compras.indexOf("Bananas")
lista_compras.splice(index_bananas + 1, 0, "Zanahorias", "Lechuga")

// Crear una nueva lista conteniendo jugo y pop
let nueva_lista = ["Jugo", "Pop"]

// Combinar ambas listas, agregar la nueva lista dos veces al final
lista_compras = lista_compras.concat(nueva_lista, nueva_lista)

// Obtener el último valor de index de "Pop" y mostrar en consola
let ultimo_index_pop = lista_compras.lastIndexOf("Pop")
console.log("Último índice de 'Pop':", ultimo_index_pop)

// Mostrar la lista final
console.log("Lista final:", lista_compras)
