const inputTarea = document.getElementById('input-tarea')
const botonAgregarTarea = document.getElementById('boton-agregar-tarea')
const listaTareas = document.getElementById("lista-tareas")

const agregarTarea = () => {
    const textoTarea = inputTarea.value
    if (textoTarea === "") {
    }
    else{
        const elementoTarea = document.createElement("li")
        elementoTarea.innerHTML = textoTarea
        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "X"
        elementoTarea.appendChild(botonEliminar)
        listaTareas.appendChild(elementoTarea)
    }
    inputTarea.value = ""
}

listaTareas.addEventListener("click", (e) => {
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("realizada")
    }
    else if (e.target.tagName == "BUTTON"){
        e.target.parentElement.remove()
    }
})

botonAgregarTarea.addEventListener("click", (e) => {
    e.preventDefault()
    agregarTarea()
})
