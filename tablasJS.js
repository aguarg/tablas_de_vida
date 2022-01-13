
//Función que agrega una fila al final de la tabla:
function agregar_fila(){
  var table = document.getElementById("tabla");

// Crea un elemento <tr> vacío y lo agrega al final de la tabla:
var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);

// Add some text to the new cells: lo borré porque estoy probando
//cell1.innerHTML = "";
//cell2.innerHTML = "";   

}


// Función para borrar la última fila:
function borrar_fila(){
  document.getElementById("tabla").deleteRow(-1);
}



function calcular(){

}