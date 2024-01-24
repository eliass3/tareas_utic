// Crear array
let numbers = [1, 2, 3, 4, 5]

// Usando la función find para encontrar el primer número mayor que 2
let resultado = numbers.find(function (number) {
  return number > 2
})

console.log(resultado) 

// Funcion que suma 2 numeros
const suma = (num1, num2) => {
    return num1 + num2
}
const result = suma(5, 3)
console.log(result)


// Funcion Nombre y apellido
const full_name = (name, lastname) => {
    return name + lastname
}

const result2 = full_name('Elias', 'Moreno')
console.log(result2)

// Lista super
let list = [ 'pan', 'awa', 'leche']

//Utilizando find
let result_list = list.find(function (full_list) {
    return full_list
})

console.log(result_list)