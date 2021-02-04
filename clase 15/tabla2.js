Tabla= 
//lista de alimentos 
"Lista e alimentos" =  
{nombre : "Arroz", vitaminas : "B1, B12", calorias : 130}
{nombre ; "Huevos"; vitaminas ; "B2, B6, B12"; calorias; 155}
{nombre ; "Carne"; vitaminas; "B12"; calorias; 143}
{onmbre ; "Pescado"; vitaminas; "A, D"; calorias; 206 }
{nombre ; "pan", vitaminas , "B1, B2 B6", calorias ; 265}
deje    =  documento . querySelector ( '#tabla' )
// console.log (tabla)
let  contenidoTabla  =  '<tr> <th> Nombre </th> <th> Diámetro </th> <th> Imagen </th> </tr>'
para  ( planeta  (tabla) ) 
{
    contenidoTabla  =  contenidoTabla  +  `<tr> <td> $ { planeta . nombre } </td> <td> $ { tabla . diametro } </td>
    <td> <img width = "500px" src = " $ { planeta . imagen } " alt = ""> </td> </tr> `
}
tabla . innerHTML  =  contenidoTabla ;