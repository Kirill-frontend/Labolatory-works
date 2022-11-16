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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { labels, expressionFunc } from "../functions/chartUtils";
import { simpson, methodOfTrapezium } from "../functions/lab03";
import { useState } from "react";
import { useEffect } from "react";
import { EXPRESSION3 } from "../utils/consts";
import { monteCarlo } from "./../functions/lab03";

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

export const Lab03 = () => {
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
        data: expressionFunc(EXPRESSION3, 0.001),
      },
      {
        label: "",
        type: "scatter",
        borderColor: "rgb(255, 99, 132)",
        data: [],
      },
      {
        label: "",
        type: "scatter",
        borderColor: "rgb(63, 173, 0)",
        data: [],
      },
    ],
  });

  const monteCarloHandler = () => {
    const { result, redDots, greenDots } = monteCarlo(0, 1, range);
    setResult(result);
    setData({
      labels: labels(),
      datasets: [
        {
          type: "scatter",
          label: "Лінія графіка",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: expressionFunc(EXPRESSION3, 0.001),
        },
        {
          label: "",
          type: "scatter",
          borderColor: "rgb(255, 99, 132)",
          data: redDots,
        },
        {
          label: "",
          type: "scatter",
          borderColor: "rgb(63, 173, 0)",
          data: greenDots,
        },
      ],
    });
  };

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №3</h2>
        <div className="task">
          <p className="align-center">
            Чисельно обчислити інтеграл <img src="https://i.ibb.co/WVsg4Xc/integral.png" alt="integral" /> вказаними у таблиці
            методами. Результат звірити з аналітичним розв'язком. Результати
            розрахунку представити у вигляді таблиці.
          </p>
          <MathComponent tex={String.raw`\cos(\pi x)\over(1+x)`} />
        </div>
        <div className="row">
          <div className="graphic col s6">
            <Chart type="line" options={options} data={data} />
            <input
              type="range"
              min={1}
              max={1000}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <p>N: {range}</p>
          </div>

          <div className=" col s6">
            <div className="flex py-4">
              <button
                className="btn  red lighten-2"
                onClick={() => setResult(simpson(0, 1, range))}
              >
                Розв’язати методом Сімпсона
              </button>
              <button
                className="btn  red lighten-2"
                onClick={() => setResult(methodOfTrapezium(0, 1, range))}
              >
                Розв’язати методом Трапеції
              </button>
              <button
                className="btn  red lighten-2"
                onClick={monteCarloHandler}
              >
                Розв’язати методом Монте-Карло
              </button>
            </div>
            <div className="result">
              <p>Значення інтегралу {result} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
