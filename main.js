const inputTarea = document.getElementById('input-tarea')
const botonAgregarTarea = document.getElementById('boton-agregar-tarea')
const listaTareas = document.getElementById("lista-tareas")
let tareas = []

class Tarea {
    constructor(id, tarea, estado) {
        this.id = id,
        this.tarea = tarea,
        this.estado = estado
    }
}

const agregarTarea = () => {
    if (inputTarea.value === "") {
        alert("Ingrese una tarea")
    }
    else {
        const tarea = new Tarea(Date.now(), inputTarea.value, "pendiente")
        tareas.push(tarea)
        renderizarTareas()
    }
    inputTarea.value = ""
}

const eliminarTarea = (tareaID) => {
    tareas = tareas.filter(tarea => tarea.id !== tareaID)
    renderizarTareas()
}

const cambiarEstado = (tareaID) => {
    const tareaCambiarEstado = tareas.find(tarea => tarea.id === tareaID)
    if (tareaCambiarEstado.estado === 'pendiente'){
        return tareaCambiarEstado.estado = 'realizado'
    }
    else if(tareaCambiarEstado.estado === 'realizado') {
        return tareaCambiarEstado.estado = 'pendiente'
    }
}

const renderizarTareas = () => {
    listaTareas.innerHTML = ""
    tareas.forEach(tarea => {
        const contenedorTarea = document.createElement('div')
        contenedorTarea.classList.add("contenedor-tarea")
        const elementoTarea = document.createElement('li')
        elementoTarea.textContent = tarea.tarea
        elementoTarea.classList.add("elemento-tarea")
        const botonEliminar = document.createElement('button')
        botonEliminar.classList.add("boton-eliminar")
        botonEliminar.innerHTML = "X"
        elementoTarea.dataset.tareaID = tarea.id
        elementoTarea.dataset.estado = tarea.estado
        contenedorTarea.appendChild(elementoTarea)
        contenedorTarea.appendChild(botonEliminar)
        botonEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id)
        })
        elementoTarea.addEventListener("click", () => {
            elementoTarea.classList.toggle(cambiarEstado(tarea.id))
        })
        listaTareas.appendChild(contenedorTarea)
    })
}

botonAgregarTarea.addEventListener("click", (e) => {
    e.preventDefault()
    agregarTarea()
})



