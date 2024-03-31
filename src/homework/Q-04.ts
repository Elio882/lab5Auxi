(() => {

  /* APLICA DRY */
  
  //EX - 1
 
  function calculateOperation1(a: number, b: number, c: number): number {
    return (a+b)*c;
  }
  //the function 2 does the same

  // EX - 2

  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  // function calculateArea(length: number, width: number, geometricFigure: String, radius: number): number{
  //   return  geometricFigure === "cuadrado"? length * width : Math.PI * radius * radius;
  // }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();