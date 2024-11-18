const express = require('express'); 
const app = express(); 
const port = 3000; 


app.get('/', (req, res) => {
    res.send(' Bienvenido a la API de tareas!');
}); 

app.listen(port, () => { 
    console.log('Servidor escuchando en http://localhost:${port}'); 
});


// Middleware para procesar JSON
app.use(express.json());

// Ruta para obtener todas las tareas
app.get('/api/tareas', (req, res) => {
    // Aqu´ı ir´ a la l´ogica para obtener todas las tareas
    res.json([
        { id: 1, titulo: 'Terminar el taller de Express.js', completada: false }, 
        { id: 2, titulo: 'Hacer las compras', completada: true }, 
        { id: 3, titulo: 'Limpiar el apartamento', completada: false }
    ]);
});

// Ruta para crear una nueva tarea
app.post('/api/tareas', (req, res) => {
    const nuevaTarea = req.body; 
    // Aqu´ı ir´ a la l´ogica para crear una nueva tarea 
    res.status(201).json(nuevaTarea);
});

// Ruta para actualizar una tarea
app.put('/api/tareas/:id', (req, res) => {
    const id = req.params.id; 
    const datosActualizados = req.body; 
    // Aqu´ı ir´ a la l´ogica para actualizar una tarea 
    res.json({ mensaje: 'Tarea ${id} actualizada', datos: datosActualizados }); 
});

// Ruta para eliminar una tarea 
app.delete('/api/tareas/:id', (req, res) => {
    const id = req.params.id; 
    // Aqu´ı ir´ a la l´ogica para eliminar una tarea 
    res.json({ mensaje: 'Tarea ${id} eliminada' }); 
});