import { useState, useEffect } from "react";
import {
  AUTH_URL,
  BASIC_URL,
  CATALOGUES_URL,
  configAuth,
} from "../constants/constants";
import axios from "axios";

export default function useFetch() {
  const [dataAuth, setDataAuth] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean | null>(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  /*const configData = {
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      //Authorization: `Bearer ${dataAuth?.access_token})`,
    },
  };*/

  const fetchDataAuth = () => {
    setLoading(true);
    axios
      .get(BASIC_URL + AUTH_URL, configAuth)
      .then((res) => {
        setDataAuth(res.data);
        setToken(res.data.access_token);
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  //console.log(dataAuth);

  const fetchData = (url: string) => {
    setLoading(true);
    axios
      .get(BASIC_URL + url, {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return { dataAuth, loading, error, fetchDataAuth, data, fetchData };
}
