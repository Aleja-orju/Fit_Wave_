
//Desarrollo ejercicio 1

// Declaración de Variables
let nombreUsuario = "bragranav"; // Nombre de usuario como string
let edad = 25; // Edad como número
const estaActivo = false; // Estado activo como booleano

// Creación del objeto producto
const producto = {
    nombre: "Camisa Fitwave", // Nombre del producto
    Precio: 50000, // Precio del producto
    Disponible: true // Disponibilidad del producto
};

// Pruebas para verificar que todo funciona
console.log("Punto 1")
console.log("Nombre de usuario:", nombreUsuario);
console.log("Edad:", edad);
console.log("¿Está activo?", estaActivo);
console.log("Detalles del producto:", producto);


//Desarrollo ejercicio 2

console.log()
console.log("Punto 2")

//Verificar la edad
if (edad >= 18){
    console.log("El usuario tiene: ", edad," años. Es mayor de edad")
}else {
    console.log("Es usuario es menor de edad, ", edad)
}

//Comparar precios
let precio1=100;
let precio2=150;

if (precio1>precio2){
    console.log("El valor menor es el precio 2: ",precio2);
}else {
    console.log("El valor menor es el precio 1: ",precio1);
}

//Bucle del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log(i) // Imprime el número actual
}


//Desarrollo ejercicio 3
console.log()
console.log("Punto 3")
//Una función tradicional que salude al usuario
function saludar (nombre) {
    console.log(`Hola ${nombre}`); // Imprime un saludo con el nombre proporcionado
}
saludar("Jonathan"); // Prueba de la función

//Una función flecha que calcule el total con impuesto
let total = (valor, impuesto)  => {
        let total
        impuesto = impuesto / 100
        total = valor + (valor * impuesto)  // Calcula el total incluyendo el impuesto
        console.log(`El valor total a pagar ya con el impuesto de iva incluido es $${total}`)
}
total(1000000,19) // Prueba de la función

//Una función que reciba un callback simple
const PAISES = ['Colombia', 'Argentina', 'Brasil']
function agregarPais (lista, callback){
    lista.push ('Perú'); // Agrega el país a la lista
    callback(lista); // Llama al callback con la lista actualizada
}
//Prueba de la función agregarPais
agregarPais(PAISES, function(lista) {
    console.log(`He agregado un país al array y ahora es de ${lista.length} elementos`);
})

//Desarrollo ejercicio 4
console.log()
console.log("Punto 4")

// Convertir de objeto a string JSON
const usuario = { 
    nombre: "Alejandra",
    edad: 19, 
    carrera: "Ingeniería Mecatrónica",
    gustos: ["programación", "arte", "música"],
    estudianteActivo: true
};

// Conversión del objeto usuario a JSON
const usuarioJSON = JSON.stringify(usuario);
console.log("El usuario convertido a JSON: ", usuarioJSON); // Imprime el JSON

// Creación de una promesa simple que se resuelva después de 2 segundos
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta después de 2 segundos");
    }, 2000); // Resuelve la promesa después de 2 segundos
});

// Uso de la promesa
miPromesa
    .then((resultado) => {
        console.log(resultado); // Imprime el resultado cuando la promesa se resuelve
    })
    .catch((error) => {
        console.error("Error en la promesa:", error); // Imprime el error si la promesa falla
    });
