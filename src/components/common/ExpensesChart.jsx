import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ExpensesChart = () => {
  const expense = useRef(null);

  useEffect(() => {
    const chartDom = expense.current;
    const myChart = echarts.init(chartDom);

    const option = {
      darkMode: "auto",
      color: ["#e69e9b"],
      title: {
        text: "Expenses",
        top: "5%",
        left: "5%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["Expense"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          smooth: true,
          areaStyle: {
            opacity: 0.3,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 107, 66)", // Start color
              },
              {
                offset: 1,
                color: "#fff", // End color
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ],
    };

    myChart.setOption(option);

    const resizeChart = () => myChart.resize();
    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
      myChart.dispose();
    };
  }, []);

  return <div ref={expense} style={{ width: "100%", height: "200px" }}></div>;
};

export default ExpensesChart;
