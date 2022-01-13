import * from "./calculos_tablas.js";

saludo();

//Función que agrega una fila al final de la tabla:
function agregar_fila(){
  var tabla = document.getElementById("tabla");

  // Crea un elemento <tr> (table row) vacío y lo agrega al final de la tabla:
  var fila = tabla.insertRow(-1);

  // Se crean las celdas y se las asigna a fila, creada mas arriba:
  var nx = fila.insertCell(0);
  var lx = fila.insertCell(1);
  var dx = fila.insertCell(2);
  var qx = fila.insertCell(3);
  var Lx = fila.insertCell(4);
  var Tx = fila.insertCell(5);
  var ex = fila.insertCell(6);

    
  // agregamos un input a la celda nx:
  nx.innerHTML = '<input>';
  
  
  lx.class = "celda";
  dx.class = "celda";
  qx.class = "celda";
  Lx.class = "celda";
  Tx.class = "celda";
  ex.class = "celda";
  
  
}




// Función para borrar filas, empezando desde la última:
function borrar_fila(){
  // Obtenemos la cantidad de filas (elementos <tr>):
  let cantidad_de_filas = document.getElementsByTagName("tr").length;

  if (cantidad_de_filas < 3) {
    alert("Máximo número de filas eliminadas")
  
  } else {
      
      document.getElementById("tabla").deleteRow(-1);

  }

}




// Función para hacer todos los cálculos y meter los datos en las celdas:
function calcular(){
      
}


function exportar_datos(){

}




//Función que vacía los imputs y borra los valores de las celdas:
function limpiar_datos(){
    //Limpiando los inputs de la tabla, no el resto de las celdas:
    let elementos_input = [] ;
    elementos_input = document.getElementsByTagName("input");

    

    for(var i=0; i<elementos_input.length ; i++){
       elementos_input[i].value = "" ;


    } 


    //Limpiando las celdas:
    let valores_celdas = [] ;
    valores_celdas = document.getElementsByClassName("celda");
    

    
    for (var j=0; j<valores_celdas.length; j++) {
      valores_celdas[j].innerHTML = "<td id=celda></td>";
    }
     
}