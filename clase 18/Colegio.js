let lista = [
    //fecha.Text= Date.String
    {
Materia: "Informatica", Descripcion: "Hacer una pagina web", Fecha: "1/01/2021"    }
]
let tabla = document.querySelector('#lista de tareas')
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (lista of listas){
        contenidoTabla = contenidoTabla + `<tr><td>${lista.Materia}</td><td>${lista.Descripcion}</td>
        <td>${lista.Fecha}" alt=""></td></tr>`
    } 
    tabla.innerHTML = contenidoTabla;
} 
let form = document.querySelector("#formularioAdd");
function addLista(){
    let MateriaNuevo = document.querySelector("input[Materia=Materia]").value
    let DescripcionNuevo = parseFloat(document. querySelector("input[Descripcion=Descripcion]").value)
    //type = "Date" Value = "1/01/2021"
    let FechaNuevo = document.querySelector("input type= Date [Fecha=Fecha]").value


    let planetaNuevo = {Materia:MateriaNuevo, Descripcion:diametroNuevo, Fecha:FechaNuevo}
    console.log("Ahora voy a añadir voy a añadir una nueva lista");
    console.log(ListaNuevo)

    listas.push(ListaNuevo)

    llenarTabla();
    return false; 
    }

    form.onsubmit = addLista;

