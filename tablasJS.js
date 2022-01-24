var nx = [];
var lx = [];
var dx = [];
var qx = [];
var Lx = [];
var Tx = [];
var ex = [];






//FUNCIONES PARA LOS BOTONES DE LA APP: ===========================================================
//Función que agrega una fila al final de la tabla:
function agregar_fila(){
  var tabla = document.getElementById("tabla");

  // Crea un elemento <tr> (table row) vacío y lo agrega al final de la tabla:
  var fila = tabla.insertRow(-1);

  // Se crean las celdas y se las asigna a fila, creada mas arriba:
  var fila_nx = fila.insertCell(0);
  var fila_lx = fila.insertCell(1);
  var fila_dx = fila.insertCell(2);
  var fila_qx = fila.insertCell(3);
  var fila_Lx = fila.insertCell(4);
  var fila_Tx = fila.insertCell(5);
  var fila_ex = fila.insertCell(6);

    
  // agregamos un input a la celda nx:
  fila_nx.innerHTML = '<input>';
  
  // Les damos dos clases a los elementos que creamos mas arriba:
  fila_lx.className = "celda lx";
  fila_dx.className = "celda dx";
  fila_qx.className = "celda qx";
  fila_Lx.className = "celda Lx";
  fila_Tx.className = "celda Tx";
  fila_ex.className = "celda ex";
  
  
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




//Función que vacía los inputs, los arreglos y borra los valores de las celdas:
function limpiar_datos(){
    //Limpiando los inputs de la tabla, no el resto de las celdas:
    let elementos_input = [] ;
    elementos_input = document.getElementsByTagName("input");

    for(var i=0; i<elementos_input.length ; i++){
       elementos_input[i].value = "" ;


    } 


    //Limpiando las celdas de la tabla:
    let valores_celdas = [] ;
    valores_celdas = document.getElementsByClassName("celda");
    
    
    for (var j=0; j<valores_celdas.length; j++) {
      valores_celdas[j].innerHTML = "<td></td>"
    }


    
    // Vaciando los arreglos con los datos calculados, de otra forma suma los elementos a los nuevos:
    nx = [];
    lx = [];
    dx = [];
    qx = [];
    Lx = [];
    Tx = [];
    ex = [];


     
}





// FUNCION QUE OBTIENE LOS DATOS INGRESADOS POR EL USUARIO ========================================
// Función que obtiene los datos de los inputs y los carga en el arreglo nx de mas arriba:
function tomar_datos_ingresados_nx(){
    
    let datos_ingresados = document.getElementsByTagName("input");
    for (var i = 0; i < datos_ingresados.length; i++) {
        
        nx.push(parseInt(datos_ingresados[i].value));

    }
 
    
}





//FUNCION LIMPIADORA DE ARREGLOS
//Toma un arreglo, pasa todo a int y elimina los elementos NaN, null, undefined, vacíos y strings. Por el tipo de toma de datos, algunas
//funciones la requieren antes de pasar a los cálculos siguientes.
function filter_list(l) {
      //pasamos los valores a integers:  
      l.push(parseInt(l));  
      
      //limpiamos el arreglo de todo lo que no sea integers:
      return l.filter(x => typeof x === "number" &&
        x !== null &&
        x !== undefined &&
        x !== '' &&
        !Number.isNaN(x)
        );
}





// FUNCIONES PARA HACER LOS CÁLCULOS ================================================================

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
    
    dx = filter_list(dx);

}




// Calcular los valores de la columna qx: Tasa de mortalidad:
function calcular_qx(){
    
    for (var i = 0; i < nx.length; i++) {
        
        qx.push(dx[i] / nx[i]);  
    }

    
    qx = filter_list(qx);

}


// Calcular los valores de la columna Lx: núm promedio de sobrevivientes durante el intervalo de edad X a X+1
function calcular_Lx(){
    for (var i = 0; i < nx.length; i++) {
        
        Lx.push((nx[i] + nx[i + 1]) / 2);

    }

    
    Lx = filter_list(Lx);


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

    
    Tx = filter_list(Tx);

}



//ERROR: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ex muestra un resultado extra al final: sacar del arreglo.
// Tx muestra un resultado al inicio: sacar del arreglo.


// Calcular los valores de la columna ex: esperanza media de vida para los organismo al comienzo de la edad X
function calcular_ex(){
    //El arreglo Tx está invertido para facilitar la lectura, pero hay que invertirlo para los cálculos:
    var tx_invertido = Tx.reverse();
    
    for (var i = 0; i < nx.length; i++) {
        
        ex.push(tx_invertido[i + 1] / nx[i]);  
    }
    
    
    ex = filter_list(ex);

    
}






// Hacemos los cálculos. Esta función está enlazada al bótón "Calcular" de la app:
function calcular(){
    // Creamos arreglos para guardar los valores calculados:
    nx = [];
    lx = [];
    dx = [];
    qx = [];
    Lx = [];
    Tx = [];
    ex = [];


    // Tomamos los datos ingresados en los inputs:
    tomar_datos_ingresados_nx()

    //Hacemos los cálculos:
    calcular_lx()
    calcular_dx()
    calcular_qx()
    calcular_Lx()
    calcular_Tx()
    calcular_ex()



    console.log("arreglo nx: " + nx)
    console.log("arreglo lx: " + lx)
    console.log("arreglo dx: " + dx)
    console.log("arreglo qx: " + qx)
    console.log("arreglo Lx: " + Lx)
    console.log("arreglo Tx: " + Tx)
    console.log("arreglo ex: " + ex)


    // Cargamos los resultados en las celdas de la tabla:
    cargar_resultados()



}





//Función que carga los datos de los arreglos a la tabla:
function cargar_resultados(){
    
    // Cargamos los resultados de la columna lx:
    celdas_lx = document.getElementsByClassName("lx");
    
        for (let i=0; i<celdas_lx.length; i++) {
            celdas_lx[i].innerHTML = lx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna dx:
    celdas_dx = document.getElementsByClassName("dx");
    
        for ( i=0; i<celdas_dx.length; i++) {
            celdas_dx[i].innerHTML = dx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna qx:
    celdas_qx = document.getElementsByClassName("qx");
    
        for ( i=0; i<celdas_qx.length; i++) {
            celdas_qx[i].innerHTML = qx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna Lx:
    celdas_Lx = document.getElementsByClassName("Lx");
    
        for ( i=0; i<celdas_Lx.length; i++) {
            celdas_Lx[i].innerHTML = Lx[i].toFixed(3);
    }



    // Cargamos los resultados de la columna Tx:
    celdas_Tx = document.getElementsByClassName("Tx");
    
        for ( i=0; i<celdas_Tx.length; i++) {
            celdas_Tx[i].innerHTML = Tx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna ex:
    celdas_ex = document.getElementsByClassName("ex");

        for ( i=0; i<celdas_ex.length; i++) {
            celdas_ex[i].innerHTML = ex[i].toFixed(3);
    }


}


// FUNCION PARA EXPORTAR LOS RESULTADOS ============================================================


//Función para exportar los resultados en un archivo:
function exportar_resultados(){
    
}
