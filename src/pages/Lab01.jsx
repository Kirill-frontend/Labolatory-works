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
import {methodItem, dichotomie} from '../functions/lab01'
import { useState } from "react";
import { useEffect } from "react";
import { EXPRESSION } from "../utils/consts";

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

export const Lab01 = () => {
  const [range, setRange] = useState(1);
  const [dichState, setDich] = useState(dichotomie());
  const sigmaVal = range * 0.001;
  const maxIt = methodItem()[0];
  useEffect(() => {
    
    setDich(dichotomie(0, 1, sigmaVal));
  }, [range, setDich, sigmaVal]);

  const data = {
    labels: labels(),
    datasets: [
      {
        type: "line",
        label: "Лінія графіка",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: expressionFunc(EXPRESSION),
      },
      {
        type: "bubble",
        label: "Точка максимума діхотомія",
        borderColor: "rgba(255, 99, 132)",
        fill: true,
        data: [{ x: dichState.max.x, y: dichState.max.y, r: 10 }],
      },
      {
        type: "bubble",
        label: "Точка максимума ітерація",
        borderColor: "rgba(255, 99, 132)",
        fill: true,
        data: [{ x: maxIt.x, y: maxIt.y, r: 10 }],
      },
    ],
  };

  return (
    <>
      <div className="container">
        <h2 className="center">Лабораторна робота №1</h2>
        <div className="task">
          <p>
            Побудувати графік функції відповідно варіанту. Написати програму
            пошуку max значення функцiї методом ітерацій та методом дихотомiї,
            відмітити точку max на графіку.[0]-[1]
          </p>
          <MathComponent tex={String.raw`\cos(\pi x)\over(1+x)`} />
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
            <p>Похибка: {sigmaVal.toFixed(3)}(Дихотомiя)</p>
          </div>

          <div className=" col s6">
            <Tabs selectedTabClassName="cust-tab-selected">
              <TabList className={"tabs cust-tabs"}>
                <Tab className={"cust-tab"}>Метод дихотомiї</Tab>
                <Tab className={"cust-tab"}>Метод ітерації</Tab>
              </TabList>

              <TabPanel className={"cust-tab-panel"}>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>N</th>
                      <th>x</th>
                      <th>y</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dichState.arr.map((i, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td className={idx === 0 ? "max-ping" : ""}>
                          {i.x.toFixed(2)}
                        </td>
                        <td className={idx === 0 ? "max-ping" : ""}>{i.y}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <table className="striped">
                  <thead>
                    <tr>
                      <th>N</th>
                      <th>x</th>
                      <th>y</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dichState &&
                      methodItem().map((i, idx) => (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td className={idx === 0 ? "max-ping" : ""}>
                            {i.x.toFixed(2)}
                          </td>
                          <td className={idx === 0 ? "max-ping" : ""}>{i.y}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
