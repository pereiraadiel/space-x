import { BarChartData } from "../../infra/interfaces/barChartData";
import { Rocket } from "./../../infra/interfaces/rocket";

export const convertDataToChartMapper = (
  rockets: Rocket[],
  launchesStats: BarChartData[]
) => {
  return rockets.map((rocket) => {
    const { totalLaunches, successTotal } = launchesStats.reduce(
      (acc: { totalLaunches: number; successTotal: number }, current) => {
        let { totalLaunches, successTotal } = acc;

        const { total, success } = current.launches.reduce(
          (accItem: { total: number; success: number }, currentItem) => {
            let { total, success } = accItem;
            if (currentItem.rocket === rocket.name) {
              total += 1;
              if (currentItem.success) {
                success += 1;
              }
            }
            return { total, success };
          },
          { total: 0, success: 0 }
        );

        totalLaunches += total;
        successTotal += success;

        return { totalLaunches, successTotal };
      },
      { totalLaunches: 0, successTotal: 0 }
    );

    return {
      name: rocket.name,
      count: totalLaunches,
      successCount: successTotal,
    };
  });
};
