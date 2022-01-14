

//FUNCIONES PARA LOS BOTONES DE LA APP: ===========================================================
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






















// FUNCIONES PARA HACER LOS CÁLCULOS ================================================================
//un arreglo para probar las funciones de mas abajo. Los números salen de un ejercicio de verdad:

//Los cálculos devuelven números con muchos decimales. Se puede usar .toFixed(3) pero devuelve strings. No usarlo excepto al 
//final, para mostrar los datos en la tabla.

// ARREGLOS CON LOS INGRESADO POR EL USUARIO Y LOS RESULTADOS DE LOS CÁLCULOS. Borrar después.
var nx = [996, 668, 295, 190, 176, 172, 167, 159, 154, 147, 105, 22, 0];


// Resultados de la columna lx: 
var lx = [];


// Resultados de la columna dx:
var dx = [];


// Resultados de la columna qx:
var qx = [];


//resultados de la columna Lx:
var Lx = [];


//Resultados de la columna Tx:
var Tx = [];


//Resultados de la columna ex:
var ex = [];







// FUNCIONES:
// Calcular los valores de la columna lx: proporción de organismos supervivientes al empezar el intervalo de edad X
function calcular_lx(){
    
    for (var i = 0; i < nx.length; i++) {
        
        lx.push(nx[i]/nx[0]);  
    }
    
}


// Calcular los valores de la columna dx: número de muertes durante el intervalo de edad X a X+1
function calcular_dx(){
    for (var i = 0; i < nx.length; i++) {
        
        dx.push(nx[i] - nx[i + 1]);  
    }

}



// Calcular los valores de la columna qx: Tasa de mortalidad:
function calcular_qx(){
    for (var i = 0; i < nx.length; i++) {
        
        qx.push(dx[i] / nx[i]);  
    }

}


// Calcular los valores de la columna Lx: núm promedio de sobrevivientes durante el intervalo de edad X a X+1
function calcular_Lx(){
    for (var i = 0; i < nx.length; i++) {
        
        Lx.push((nx[i] + nx[i + 1]) / 2);  
    }


}


// Calcular los valores de la columna Tx:  Números de días que les queda a los sobrevivientes que alcanzaron edad X:
function calcular_Tx(){
    var valor_actual = Lx[Lx.length - 2]; //asignamos el anteúltimo valor (el último es NaN) a valor_actual.
    
    Tx.push(valor_actual); //metemos el valor_actual en el arreglo Tx.
        

    //esto itera por Lx desde el final, saltando los dos últimos lugares: uno el NaN y el otro el valor_actual.         
    for (var i = Lx.length - 2; i >= 0; i--) { 
        suma = Lx[i-1] + valor_actual;
        Tx.push(suma);

        valor_actual = suma;
    }



}


// Calcular los valores de la columna ex: esperanza media de vida para los organismo al comienzo de la edad X
function calcular_ex(){
    //El arreglo Tx está invertido para facilitar la lectura, pero hay que invertirlo para los cálculos:
    var tx_invertido = Tx.reverse()
    
    for (var i = 0; i < nx.length; i++) {
        
        ex.push(tx_invertido[i + 1] / nx[i]);  
    }

}








// Hacemos los cálculos. Esta función está enlazada al bótón "Calcular" de la app:
function calcular(){
    calcular_lx()
    calcular_dx()
    calcular_qx()
    calcular_Lx()
    calcular_Tx()
    calcular_ex()
    
}







// FUNCION PARA EXPORTAR LOS RESULTADOS ============================================================


//Función para exportar los resultados en un archivo:
function exportar_resultados(){
    
}
