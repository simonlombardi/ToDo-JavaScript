const inputTarea = document.getElementById('input-tarea')
const botonAgregarTarea = document.getElementById('boton-agregar-tarea')
const listaTareas = document.getElementById("lista-tareas")
const tareas = []

class Tarea{
    constructor(id, tarea, estado) {
        this.id = id,
        this.tarea = tarea,
        this.estado = estado
    }
}

botonAgregarTarea.addEventListener("click", (e) => {
    e.preventDefault()
    const textoTarea = inputTarea.value
    const tarea = new Tarea(Date.now(), textoTarea, estado = "activa")
    tareas.push(tarea)
    const elementoTarea = document.createElement("li")
    const texto = document.createElement("p")
    texto.textContent = tarea.tarea
    elementoTarea.appendChild(texto)
    listaTareas.appendChild(elementoTarea)
})