export interface LaunchesStatsResponse {
  launchesByYear: LaunchByYear[];
}

export interface LaunchByYear {
  year: string;
  launches: {
    success: boolean;
    name: string;
    rocket: string;
  }[];
}
