
export function formatForReg(x, y) {
  return x.map((x, idx) => ([x, y[idx]]))
}