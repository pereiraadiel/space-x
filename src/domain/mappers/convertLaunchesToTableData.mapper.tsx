/* eslint-disable @next/next/no-img-element */
import { Launch } from "../../infra/interfaces/launch";
import StatusLabel from "../../presentation/components/atoms/statusLabel";

export const convertLaunchesToTableData = (launches: Launch[]) => {
  return launches.map((launch) => {
    console.info(launch)
    return [
      launch.flightNumber,
      <img key={launch.id} src={launch.logoUrl} alt="Logo"/>,
      launch.name,
      new Date(launch.dateUtc).toLocaleDateString("pt-BR"),
      launch.rocket.name,
      <StatusLabel
        status={launch.success ? "success" : "fail"}
        key={launch.id}
      />,
      launch.youtubeId ? (
        <a 
          href={`https://youtube.com/watch?v=${launch.youtubeId}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/assets/yt.png" alt="YouTube Link" />
        </a>
      ) : (
        <></>
      ),
    ];
  });
};
