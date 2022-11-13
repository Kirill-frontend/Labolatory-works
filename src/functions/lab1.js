import { EXPRESSION } from './../utils/consts';


export const methodItem = (begin = 0,end = 1, acc = 0.1) => {
  const graph = []
  for(let i = begin; i < end; i+= acc) {
    graph.push({x: i, y: EXPRESSION(i).toFixed(2)})
  }
  
  return  graph.sort((a, b) => a.y < b.y ? 1 : -1)
}


export const dichotomie = (begin = 0, end = 1, acc = 0.001) => {
  const sigma = acc / 2;
 
  let N = 1;
  const arr = []
  

  do {
    let x = (begin + end) / 2;
    const l = x - sigma;
    const r = x + sigma;  

    if (EXPRESSION(l) >= EXPRESSION(r)) {
      end = r;
    } else {
      begin = l;
    }    
    arr.push({N, x, y: EXPRESSION(x)})
    N++;        
  } while (Math.abs(begin - end) > 2 * acc);
    
  return {arr, max:  arr.sort((a,b)=>a.y<b.y ? 1:-1)[0]}
}