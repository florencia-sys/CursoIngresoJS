function mostrar()
{
    var edad;
    var estadoCivil;
    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;

//tomo la edad  

	if ( edad < 18 && estadoCivil != "Soltero" )

{ alert ("Usted es muy pequeño para NO ser soltero")}

}//FIN DE LA FUNCIÓN