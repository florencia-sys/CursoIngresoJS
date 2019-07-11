function mostrar()
{
    var numero;
	var promedio;
	var contador=0;
	var suma=0;

while (contador < 5){

	numero = parseInt(prompt ("Ingrese un numero"));
	suma = suma + numero;
// o suma += numero;
	contador ++;
// o contador = contador + 1
}

promedio = suma / 5;

document.getElementById("suma").value = suma;
document.getElementById("promedio").value = promedio;

}//FIN DE LA FUNCIÓN