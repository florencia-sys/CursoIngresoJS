function mostrar()
{
// var flag = 0
	var contadorNegativos=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

do
{ 
	numero = parseInt(prompt("Ingrese un numero"));
	 while (isNaN(numero))
	 { alert ("No es un numero");

	 numero = parseInt (prompt("Ingrese un numero"));
	 }

respuesta = prompt ("Quiere seguir ingresando numeros ? s/n");	


	 if ( numero < 0 )
{ negativo = negativo * numero 
// negativo*=numero; 
// flag = 1
contadorNegativos++;
}
else { positivo = positivo + numero}
// positivo+=numero;


} while (respuesta == "s");
	
	document.getElementById("producto").value = negativo;
	//flag == 0
	if (contadorNegativos == 0)
	{ negativo = 0 }
	document.getElementById("suma").value = positivo;
	
		
}
//FIN DE LA FUNCIÓN