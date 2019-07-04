/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var resultado;

    importe = parseInt ( document.getElementById("importe").value);

    var resultadoDisminuido;

    resultadoDisminuido = importe * 25 / 100;

    resultado = importe - resultadoDisminuido;
    
    
    
    document.getElementById("resultado").value = resultado;
}
