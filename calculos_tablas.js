
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
// Funcion limpiar
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

// No sé como funciona y está metiendo valores incorrectos. Sacar, modificar o aprender que mierda hace.






// Calcular los valores de la columna lx: proporción de organismos supervivientes al empezar el intervalo de edad X
function calcular_lx(){
	
	for (var i = 0; i < nx.length-1; i++) {
   		
   		lx.push(nx[i]/nx[0]);  
	}

}


// Calcular los valores de la columna dx: número de muertes durante el intervalo de edad X a X+1
function calcular_dx(){
	for (var i = 0; i < nx.length; i++) {
   		
   		dx.push(nx[i] - nx[i + 1]);  
	}

	dx.pop();

}



// Calcular los valores de la columna qx: Tasa de mortalidad:
function calcular_qx(){
	for (var i = 0; i < nx.length; i++) {
   		
   		qx.push(dx[i] / nx[i]);  
	}

	qx.pop();

}


// Calcular los valores de la columna Lx: núm promedio de sobrevivientes durante el intervalo de edad X a X+1
function calcular_Lx(){
	for (var i = 0; i < nx.length; i++) {
   		
   		Lx.push((nx[i] + nx[i + 1]) / 2);  
	}

	Lx.pop();

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




calcular_lx()
calcular_dx()
calcular_qx()
calcular_Lx()
calcular_Tx()
calcular_ex()



console.log("arreglo nx: " + nx)
console.log()

console.log("arreglo lx: " + lx)
console.log()

console.log("arreglo dx: " + dx)
console.log()

console.log("arreglo qx: " + qx)
console.log()

console.log("arreglo Lx: " + Lx)
console.log()

console.log("arreglo Tx: " + Tx)
console.log()

//console.log("arreglo ex: " + ex)



/*
// Funcion de prueba que remueve los NaN: funciona.
const results = ex.filter(element => {
  return (
    element !== null &&
    element !== undefined &&
    element !== '' &&
    !Number.isNaN(element)
  );
});

*/


