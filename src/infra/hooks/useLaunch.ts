import { useEffect, useState } from "react";
import useApi from "./useApi";
import {
  Launch,
  LaunchesRequest,
  LaunchesResponse,
} from "../interfaces/launch";
import { LaunchByYear } from "../interfaces/launchStat";

const useLaunch = () => {
  const [launchesResponse, setLaunchesResponse] = useState<LaunchesResponse>();
  const [launchesStats, setLaunchesStats] = useState<LaunchByYear[]>([]);
  const { getLaunches, getLaunchesStats: getLaunchesStatistics } = useApi();

  const getLaunchesStats = () => {
    getLaunchesStatistics()
      .then((res) => {
        if (res) {
          setLaunchesStats(res.launchesByYear);
        }
      })
      .catch();
  };

  const getLaunchesResponse = (request: LaunchesRequest) => {
    getLaunches(request)
      .then((res) => {
        if (res) {
          setLaunchesResponse(res);
        }
      })
      .catch();
  };

  return {
    launchesResponse,
    getLaunchesResponse,
    launchesStats,
    getLaunchesStats,
  };
};

export default useLaunch;
