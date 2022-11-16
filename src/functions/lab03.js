import { EXPRESSION3 } from './../utils/consts';

export function simpson(a, b, n) {
  const h = (b - a) / n;
  let I,
    I2 = 0,
    I4 = 0;
  I4 = EXPRESSION3(a + h);
  for (let k = 2; k < n; k += 2) {
    I4 += EXPRESSION3(a + (k + 1) * h);
    I2 += EXPRESSION3(a + k * h);
  }
  I = EXPRESSION3(a) + EXPRESSION3(b) + 4 * I4 + 2 * I2;
  I *= h / 3;
  return I;
}

export function methodOfTrapezium(a, b, n) {
  const h = (b - a) / n
  
  let result = 0
  result += EXPRESSION3(a) / 2;
  result += EXPRESSION3(b) / 2;
  for (let i = 1; i < n - 1; ++i) result += EXPRESSION3(a + i * h);
  return h * result;
}

export function monteCarlo(a, b, n) {
  const redDots = []
  const greenDots = []
  const step = (b - a) / n;
  let min = EXPRESSION3(a);
  let max = EXPRESSION3(a);

  for (let i = a; i <= b; i += step) {
    if (EXPRESSION3(i) <= min) min = EXPRESSION3(i);
    if (EXPRESSION3(i) >= max) max = EXPRESSION3(i);
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    let xx = a + ((b - a) * (Math.random() * 1001)) / 1000;
    let yy = min + ((max - min) * (Math.random() * 1001)) / 1000;

    if(xx > 1) xx = 1
    if (yy < EXPRESSION3(xx)) {
      count++;
      greenDots.push({ x: xx, y: yy });
    } else {
      redDots.push({ x: xx, y: yy });
    }
  }
  

  return {redDots, greenDots, result: count*(b-a)*(max-min)/n}
}