

//un arreglo para probar las funciones de mas abajo. Los números salen de un ejercicio de verdad:

//Los cálculos devuelven números con muchos decimales. Se puede usar .toFixed(3) pero devuelve strings. No usarlo excepto al 
//final, para mostrar los datos en la tabla.

// ARREGLOS CON LOS INGRESADO POR EL USUARIO Y LOS RESULTADOS DE LOS CÁLCULOS
// Uso var porque espero accederla desde varios lados.
var nx = [996, 668, 295, 190, 176, 172, 167, 159, 154, 147, 105, 22, 0];


// Resultados de la columna lx: 
var lx = [];


// Resultados de la columna dx:
var dx = [];


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


// Calcular los valores de la columna qx: Tasa de mortalidad durante el intervalo de edad X a X+1
function calcular_dx(){
	for (var i = 0; i < nx.length; i++) {
   		
   		dx.push(nx[i] - nx[i + 1]);  
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
	let anteultimo_elemento_de_Lx = Lx[Lx.length - 1];
	
	
	
	


}


// Calcular los valores de la columna ex: esperanza media de vida para los organismo al comienzo de la edad X





calcular_Lx()
calcular_Tx()
console.log(Lx)