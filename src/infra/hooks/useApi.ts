import axios from "axios";
import { LaunchesRequest, LaunchesResponse } from "../interfaces/launch";
import { LaunchesStatsResponse } from "../interfaces/launchStat";
import { RocketsResponse } from "../interfaces/rocket";

const apiUrl = process.env.NEXT_APP_API_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: apiUrl,
});

const getLaunches = async (request: LaunchesRequest) => {
  try {
    const response = await api.get<LaunchesResponse>("/launches", {
      params: request,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getRockets = async () => {
  try {
    const response = await api.get<RocketsResponse>("/rockets");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getLaunchesStats = async () => {
  try {
    const response = await api.get<LaunchesStatsResponse>("/launches/stats");
    console.warn("response stats:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const useApi = () => {
  return {
    getLaunches,
    getLaunchesStats,
    getRockets,
  };
};

export default useApi;
