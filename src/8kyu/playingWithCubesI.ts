//TODO https://www.codewars.com/kata/55c0a79e20be94c91400014b/train/csharp


//Code the Cube ^-^

//? Top Solution
class Cube {
    constructor(num: number = 0) {
      this.setSide(num)
    }
    
    public getSide(): number {
      return this._side;
    }
  
    public setSide(value: number) {
      this._side = Math.abs(value);
    }
  
    private _side: number;
  
  }
//*export function
//!critique