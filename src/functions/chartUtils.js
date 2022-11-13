export const labels = (step = 0.1,  begin = 0, end = 1) => {
  const arrLabels = [];
  for (let i = begin; i < end; i += step) arrLabels.push(i.toFixed(1));
  return arrLabels;
};

export const expressionFunc = (expression, begin = 0, end = 1, step = 0.1) => {
  const coords = [];

  for (let i = begin; i < end; i += step) {
    coords.push({x: i, y:expression(i)})
  }

  return coords;
};
