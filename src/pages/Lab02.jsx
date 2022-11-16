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
import { labels, expressionFunc } from "../functions/chartUtils";
import { methodItem, dichotomieSqrt } from "./../functions/lab02";
import { useState, useEffect } from "react";
import { EXPRESSION2 } from "../utils/consts";

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
  const [result, setResult] = useState(0);
  const [isDich, setIsDich] = useState(false);
  const sigmaVal = range * 0.001;

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

  useEffect(() => {
    setResult(isDich ? dichotomieSqrt(sigmaVal) : methodItem(sigmaVal));
  }, [sigmaVal, isDich, setResult]);

  // useEffect(() => {
  //     console.log(methodItem(sigmaVal));
  // }, [])

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №2</h2>
        <div className="task">
          <p>
            Побудувати в математичному пакеті графік функції f(x) та приблизно
            визначити один із коренів рівняння. Розв’язати рівняння методами
            ітерацій, дихотомії з точністю  = 1e-2, 1e-3,1e-4:
          </p>
          <MathComponent tex={String.raw`\arccos(x) - \sqrt0.3x^3`} />
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
            <p>Похибка: {sigmaVal.toFixed(3)}</p>
          </div>

          <div className=" col s6">
            <div className="row py-4">
              <button className="btn  red lighten-2" onClick={() => setIsDich(true)}>
                Знайти корень методом дихотомiя
              </button>
              <button className="btn  red lighten-2 ml-4" onClick={() => setIsDich(false)}>
                Знайти корень методом ітерації
              </button>
            </div>
            <div className="row">
              <p>Результат: {result} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
