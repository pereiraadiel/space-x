import { useEffect, useState } from "react";
import { PieChartData } from "../../infra/interfaces/pieChartData";

const usePieChartStatistics = (data: PieChartData[]) => {
  const [totalLaunches, setTotalLaunches] = useState(0);
  const [totalLaunchesSuccess, setTotalLaunchesSuccess] = useState(0);

  useEffect(() => {
    const { total, success } = data.reduce(
      (acc, current) => {
        return {
          total: acc.total + current.count,
          success: acc.success + current.successCount,
        };
      },
      { total: 0, success: 0 }
    );

    setTotalLaunches(total);
    setTotalLaunchesSuccess(success);
  }, [data]);

  return { totalLaunches, totalLaunchesSuccess };
};

export default usePieChartStatistics;
