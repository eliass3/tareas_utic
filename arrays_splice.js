// Crear un array
let array_numbers = [1, 2, 3, 4, 5];

// Array nuevo para concat
let array_names = ['Juan', 'Carlos', 'Pedro']

// Array para pop
let array_figures = ['cuadrado',  'Triangulo', 'Rombo'] // Ejemplo de array con números

// Mostrar el array original
console.log("Array original:", array_numbers)

// Agregar elementos al array en la posición 2
array_numbers.splice(2, 0, 6, 7)
console.log("Después de agregar elementos en la posición 2:", array_numbers)

// Eliminar elementos desde la posición 3
array_numbers.splice(3, 2)
console.log("Después de eliminar 2 elementos desde la posición 3:", array_numbers)

// Reemplazar elementos en la posición 1
array_numbers.splice(1, 1, 10, 11)
console.log("Después de reemplazar elemento en la posición 1:", array_numbers)

// Eliminar elementos desde la posición 0 hasta el final
// Descomentar en caso de querer probar el array vacío
// array_numbers.splice(0)
// console.log("Después de eliminar todos los elementos:", array_numbers)

// Concatenar arrays
const concat_arrays = array_names.concat(array_numbers)
console.log('Mostrar concatenación:', concat_arrays)

// Crear un nuevo array para usar .pop()
let popped_element = array_figures.pop()
console.log("Elemento eliminado con pop:", popped_element)
console.log("Array después de pop:", array_figures)
