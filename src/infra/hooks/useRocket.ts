import { useEffect, useState } from "react";
import useApi from "./useApi";
import { Rocket } from "../interfaces/rocket";

const useRocket = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const { getRockets: getApiRockets } = useApi();

  const getRockets = () => {
    getApiRockets()
      .then((response) => {
        if (response) {
          console.warn('response' ,response);
          setRockets(response);
        }
      })
      .catch((e) => console.error(e.status));
  };

  return {
    rockets,
    getRockets,
  };
};

export default useRocket;
