// Pedir al usuario sus datos (name, last_name, document_number)
// Guardar los datos del usuario como objeto, 
// Crear un array para las verduras(agregar 3 verduras)
// Crear un array para las frutas(agregar 3 frutas)
// Agregar los arrays al objeto de usuario del paso 2
// Eliminar el ultimo elemento de verduras
// Eliminar el primer elemento de las frutas
// Mostrar como objeto usuario en la consola del navegador

// Pedir al usuario sus datos
const user_name = prompt('Ingrese su nombre:');
const last_name = prompt('Ingrese su apellido:');
const document_number = prompt('Ingrese su número de documento:');

// Guardar los datos del usuario como objeto
const usuario = {
  user_name: user_name,
  last_name: last_name,
  document_number: document_number
};

// Crear arrays para verduras y frutas
const verduras = ['zanahoria', 'cebolla', 'ajo'];
const frutas = ['manzana', 'banana', 'uva'];

//  Agregar los arrays al objeto de usuario
usuario.verduras = verduras;
usuario.frutas = frutas;

// Prueba antes de las modificaciones en caso de quererse probar comentar lo posterior al console.log
// console.log('Usuario antes de las modificaciones:', usuario);

// Eliminar el último elemento de verduras
usuario.verduras.pop();

// Eliminar el primer elemento de frutas
usuario.frutas.shift();

//  Resultado final
console.log('Resultado Final:',usuario);
