let tareas = [
    { id: 1, titulo: 'Terminar el taller de Express.js', completada: false },
    { id: 2, titulo: 'Hacer las compras', completada: true },
    { id: 3, titulo: 'Limpiar el apartamento', completada: false },

];

exports.obtenerTareas = () => {
    return tareas;
};

exports.crearTarea = (nuevaTarea) => {
    const id = tareas.length + 1;
    const tarea = {id, ...nuevaTarea};
    tareas.push(tarea);
    return tarea;
};

exports.actualizarTarea = (id, datosActualizados) => {
    const index = tareas.findIndex((tarea) => tarea.id === parseInt(id));
    if (index === -1) {
        return null;
    }


    tareas[index] = { ...tareas[index], ...datosActualizados };
    return tareas[index];
};
exports.eliminarTarea = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === parseInt(id));
    if (index === -1) {
        return null;
    }
    const eliminada = tareas.splice(index, 1)[0];
    return eliminada;
};