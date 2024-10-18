//EJERCICIO 1
const perfil= {
    "nombre": "Brayan Granados",
    "edad": 26,
    "lenguajesFavoritos": ["HTML", "JS", "Python"],
    "proyectos": [
    {
        "nombre": "Fit Wave" ,
        "descripcion": "Ecomerce para ofrecer al pucblico ropa deportiva"
    },
    {
        "Pet nav": "" ,
        "descripcion": "Pagina web para ofrecer servicios a los dueños de mascotas"
    }],
    "buscandoTrabajo": true
};

//const perfilJSON = JSON.parse(perfil);

//EJERCICIO 2
console.log("Nombre: " + perfil.nombre);
console.log("Lenguajes Favoritos: " + perfil.lenguajesFavoritos );

//EJERCICIO 3
perfil.lenguajesFavoritos.push("JavaScript");

const actualizar = JSON.stringify(perfil.lenguajesFavoritos);

console.log("Lenguaje Favorito: " + actualizar);

//EJERCICIO 4
fetch ("https://jsonplaceholder.typicode.com/users/1",{
    method: "GET",
    headers: {"content-type": "application/json"}
})
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("DATOS: ", data.name);
    })
    .catch(error => {
        console.error("Error de conexión:", error); // Manejo de errores
    });

//EJERCICIO 5
const nuevoPost = {
    title: "Mi Primer Post",
    body: "Este es el contenido de mi primer post",
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(nuevoPost),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
})
.then(response => {
    if (!response.ok) {
        throw Error("Error en la red: " + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log("Datos Recibidos: ", data);
})
.catch(error => console.error("Error" , error));
