(() => {

  /* APLICA DRY */
  
  //EX - 1
 
  function calculateOperation1(a: number, b: number, c: number): number {
    return (a+b)*c;
  }
  //the function 2 does the same

  // EX - 2
  interface VariablesArea{
    length?:number,
    width?:number, 
    radius?: number
  }
   interface Calculate{
    calculate(length?: number, width?:number, radius?: number): number;
  }
  function CalculateRectangle({ length, width }: VariablesArea): number{
    return (length !== undefined && width !== undefined) ? length * width : 
    (() => { throw new Error("Se deben proporcionar la longitud y el ancho del rectángulo."); })();
  }

  function calculateCircle({ radius }: VariablesArea): number {
    return radius !== undefined ? Math.PI * radius * radius : 
      (() => { throw new Error("Se debe proporcionar el radio del círculo."); })();
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

  interface Validator<T, V> {
    validateEmail(value: T): V;
    validateUsername(value: T): V;
}

class CustomValidator implements Validator<string, boolean>{
    validateEmail(value: string): boolean {
        //...some code for validate here
        return false;
    }
    validateUsername(value: string): boolean {
        //...some code for validate here
        return false;
    }

}

})();