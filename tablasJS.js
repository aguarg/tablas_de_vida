
//Función que agrega una fila al final de la tabla:
function agregar_fila(){
  var tabla = document.getElementById("tabla");

  // Crea un elemento <tr> vacío y lo agrega al final de la tabla:
  var fila = tabla.insertRow(-1);

  var nx = fila.insertCell(0);
  var lx = fila.insertCell(1);
  var dx = fila.insertCell(2);
  var qx = fila.insertCell(3);
  var Lx = fila.insertCell(4);
  var Tx = fila.insertCell(5);
  var ex = fila.insertCell(6);

    
  // agregamos un input a la celda nx:
  nx.innerHTML = '<input>';

  
}


// Función para borrar la última fila:
function borrar_fila(){
  document.getElementById("tabla").deleteRow(-1);

}



function calcular(){
  
}


function exportar_datos(){

}


function limpiar_datos(){
    //Limpiando los inputs de la tabla, no el resto de las celdas:
    let elementos = [] ;
    elementos = document.getElementsByTagName("input");

    for(var i=0; i<elementos.length ; i++){
       elementos[i].value = "" ;
    }    
}