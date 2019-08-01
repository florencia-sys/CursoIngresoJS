function mostrar()
{
var letraMax;
var letraMin;
var letra;
var contadorPares = 0;
var contadorImpares = 0;
var contadorCeros = 0;
var promedioPositivos;
var sumaNegativos = 0;
var maximo = 0;
var minimo = 0;
var contadorImpares = 0;
var respuesta ="s";
var numero = 0;
var par = 0;
var impar = 0;
var positivos = 0;
var negativos = 0; 
var contadorPositivos = 0;
var contadorNegativos = 0;
var flag = 0;
        

        do{
    
    letra = prompt ("Ingrese una letra");
    
        numero = parseInt(prompt("Ingrese un numero"));
    if (!(numero <= 100 && numero >= - 100)) { prompt("Por favor ingresar numeros del 100 al -100")}
    while (isNaN(numero)) { alert ("Eso no es un numero") ;
    numero = parseInt(prompt("Ingrese un numero"))}    
    
      
  
     if ( numero % 2 == 0 )
        { par = par + numero ; contadorPares ++ }
           else { impar = impar + numero ; contadorImpares ++ }
    
    if ( numero < 0) { negativos = negativos + numero ; contadorNegativos ++;}
        else if( numero > 0 )
            { positivos = positivos + numero ; contadorPositivos ++ }
                else { contadorCeros ++; } 

    if ( numero < minimo || flag == 0 )
    { minimo = numero ;
    
    letraMin = letra;
    }
    if ( numero > maximo || flag == 0 )
    { maximo = numero;
    
    letraMax = letra;
    flag = 1 }
    
                
    respuesta = prompt ("Desea seguir ingresando numeros ? s/n")
    
    

}
while ( respuesta == "s");


promedioPositivos = positivos / contadorPositivos;
sumaNegativos = negativos;


document.write ("La cantidad de numeros pares es " + contadorPares + "<br>");
document.write ("La cantidad de numeros impares es " + contadorImpares + "<br>" );
document.write ("La cantidad de ceros es " + contadorCeros + "<br>")
document.write ("El promedio de positivos es " + promedioPositivos + "<br>");
document.write ("La suma de todos los numeros negativos ingresados es " + sumaNegativos + "<br>")
document.write ("Numero minimo "+minimo+" y letra minima "+letraMin+"<br>");
document.write ("Numero maximo "+maximo+" y letra maxima "+letraMax+ "<br>");
}
