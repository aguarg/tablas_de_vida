

//un arreglo para probar las funciones de mas abajo. Los números salen de un ejercicio de verdad:


// ARREGLOS CON LOS INGRESADO POR EL USUARIO Y LOS RESULTADOS DE LOS CÁLCULOS
// Uso var porque espero accederla desde varios lados.
var nx = [996, 668, 295, 190, 176, 172, 167, 159, 154, 147, 105, 22, 0];


// Acá van los resultados de la columna lx, que salen de la acción de la función calcular_lx: 
var lx = [];


// Resultados de la columna dx:
var dx = [];




// FUNCIONES:
// Calcular los valores de la columna lx:
function calcular_lx(){
	
	for (var i = 0; i < nx.length; i++) {
   		
   		lx.push(nx[i]/nx[0]);  //-----> toFixed() devuelve strings. No usarlo excepto al final, para mostrar los datos en la tabla.
	}

	
	
}


// Calcular los valores de la columna qx:
function calcular_dx(){
	for (var i = 0; i < nx.length; i++) {
   		
   		dx.push(nx[i] - nx[i + 1]);  
	}


}






calcular_dx()
console.log(dx)