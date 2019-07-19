function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
var numero;
var maximo;
var minimo;
var flag = 0;

	do
	{ numero=parseInt(prompt ("Ingrese un numero"))
		if ( contador== 0 )
	// if (flag==0)	
maximo = numero
minimo = numero

if (numero > maximo || flag == 0)
{
maximo = numero;
}
if (numero < minimo || flag == 0)
{
	 minimo = numero;

	 flag = 1;}
respuesta = prompt ("Quiere seguir ingresando numero ? s/n"); 

	}


while (respuesta=="s");



document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

		
	
	}




//FIN DE LA FUNCIÓN