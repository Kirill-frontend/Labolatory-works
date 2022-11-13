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
import { useState } from "react";
import { EXPRESSION3 } from "./../utils/consts";
import { simpson, methodOfTrapezium, monteCarlo } from './../functions/lab3';

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
  scales: {
    x: {
      type: "linear",
      position: "bottom",
    },
  },
};

export const Lab03 = () => {
  const BEGIN = 0
  const END = 1
  const [range, setRange] = useState(100);
  const [result, setResult] = useState(0);

  const [data, setData] = useState({
    labels: labels(),
    datasets: [
      {
        type: "scatter",
        label: "Лінія графіка",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: expressionFunc(EXPRESSION3, BEGIN, END, 0.001),
      },
      { // red
        label: "",
        type: "scatter",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      { // green
        label: "",
        type: "scatter",
        borderColor: "rgb(63, 173, 0)",
        data: [],
      },
    ],
  });

  const monteCarloHandling = () => {
    const {result, redDots, greenDots} = monteCarlo(BEGIN, END, range)
    const newData = {
      labels: labels(),
      datasets: [
        {
          type: "scatter",
          label: "Лінія графіка",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: expressionFunc(EXPRESSION3, BEGIN, END, 0.001),
        },
        { // red
          label: "",
          type: "scatter",
          borderColor: "rgb(255, 99, 132)",
          data: redDots,
        },
        { // green
          label: "",
          type: "scatter",
          borderColor: "rgb(63, 173, 0)",
          data: greenDots,
        },
      ],
    }
    setResult(result)
    setData(newData)    
  }


  // if (!range) setRange("100")

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №3</h2>
        <div className="task">
          <p className="align-items-center">
            Чисельно обчислити інтеграл{" "}
            <img
              src="https://i.ibb.co/Wc5cCMB/integral.png"
              alt="integral"
              border="0"
            />{" "}
            вказаними у таблиці методами.
          </p>
          <MathComponent tex={String.raw`\frac{\cos(\pi x)} {1+x}`} />
        </div>
        <div className="row">
          <div className="graphic col s6">
            <Chart  options={options} data={data} />
            <label htmlFor="numbers">N: {range}</label>

            <input
              type="number"
              min={1}
              max={100}
              value={range}
              onChange={(e) => setRange(e.target.value)}
              id="numbers"
            />
          </div>
          <div className="results col s6">
            <div className="results-buttons row py-4">
              <button
                className="waves-effect pink accent-3  btn-small col-3"
                onClick={() => setResult(simpson(BEGIN, END, range))}
              >
                Розрахувати методом Сімпсона
              </button>
              <button
                className="waves-effect pink accent-3 btn-small col-3 "
                onClick={() => setResult(methodOfTrapezium(BEGIN, END, range))}
              >
                Розрахувати методом Трапеції
              </button>
              <button
                className="waves-effect pink accent-3 btn-small col-3"
                onClick={() => monteCarloHandling()}
              >
                Розрахувати методом Монте-Карло
              </button>
            </div>
            <div className="result-output">
              <p>Результат: {result}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
