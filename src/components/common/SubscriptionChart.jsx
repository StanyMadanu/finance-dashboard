import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SubscriptionChart = () => {
  const subscription = useRef(null);

  useEffect(() => {
    var chartDom = subscription.current;
    var myChart = echarts.init(chartDom);

    const option = {
      darkMode: "auto",
      title: {
        text: "Subscriptions",
        top: "5%",
        left: "5%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          axisLabel: {
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
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "Expense",
          type: "bar",
          barWidth: "60%",
          data: [
            {
              value: 102,
              itemStyle: {
                color: "#ff6b42",
              },
            },
            {
              value: 152,
              itemStyle: {
                color: "#f5d6d0",
              },
            },
            {
              value: 200,
              itemStyle: {
                color: "#ff6b42",
              },
            },
            {
              value: 334,
              itemStyle: {
                color: "#ff6b42",
              },
            },
            {
              value: 500,
              itemStyle: {
                color: "#f5d6d0",
              },
            },
            {
              value: 330,
              itemStyle: {
                color: "#ff6b42",
              },
            },
            {
              value: 220,
              itemStyle: {
                color: "#f5d6d0",
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

  return (
    <div ref={subscription} style={{ width: "100%", height: "200px" }}></div>
  );
};

export default SubscriptionChart;
