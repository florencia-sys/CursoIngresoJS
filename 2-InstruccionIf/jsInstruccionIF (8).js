function mostrar()
{
    var edad;
    var estadoCivil;
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

//tomo la edad 

    if ( edad >= 18 && estadoCivil=="Soltero")

{ alert ("Usted es soltero y no es menor")};
	
}//FIN DE LA FUNCIÓN