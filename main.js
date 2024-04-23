const inputTarea = document.getElementById('input-tarea')
const botonAgregarTarea = document.getElementById('boton-agregar-tarea')
const listaTareas = document.getElementById("lista-tareas")
let tareas = JSON.parse(localStorage.getItem('tareas')) || []

class Tarea {
    constructor(id, tarea, estado) {
        this.id = id,
        this.tarea = tarea,
        this.estado = estado
    }
}

const almacenarDatos = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
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
    almacenarDatos()
}

const eliminarTarea = (tareaID) => {
    tareas = tareas.filter(tarea => tarea.id !== tareaID)
    renderizarTareas()
    almacenarDatos()
}

const cambiarEstado = (e, tareaID) => {
    let tareaCambiarEstado = tareas.find(tarea => tarea.id === tareaID)
    let indiceTarea = tareas.indexOf(tareaCambiarEstado)

    if (tareaCambiarEstado.estado === 'pendiente'){
        e.target.classList.add("realizado")
        tareaCambiarEstado.estado = "realizado"
    }
    else if(tareaCambiarEstado.estado === 'realizado') {
        e.target.classList.remove("realizado")
        tareaCambiarEstado.estado = "pendiente"
    }
    const nuevaTarea = {...tareaCambiarEstado, estado: tareaCambiarEstado.estado}
    tareas[indiceTarea] = nuevaTarea
    console.log(tareas);
    almacenarDatos()
}

const renderizarTareas = () => {
    listaTareas.innerHTML = ""
    tareas.forEach(tarea => {
        const contenedorTarea = document.createElement('div')
        contenedorTarea.classList.add("contenedor-tarea")
        const elementoTarea = document.createElement('li')
        elementoTarea.textContent = tarea.tarea
        elementoTarea.classList.add("elemento-tarea-pendiente")
        if (tarea.estado === "pendiente"){
        }
        else if (tarea.estado === "realizado"){
            elementoTarea.classList.add("realizado")
        }
        const botonEliminar = document.createElement('button')
        botonEliminar.classList.add("boton-eliminar")
        botonEliminar.innerHTML = "X"
        elementoTarea.dataset.tareaID = tarea.id
        contenedorTarea.appendChild(elementoTarea)
        contenedorTarea.appendChild(botonEliminar)
        botonEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id)
        })
        elementoTarea.addEventListener("click", (e) => {
            cambiarEstado(e, tarea.id)
        })
        listaTareas.appendChild(contenedorTarea)
    })
}

botonAgregarTarea.addEventListener("click", (e) => {
    e.preventDefault()
    agregarTarea()
})


renderizarTareas()
