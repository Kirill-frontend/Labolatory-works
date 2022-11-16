import { EXPRESSION2 } from "../utils/consts";
import { expressionFunc } from "./chartUtils";


export const dichotomieSqrt = (begin = 0, end = 1, acc = 0.001) => {
  let result
  

  do {
    let x = (begin + end) / 2;

    if (EXPRESSION2(begin) * EXPRESSION2(x) < 0) {
      end = x;
    } else {
      begin = x;
    }    
  
  } while (Math.abs(end - begin) > acc);
  result = (begin + end) / 2    
   
  return result
}

export function methodItem(acc = 0.001) {
  let result  
  const arrX = expressionFunc(EXPRESSION2, acc).map(func => (func.y))
  
  for (let i = 1; i < arrX.length; i++) {
        if(EXPRESSION2(arrX[i]) * EXPRESSION2(arrX[i-1]) < 0){
          result = arrX[i-1]          
        }
  }
return result
}
