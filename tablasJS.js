var x = [];
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
  var fila_x = fila.insertCell(0); 
  var fila_nx = fila.insertCell(1);
  var fila_lx = fila.insertCell(2);
  var fila_dx = fila.insertCell(3);
  var fila_qx = fila.insertCell(4);
  var fila_Lx = fila.insertCell(5);
  var fila_Tx = fila.insertCell(6);
  var fila_ex = fila.insertCell(7);

    
  // agregamos un input a la celda nx:
  fila_x.innerHTML = '<input class="input1">';
  fila_nx.innerHTML = '<input class="input2">';
  
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
    elementos_input = document.getElementsByClassName("input1");

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
    x = [];
    nx = [];
    lx = [];
    dx = [];
    qx = [];
    Lx = [];
    Tx = [];
    ex = [];


     
}




//Función que convierte strings de números a integers:
function a_decimales(arreglo) {

    for (var i = 0; i < arreglo.length; i++) {
        arreglo[i] = parseFloat(arreglo[i]);
    }
    
        
}






// FUNCION QUE OBTIENE LOS DATOS INGRESADOS POR EL USUARIO ========================================
// Función que obtiene los datos de los inputs y los carga en el arreglo nx de mas arriba:
function tomar_datos_ingresados_nx(){
    
    let datos_ingresados = document.getElementsByClassName("input2");
    
    for (var i = 0; i < datos_ingresados.length; i++) {
        
        nx.push(datos_ingresados[i].value);

    } 

    a_decimales(nx)

    //nx = [996, 668, 295, 190, 176, 172, 167, 159, 154, 147, 105, 22, 0];

           
}





// FUNCIONES PARA HACER LOS CÁLCULOS ================================================================

// Calcular los valores de la columna lx: proporción de organismos supervivientes al empezar el intervalo de edad X
function calcular_lx(){
    
    for (var i = 0; i < nx.length-1; i++) {
        
        lx.push(nx[i]/nx[0]);  
    }

    a_decimales(lx);
    
}


// Calcular los valores de la columna dx: número de muertes durante el intervalo de edad X a X+1
function calcular_dx(){
    
    for (var i = 0; i < nx.length; i++) {
        
        dx.push(nx[i] - nx[i + 1]);

    }
    
    dx.pop();

    a_decimales(dx);
}




// Calcular los valores de la columna qx: Tasa de mortalidad:
function calcular_qx(){
    
    for (var i = 0; i < nx.length; i++) {
        
        qx.push(dx[i] / nx[i]);  
    }

    
    qx.pop();
    a_decimales(qx);

}


// Calcular los valores de la columna Lx: núm promedio de sobrevivientes durante el intervalo de edad X a X+1
function calcular_Lx(){
    for (var i = 0; i < nx.length; i++) {
        
        Lx.push((nx[i] + nx[i + 1]) / 2);

    }

    
    Lx.pop();
    a_decimales(Lx);


}


// Calcular los valores de la columna Tx:  Números de días que les queda a los sobrevivientes que alcanzaron edad X:
function calcular_Tx(){
    var valor_actual = Lx[Lx.length - 1]; //asignamos el anteúltimo valor (el último es NaN) a valor_actual.
    
    Tx.push(valor_actual); //metemos el valor_actual en el arreglo Tx.
        

    //esto itera por Lx desde el final, saltando los dos últimos lugares: uno el NaN y el otro el valor_actual.         
    for (var i = Lx.length - 1; i >= 1; i--) { 
        suma = Lx[i-1] + valor_actual;
        Tx.push(suma);

        valor_actual = suma;
    }

    a_decimales(Tx);

    
    
}





// Calcular los valores de la columna ex: esperanza media de vida para los organismo al comienzo de la edad X
function calcular_ex(){
    //El arreglo Tx está invertido para facilitar la lectura, pero hay que invertirlo para los cálculos:
    var tx_invertido = Tx.reverse();
    
    for (var i = 0; i < Tx.length; i++) {
        
        ex.push(tx_invertido[i] / nx[i]);  
    }


    a_decimales(ex);

}






// Hacemos los cálculos. Esta función está enlazada al bótón "Calcular" de la app:
function calcular(){
    // Creamos arreglos para guardar los valores calculados:
    x = [];
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
    
        for (let i=0; i<celdas_lx.length-1; i++) {
            celdas_lx[i].innerHTML = lx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna dx:
    celdas_dx = document.getElementsByClassName("dx");
    
        for ( i=0; i<celdas_dx.length-1; i++) {
            celdas_dx[i].innerHTML = dx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna qx:
    celdas_qx = document.getElementsByClassName("qx");
    
        for ( i=0; i<celdas_qx.length-1; i++) {
            celdas_qx[i].innerHTML = qx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna Lx:
    celdas_Lx = document.getElementsByClassName("Lx");
    
        for ( i=0; i<celdas_Lx.length-1; i++) {
            celdas_Lx[i].innerHTML = Lx[i].toFixed(3);
    }



    // Cargamos los resultados de la columna Tx:
    celdas_Tx = document.getElementsByClassName("Tx");
    
        for ( i=0; i<celdas_Tx.length-1; i++) {
            celdas_Tx[i].innerHTML = Tx[i].toFixed(3);
    }


    // Cargamos los resultados de la columna ex:
    celdas_ex = document.getElementsByClassName("ex");

        for ( i=0; i<celdas_ex.length-1; i++) {
            celdas_ex[i].innerHTML = ex[i].toFixed(3);
    }


}


// FUNCION PARA EXPORTAR LOS RESULTADOS ============================================================


//Función para exportar los resultados en un archivo:
function exportar_resultados(){
    
}





// GRAFICA ==========================================================================================
/*
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

*/