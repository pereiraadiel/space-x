import { useEffect } from "react";
import * as echarts from "echarts";
import { Colors } from "../../constants/colors.constants";
import { LaunchByYear } from "../../infra/interfaces/launchStat";

const useStackedBarChart = (
  data: LaunchByYear[],
  title: string,
  categories: string[]
) => {
  useEffect(() => {
    const chartDom = document.getElementById("echarts-container");
    const barChart = echarts.init(chartDom);

    const years = data.map((item) => item.year);

    const seriesData = categories.map((category, index) => ({
      name: category,
      type: "bar",
      stack: "stack",
      itemStyle: {
        color: Colors[index],
      },
      data: data.map((item) => {
        const matchingRocket = item.rockets.find(
          (rocket) => rocket.name === category
        );
        return matchingRocket ? matchingRocket.count : 0;
      }),
    }));

    const option = {
      title: {
        text: title,
        textStyle: {
          fontWeight: "bold",
          color: Colors[Colors.length - 1],
        },
        top: "6%",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        show: false,
      },
      xAxis: {
        type: "category",
        data: years,
        axisLabel: {
          textStyle: {
            color: Colors[Colors.length - 1],
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value}",
          margin: -16,
          inside: true,
          textStyle: {
            color: Colors[Colors.length - 1],
          },
        },
        boundaryGap: [0, 0.1],
      },
      series: seriesData,
    };

    barChart.setOption(option);

    return () => {
      barChart.dispose();
    };
  }, [data, title, categories]);
};

export default useStackedBarChart;
