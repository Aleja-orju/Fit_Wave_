const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenidos a la API de tareas');
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

//Middleware para procesar JSON
app.use(express.json());

//Ruta para obtener todas las tareas
app.get('/api/tareas', (req, res) => {
    //Lógica para obtener todas las tareas
    res.json
});