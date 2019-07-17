function mostrar()
{
	var promedio;
	var contador=0;
	var acumulador=0;
	var respuesta='s';
    var numero= 0;

while (respuesta =='s'){

prompt ("Quiere seguir ingresando numeros ? s/n")
numero = parseInt(prompt ("Ingrese un numero"));
acumulador = acumulador + numero;

contador ++;
}
promedio = acumulador/ contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN