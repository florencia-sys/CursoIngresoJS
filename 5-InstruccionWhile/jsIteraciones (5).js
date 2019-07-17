function mostrar()
{

var sexo = prompt("Ingrese su genero") ;
// sexo = toLowerCase();

while ( sexo !="f" && sexo !="m" && sexo !="F" && sexo!="M")
// (!( sexo = "f" || sexo = "m" || sexo ="F" || sexo = "M"))

{
    alert ("Palabra invalida") ;
    
    sexo = prompt ("Reingrese su genero");
   // sexo = toLowerCase();

}

alert ("Este es su genero "+ sexo)
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN