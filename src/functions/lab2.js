import { EXPRESSION2 } from './../utils/consts';


const getArrOfX = (begin = 0, end = 1, acc = 0.001) => {
  const arr = [];
  for (let i = begin; i <= end; i +=acc) {
    arr.push(EXPRESSION2(i));
  }
  return arr;
}

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


export const  methodItemSqrt = (begin = 0, end = 1, acc = 0.01) => {
  // метод итерации, те же аргументы что в дихотомии
  let result  
  const arrX = getArrOfX(begin, end, acc)    
  for (let i = 1; i < arrX.length; i++) {        
        if(EXPRESSION2(arrX[i-1]) * EXPRESSION2(arrX[i]) < 0){          
          result = arrX[i-1]
        }        
  }  
return result
}
