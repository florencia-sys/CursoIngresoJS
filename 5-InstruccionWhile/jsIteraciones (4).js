function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while ( numero < 0 || numero > 10 || isNaN(numero) )
	// o while (!(numero >= 0 && numero <= 10))
	// (esta dentro del rango)

	{
		alert("Dato incorrecto");
		numero=  parseInt(prompt("Reingrese un numero entre 0 y 10"));
	 }

document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN