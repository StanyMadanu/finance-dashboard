import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      darkMode: "auto",
      color: ["rgba(255, 107, 66, 0.1)"], // Only need one color for a single line
      title: {
        text: "Income",
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
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            show: false, // Hide y-axis labels
          },
          axisLine: {
            show: false, // Optionally hide the y-axis line
          },
          axisTick: {
            show: false, // Hide the ticks
          },
          splitLine: {
            show: false, // Remove grid lines
          },
        },
      ],
      series: [
        {
          name: "Income",
          type: "line",
          smooth: true, // Smooth the line
          lineStyle: {
            width: 2, // Customize the line thickness
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.3,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 107, 66)", // Start color
              },
              {
                offset: 1,
                color: "rgb(255, 107, 66)", // End color
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [10, 20, 15, 30, 25, 20, 10, 30, 10, 50], // Data points for a single line
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

  return <div ref={chartRef} style={{ width: "100%", height: "175px" }}></div>;
};

export default LineChartComponent;
