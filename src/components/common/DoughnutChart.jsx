import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

const DoughnutChart = () => {
  const graph = useRef(null);

  useEffect(() => {
    const chartDom = graph.current;
    const myChart = echarts.init(chartDom);

    const option = {
      darkMode: "auto",
      title: {
        text: "Graph",
        top: "5%",
        left: "5%",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        show: false,
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 50,
              name: "Education",
              itemStyle: {
                color: "#fcda9e",
              },
            },
            {
              value: 70,
              name: "Email",
              itemStyle: {
                color: "#fa7d5d",
              },
            },
            {
              value: 84,
              name: "Union Ads",
              itemStyle: {
                color: "#f1cfcb",
              },
            },
            {
              value: 30,
              name: "Video Ads",
              itemStyle: {
                color: "#d84b5d",
              },
            },
          ],
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

  return <div ref={graph} style={{ width: "100%", height: "200px" }}></div>;
};

export default DoughnutChart;
