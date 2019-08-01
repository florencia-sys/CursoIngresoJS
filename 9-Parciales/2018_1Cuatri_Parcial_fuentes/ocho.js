function mostrar()
{

var letra;
var contadorPares = 0;
var contadorImpares = 0;
var contadorCeros = 0;
var promedioPositivos;
var sumaNegativos;
var numeroMax;
var numeroMin;
var contadorImpares = 0;
var seguir;
var numero;
var par;
var impar;
var positivos;
var negativos; 
var contadorNegativos = 0;

    letra = prompt ("Ingrese una letra");
    numero = parseInt(prompt("Ingrese un numero"));

do
{ 
    seguir = prompt ("Desea seguir ingresando numeros ? s/n")   
    while( numero < 100 && numero > - 100)
    if ( isNaN (numero)) { alert ("Eso no es un numero)")
    numero = parseInt(prompt("Ingrese un numero"));}
    letra = prompt ("Ingrese una letra");
    
    
        
    if ( numero % 2 == 0 )
{ par = par + numero ; contadorPares ++ }
else { impar = impar + numero ; contadorImpares ++ }
if ( numero < 0) { negativos = negativos + numero ; contadorNegativos ++;}
else if( numero > 0 )
{ positivos = positivos +numero ; contadorPositivos ++ }
else { contadorCeros ++; } 

seguir = prompt ("Desea seguir ingresando numeros ? s/n")

}
while ( seguir == "s");


promedioPositivos = positivos / contadorPositivos;
sumaNegativos = negativos / contadorNegativos;

document.write ("La cantidad de numeros pares es " + contadorPares + "<br>");
document.write ("La cantidad de numeros impares es " + contadorImpares + "<br>" );
document.write ("La cantidad de ceros es " + contadorCeros + "<br>")
document.write ("El promedio de positivos es " + promedioPositivos + "<br>");

}
