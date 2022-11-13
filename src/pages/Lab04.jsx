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
import { useState } from "react";
import regression from "regression";
import { formatForReg } from './../functions/formatter';

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

export const Lab04 = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8];
  const y = [56.9, 67.4, 81.6, 201, 240, 474, 490, 518];

  const [data, setData] = useState({
    labels: x,
    datasets: [
      {
        type: "line",
        label: "Лінія графіка",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: regression.power(formatForReg(x,y)).points.map(point => ({x: point[0], y: point[1]})),
      },
      {
        // green
        label: "",
        type: "scatter",
        borderColor: "rgb(63, 173, 0)",
        data: x.map((x, idx) => ({x: x, y: y[idx]})),
      },
    ],
  });

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №4</h2>

        <div className="graphic">
          <Chart options={options} data={data} />
        </div>
      </div>
    </>
  );
};
