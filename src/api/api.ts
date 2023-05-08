import { useState } from "react";
import { AUTH_URL, BASIC_URL, configAuth } from "../_constants/constants";
import axios from "axios";

export default function useFetch() {
  const [dataAuth, setDataAuth] = useState([";"]);
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [loadingData, setLoadingData] = useState<boolean | null>(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const fetchDataAuth = () => {
    setLoading(true);
    axios
      .get(BASIC_URL + AUTH_URL, configAuth)
      .then((res) => {
        setDataAuth(res.data);
        localStorage.setItem("token", res.data.access_token);
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  const fetchData = (url: string) => {
    setLoadingData(true);
    axios
      .get(BASIC_URL + url, {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "x-api-app-id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoadingData(false));
  };

  const tokenCheck = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token === null) {
        fetchDataAuth();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    dataAuth,
    loading,
    error,
    data,
    fetchData,
    fetchDataAuth,
    loadingData,
    loggedIn,
    tokenCheck,
  };
}
