export interface Launch {
  id: string;
  success: boolean;
  youtubeId: string;
  name: string;
  logoUrl: string;
  flightNumber: number;
  dateUtc: Date;
  rocket: {
    id: string;
    name: string;
  };
}

export interface LaunchesRequest {
  search?: string;
  limit?: number;
  page?: number;
}

export interface LaunchesResponse {
  results: Launch[];
  totalDocs: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}
