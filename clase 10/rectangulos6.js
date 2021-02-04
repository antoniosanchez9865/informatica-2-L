let ancho;
let alto;
do {
    ancho = parseFloat(prompt("Ingrese el ancho"));
  } while (isNaN(ancho) || ancho < 1);

  do {
    alto = parseFloat(prompt("Ingrese el alto"));
  } while (isNaN(alto) || alto < 1);

  for(i=1; i<=rows; i++);

  rows - i

  for(j=1; j<=rows - i; j++)
        {
            printf(" ");
        }

        for(j=1; j<=rows; j++)
        {
            printf("*");
        }printf("\n");
    
    return 0;
