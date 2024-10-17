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
.then(res => res.json())
.then(data => {})
.catch(err => console.log(err));