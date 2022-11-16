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
import { methodItem, dichotomie } from "../functions/lab01";
import { useState } from "react";
import { useEffect } from "react";
import { formatForReg } from "./../functions/convert";
import regression from "regression";

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

export const Lab04 = () => {
  const x = [57, 60, 65, 70, 75, 84, 90, 105];
  const y = [67, 71, 76, 80, 86, 93, 99, 114];

  const regressionData = regression
    .linear(formatForReg(x, y))
    .points.map((point) => ({ x: point[0], y: point[1] }));

  const data = {
    labels: x,
    datasets: [
      {
        type: "line",
        label: "Лінія графіка",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: x.map((x, idx) => ({ x: x, y: y[idx] })),
      },
      {
        label: "",
        type: "scatter",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0, 255, 132)",
        pointRadius: 8,
        data: regressionData,
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №4</h2>
        <div className="task">
          <p>
            Написати програму лінійної регресії методом найменших квадратів для
            функції y(x). На графіку побудувати експериментальні точки та пряму
            регресії.
          </p>          
        </div>
        <div className="row">
          <div className="graphic ">
            <Chart type="line" options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
