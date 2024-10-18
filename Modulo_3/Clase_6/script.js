const nuevoPost = {
    title: "Mi Primer Post",
    body: "Este es el contenido de mi primer post",
    userId: 1
};

fetch("http://jsonplaceholder.typicode.com/post", {
    method: "POST",
    body: JSON.stringify(nuevoPost),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
})
.then(function (response) {
    if (!response.ok) {
        throw Error(response.json());
    }
    return response.json();
})
.then(data => {
    console.log("Datos Recibidos: " + data);})
.catch(error => console.error("Error" + error));
