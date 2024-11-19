// Paso 1: Definir el perfil en formato JSON
const perfilJSON = `{
    "nombre": "Alejandra Orjuela Torres",
    "edad": 19,
    "lenguajesFavoritos": ["Python", "JavaScript", "Java"],
    "proyectos": [
        {
            "nombre": "Pocket's Library",
            "descripcion": "Una app que permitía controlar los préstamos en las bibliotecas y al mismo tiempo que le permitía a los usuarios guardar reseñas de los libros que leían"
        },
        {
            "nombre": "Arcana Sculptor",
            "descripcion": "Un entorno de desarrollo básico que permite crear mapas de generación procedimental y crear mobs según los biomas que existen en el mapa generado"
        }
    ],
    "buscandoTrabajo": true
}`;

// Paso 2: Convertir el JSON a un objeto JavaScript e imprimirlo
const perfil = JSON.parse(perfilJSON);
console.log("Nombre:", perfil.buscandoTrabajo);
console.log("Lenguajes favoritos:", perfil.lenguajesFavoritos.join(", "));

// Paso 3: Actualizar el objeto agregando un nuevo lenguaje de programación
perfil.lenguajesFavoritos.push("C++");
const perfilActualizadoJSON = JSON.stringify(perfil, null, 2);
console.log("Perfil actualizado en JSON:", perfilActualizadoJSON);

fetch("https://jsonplaceholder.typicode.com/users/1")
.then (Response => Response.json())
.then (data => console.log(data))
.catch (error => console.error("Error:", error));

