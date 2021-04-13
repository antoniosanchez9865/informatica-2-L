let tareas = [
    //fecha.Text= Date.String
    {Materia: "Informatica", Descripcion: "Hacer una pagina web", Fecha: "1/01/2021"    }
]
let tabla = document.querySelector('#listadetareas')
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripcion}</td>
        <td>${tarea.Fecha}" alt=""></td></tr>`
    } 
    tabla.innerHTML = contenidoTabla;
} 
let form = document.querySelector("#formularioAdd");
function addTarea(){console.log("hola")
    let materiaNuevo = document.querySelector("input[name=Materia]").value
    let descripcionNuevo = document.querySelector("input[name=Descripcion]").value
    //type = "Date" Value = "1/01/2021"
    let fechaNuevo = document.querySelector("input type= Date [name=Fecha]").value


    let tareaNueva = {Materia:materiaNuevo, Descripcion:descripcionNuevo, Fecha:fechaNuevo}
    console.log("Ahora voy a añadir voy a añadir una nueva tarea");
    console.log(tareaNueva)
    
    tareas.push(tareaNueva)

    llenarTabla();
    return false; 
    }

    form.onsubmit = addTarea;
    llenarTabla()