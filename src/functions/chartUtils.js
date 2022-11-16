export const labels = (step = 0.1) => {
  const arrLabels = [];
  for (let i = 0; i < 1; i += step) arrLabels.push(i.toFixed(1));
  return arrLabels;
};

export const expressionFunc = (expression, acc = 0.1) => {
  const coords = [];


  for (let i = 0; i < 1; i += acc) {
    coords.push({x: i, y:expression(i)})
  }

  return coords;
};

