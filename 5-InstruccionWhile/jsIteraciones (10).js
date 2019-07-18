function mostrar()
{
var contadorNegativos = 0;
var contadorPositivos = 0;
var contadorPares = 0;
var contadorImpares = 0;
var promedioPositivos = 0;
var promedioNegativos = 0;
var pares
var impares
var numero;
var resta;
var positivos;
var negativos;
var contador=0;
var cero;
var respuesta = "s";

do 
{
	numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Quiere seguir ingresando numeros ? s/n")
	
	if ( numero < 0 ) { negativo = negativo + numero; contadorNegativos ++;}
	if ( numero > 0 ) { positivo = positivo + numero; contadorPositivos ++; }
	if ( numero == 0) { numero = cero} { contador ++; }

	if (numero % 2 == 0) { pares= pares + numero; contadorPares++;}
	if (numero % 2 == 1) { impares = impares + numero; contadorImpares ++; }
	{ contador ++;}}
    
	while ( respuesta== "s" );


 
 promedioPositivos = positivos / contadorPositivos;
 promedioNegativos = negativos / promedioNegativos;
 resta = contadorPositivos - contadorNegativos;

document.write = ("")



}//FIN DE LA FUNCIÓN