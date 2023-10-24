import { useEffect } from "react";
import * as echarts from "echarts";
import { PieChartData } from "../../infra/interfaces/pieChartData";
import { Colors } from "../../constants/colors.constants";

const usePieChart = (data: PieChartData[], title: string) => {
  useEffect(() => {
    const pieChartDom = document.getElementById("echarts-pie-container");
    const pieChart = echarts.init(pieChartDom);

    const pieOption = {
      legend: {
        show: false,
      },
      title: {
        text: title,
        textStyle: {
          fontWeight: "bold",
          color: "#f3f3f3",
        },
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: title,
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: data.map((item, index) => {
            return {
              value: item.count,
              name: item.name,
              itemStyle: {
                color: Colors[index],
              },
            };
          }),
          label: {
            show: true,
            color: "#f3f3f3",
            formatter: "{b}: {c}", // Exibe o nome da categoria e o valor
            fontWeight: "bold",
          },
        },
      ],
    };

    pieChart.setOption(pieOption);
    pieChart.resize({
      width: "auto",
    });

    return () => {
      pieChart.dispose();
    };
  }, [data, title]);
};

export default usePieChart;
