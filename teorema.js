function calcularHipotenusa(catetoA, catetoB) {
  // Usar los valores proporcionados o solicitar al usuario si no se proporcionan
  const valorCatetoA = catetoA || parseFloat(prompt(`Ingrese el valor del cateto A:`))
  const valorCatetoB = catetoB || parseFloat(prompt(`Ingrese el valor del cateto B:`))

  // Verificar si las entradas son válidas (números)
  if (isNaN(valorCatetoA) || isNaN(valorCatetoB)) {
    alert('Por favor, ingrese valores numéricos válidos.')
    return NaN; // Devolver NaN si las entradas no son válidas
  }

  // Calcular la hipotenusa (c)
  const cuadradoCatetoA = Math.pow(valorCatetoA, 2)
  const cuadradoCatetoB = Math.pow(valorCatetoB, 2)
  const hipotenusa = Math.sqrt(cuadradoCatetoA + cuadradoCatetoB)

  return hipotenusa;
}

// Ejemplo de uso: si proporcionas los valores directamente
const catetoA = 3
const catetoB = 4
const hipotenusa = calcularHipotenusa(catetoA, catetoB)
console.log(`La hipotenusa es: ${hipotenusa}`)

// Ejemplo de uso: si no proporcionas los valores, se solicitarán con prompt
const hipotenusaPrompt = calcularHipotenusa()
if (!isNaN(hipotenusaPrompt)) {
  console.log(`La hipotenusa es: ${hipotenusaPrompt}`)
}
