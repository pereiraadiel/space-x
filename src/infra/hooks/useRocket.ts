import { useEffect, useState } from "react";
import useApi from "./useApi";
import { Rocket } from "../interfaces/rocket";

const useRocket = () => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const { getRockets } = useApi();

  useEffect(() => {
    getRockets().then((response) => {
      setRockets(response.rockets);
    });
  }, [getRockets, setRockets]);

  return {
    rockets,
  };
};

export default useRocket;
