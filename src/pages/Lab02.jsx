import React from "react";
import { MathComponent } from "mathjax-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { expressionFunc, labels } from "../functions/chartUtils";
import { dichotomieSqrt, methodItemSqrt } from "./../functions/lab2";
import { useState } from "react";
import { EXPRESSION2 } from "./../utils/consts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};

export const Lab02 = () => {
  const [range, setRange] = useState(1);
  const [isMethodDichotomie, setIsMethodDichotomie] = useState(true)

  const sigmaVal = range * 0.0001;
  const data = {
    labels: labels(),
    datasets: [
      {
        type: "line",
        label: "Лінія графіка",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: expressionFunc(EXPRESSION2),
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №2</h2>
        <div className="task">
          <p>
            Побудувати в математичному пакеті графік функції f(x) та приблизно
            визначити один із коренів рівняння. Розв’язати рівняння методами
            ітерацій, дихотомії з точністю  = 1e-2, 1e-3,1e-4: [0]-[1]
          </p>
          <MathComponent tex={String.raw`\arccos(x )- \sqrt(1-0.3x^3)`} />
        </div>
        <div className="row">
          <div className="graphic col s6">
            <Chart type="line" options={options} data={data} />
            <input
              type="range"
              min={1}
              max={100}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <p>Похибка: {sigmaVal.toFixed(4)}</p>
          </div>
          <div className="results col s6">
            <div className="results-buttons row py-4">
            <button className="waves-effect pink accent-3  btn-large col" onClick={() => setIsMethodDichotomie(true)}>Розрахувати методом дихотомії</button>
            <button className="waves-effect pink accent-3 btn-large col ml-2" onClick={() => setIsMethodDichotomie(false)} >Розрахувати методом ітерації</button>            
            </div>
            <div className="result-output">
              <p> Результат: {  isMethodDichotomie ? dichotomieSqrt(0, 1, sigmaVal) : methodItemSqrt(0, 1, sigmaVal) } </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
