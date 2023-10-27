export interface BarChartData {
  year: string;
  launches: {
    name: string;
    rocket: string;
    success: boolean;
  }[];
}
