function mostrar()
{
	var numeroRandom;
	nota = Math.floor( Math.random() * 10 + 1);
//Genero el número RANDOM entre 1 y 10 
	if 
	( nota >= 9 )
	{ alert ("Nota: " + nota + " EXCELENTE") ; }
	else 
	 if ( nota >= 4)
		{ alert ("Nota: " + nota + " APROBO");}
	else { alert ("Nota: " + nota + " Vamos, la proxima se puede");}
	
	
}//FIN DE LA FUNCIÓN