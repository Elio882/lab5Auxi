(() => {

  /* APLICA DRY */
  
  //EX - 1
 
  function calculateOperation1(a: number, b: number, c: number): number {
    return (a+b)*c;
  }
  //the function 2 does the same

  // EX - 2
  interface Calculate{
    calculate(length?: number, width?:number, radius?: number): number;
  }

  class CalculateRectangleArea implements Calculate{
    calculate(length: number, width: number): number {
      return  length * width;
    }
  }

  class calculateCircleArea implements Calculate{
    calculate(radius: number): number {
      return Math.PI * radius * radius;
    }
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