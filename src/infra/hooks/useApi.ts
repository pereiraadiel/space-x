import axios from "axios";
import { LaunchesRequest, LaunchesResponse } from "../interfaces/launch";
import { LaunchesStatsResponse } from "../interfaces/launchStat";
import { RocketsResponse } from "../interfaces/rocket";

const apiUrl = process.env.NEXT_APP_API_URL || "http://localhost:8080";

const api = axios.create({
  baseURL: apiUrl,
});

const getLaunches = async (request: LaunchesRequest) => {
  const response = await api.get<LaunchesResponse>("/launches", {
    params: request,
  });
	response.data = {
		hasNext: false,
		hasPrev: false,
		page: 1,
		totalPages: 1,
		totalDocs: 2,
		results: [{
			id: '123',
			name: 'EFG',
			date: new Date(),
			success: true,
			youtubeId: '',
			rocket: '123'
		},
		{
			id: '789',
			name: 'ABC',
			date: new Date(),
			success: true,
			youtubeId: '',
			rocket: '456'
		}] as any
	}
  return response.data;
};

const getRockets = async () => {
  try {
    const response = await api.get<RocketsResponse>("/rockets");
    response.data = {
      rockets: [
        {
          id: "123",
          name: "Rocket 1A",
        },
        {
          id: "456",
          name: "Rocket 2B",
        },
      ],
    };
    return response.data;
  } catch (error) {
    return {
      rockets: [
        {
          id: "123",
          name: "Rocket 1A",
        },
        {
          id: "456",
          name: "Rocket 2B",
        },
      ],
    };
  }
};

const getLaunchesStats = async () => {
  const response = await api.get<LaunchesStatsResponse>("/launches/stats");
  return response.data;
};

const useApi = () => {
  return {
    getLaunches,
    getLaunchesStats,
    getRockets,
  };
};

export default useApi;
