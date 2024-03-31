(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const listOfEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(listOfEmails);

  //Lista de compras de un carrito
  const shoppingCart: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shoppingCart);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const sumOfTwoNumbers = (variable: number): number => {
    return variable + 3;
  }

  console.log(sumOfTwoNumbers(2));
  
  
  //funcion  para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeTheWord(wordToCapitalize: string): string {
    return wordToCapitalize.charAt(0).toUpperCase().toString().concat(wordToCapitalize.substring(1, wordToCapitalize.length));;
  }

  console.log(capitalizeTheWord("capricorn"));
  

  //variable que alerta en caso de que algun evento suceda
  let isEventOcurred: boolean = false;

  if(isEventOcurred) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let canAccess: boolean = true;

  if(canAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const averageOfNumbers: number = (1 + 2 + 3) / 3;

  console.log(averageOfNumbers);
  
  //variable que almacena el valor de PI
  const PI: number = 3.141592654;

  console.log(PI);
  

  //variablE que controla si un archivo es modificable 
  let isFileModifiable: boolean = false;

  if(isFileModifiable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const NUMBER_OF_EULER: number = 2.718281828; 


})();