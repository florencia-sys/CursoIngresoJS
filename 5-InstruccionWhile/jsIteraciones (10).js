function mostrar()
{
var contadorNegativos = 0;
var contadorPositivos = 0;
var contadorPares = 0;
var contadorImpares = 0;
var promedioPositivos = 0;
var promedioNegativos = 0;
var numero = 0;
var resta;
var positivo = 0;
var negativo = 0;
var contadorCeros = 0;
var respuesta = "s";
var sumaPositivos;
var sumaNegativos;
do 
{
	numero = parseInt(prompt("Ingrese un numero"));
	//numero = parseInt(prompt("Ingrese un numero"));
	if ( numero < 0 ) { negativo = negativo + numero; contadorNegativos ++;}
	else if ( numero > 0 ) { positivo = positivo + numero; contadorPositivos ++; }
	else { contadorCeros ++; }

	if (numero % 2 == 0) { contadorPares++;}
	else { contadorImpares ++; }
	//{contador ++;}
	respuesta = prompt("Quiere seguir ingresando numeros ? s/n")
}
	while ( respuesta == "s" );


 if (isNaN(promedioNegativos)) { promedioNegativos = 0}
 
 promedioNegativos = negativo / contadorNegativos;
 promedioPositivos = positivo / contadorPositivos;
 resta = positivo - negativo;
 
 //document.open();
document.write ("La suma de los numeros negativos ingresados es " + negativo + "<br> ");
document.write ("La suma de los numero positivos ingresados es " + positivo + "<br>");
document.write ("La cantidad de numeros positivos ingresados es " + contadorPositivos + "<br>");
document.write ("La cantidad de numeros negativos ingresados es "+ contadorNegativos + "<br>");
document.write ("La cantidad de ceros ingresados es " + contadorCeros + "<br>");
document.write ("La cantidad de numeros pares ingresados es "+ contadorPares + "<br>");
document.write ("La cantidad de numeros impares es "+ contadorImpares + "<br>");
document.write ("El promedio de numeros positivos es "+ promedioPositivos + "<br>");
document.write ("El promedio de numeros negativos ingresados es "+ promedioNegativos + "<br>");
document.write ("La diferencia entre los numeros positivos y negativos ingresados es "+ resta + "<br>");
//document.close();

}//FIN DE LA FUNCIÓN