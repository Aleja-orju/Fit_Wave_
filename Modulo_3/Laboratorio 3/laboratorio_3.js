//Aquí desarrollaremos el laboratorio tres
//en la medida de lo posible sería bueno dejar comentado cada ejercicio para que sea más fácil 
//identificar cada punto al momento de arreglar el PDF
//según lo acordado Brayan hace el primer punto, aleja hace el segundo y Jonathan el tercer punto
//El cuarto punto está por definir para hacer un punto cada uno del ejercicio 4.

//Desarrollo ejercicio 3

//Declaración de Variables
let nombreUsuario = "bragranav";
let edad = 25;
const estaActivo = false;
const producto = {
    nombre: "Camisa Fitwave",
    Precio: 50000,
    Disponible: true
}

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
    console.log(i)
}

//Una función tradicional que salude al usuario
function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}
saludar("Jonathan")

//Una función flecha que calcule el total con impuesto

let total = (valor, impuesto)  => {
        let total
        impuesto = impuesto / 100
        total = valor + (valor * impuesto)
        console.log(`El valor total a pagar ya con el impuesto de iva incluido es $${total}`)
}

total(1000000,19)

//Una función que reciba un callback simple
const PAISES = ['Colombia', 'Argentina', 'Brasil']

function agregarPais (lista, callback){
    lista.push ('Perú')
    callback(lista)
}

agregarPais(PAISES, function(lista) {
    console.log(`He agregado un país al array y ahora es de ${lista.length} elementos`)
})

// Objeto para convertir objeto a string JSON
const usuario = { 
    nombre: "Alejandra",
    edad: 19
};

// Conversi n a JSON
const usuarioJSON = JSON.stringify(usuario);
console.log("El objeto convertido a JSON: ", usuarioJSON)

// Promesa simple
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta después de 2 segundos");
    }, 2000);
});

// Usar la promesa
miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Error en la promesa:", error);
    });