/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var resultado = 0;

numero1 = parseInt(document.getElementById("PrecioUno").value);
numero2 = parseInt(document.getElementById("PrecioDos").value);
numero3 = parseInt(document.getElementById("PrecioTres").value);

    resultado = resultado + numero1;
    resultado = resultado + numero2;
    resultado = resultado + numero3;
    alert(" La suma de los numeros ingresados es "+ resultado);
}
function Promedio () 
{
    var numero1 = 0;
    var numero2 = 0;
    var numero3 = 0;
    var resultado = 0;
    var promedio = 0;

    numero1 = parseInt(document.getElementById("PrecioUno").value);

    numero2 = parseInt(document.getElementById("PrecioDos").value);

    numero3 = parseInt(document.getElementById("PrecioTres").value);

    resultado = resultado + numero1;
    resultado = resultado + numero2;
    resultado = resultado + numero3;
    promedio = resultado / 3
    alert(" El promedio de los numeros ingresados es " + promedio);
}
function PrecioFinal () 
{   
    var numero1 = 0;
    var numero2 = 0;
    var numero3 = 0;
    var resultado = 0;
    var precioFinal = 0;

    numero1 = parseInt(document.getElementById("PrecioUno").value);

    numero2 = parseInt(document.getElementById("PrecioDos").value);

    numero3 = parseInt(document.getElementById("PrecioTres").value);

    resultado = resultado + numero1;
    resultado = resultado + numero2;
    resultado = resultado + numero3;
    precioFinal = resultado * 0.21 + resultado;
    alert(" El precio final es " + precioFinal);
}