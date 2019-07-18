function mostrar()
{
	var promedio;
	var contador=0;
	var acumulador=0;
	var respuesta='s';
    var numero= 0;

while (respuesta =='s'){
	numero = parseInt(prompt ("Ingrese un numero"));

	while (isNaN(numero))
	{ alert ("No es un numero");
    numero = parseInt(prompt ("Ingrese un numero"));

	}

acumulador = acumulador + numero;

contador ++;
respuesta = prompt ("Quiere seguir ingresando numeros ? s/n")
	}
promedio = acumulador/ contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN

//var promedio;
//var numero = 0;
//var contador = 0;
//var respuesta = "s";
//var acumulador = 0;

//do (respuesta =="s")
//  while { 
//	prompt ("Quiere seguir ingresando numeros ? s/n")
//	numero = parseInt(prompt ("Ingrese un numero"));
//	acumulador = acumulador + numero;
//  contador ++;

//}

//promedio = acumulador / contador

//document.getElementById("suma").value= acumulador;
//document.getElementsById("promedio"),value = acumulador/contador;