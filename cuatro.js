function mostrar()
{
var numero1;
var numero2;
var resultado;

numero1 = prompt("Ingrese un numero");
numero2 = prompt("Ingrese un numero");

if (numero1 == numero2)
{   
    alert (numero1 + numero2);}

else if (numero1 > numero2)
{
    resultado = parseInt(numero1) - parseInt(numero2);
        alert(resultado);}

else if ((numero1 + numero2) > 10)
{
    resultado = parseInt(numero1) + parseInt(numero2);
        alert(resultado);
            alert ("La suma es " + resultado + " y supero el 10");
}

else if (numero1 < numero2)
{
    resultado = parseInt(numero1) + parseInt(numero2);
        alert (resultado)}

}
//var suma = parseInt(var1)+parseInt(var2)+parseInt(varN);