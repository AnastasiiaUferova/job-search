import { useState } from "react";
import { AUTH_URL, BASIC_URL, configAuth } from "../_constants/constants";
import axios from "axios";

export default function useAuth() {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [ttl, setTtl] = useState<number>();

  const fetchDataAuth = () => {
    axios
      .get(BASIC_URL + AUTH_URL, configAuth)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  const fetchDataTtl = () => {
    axios
      .get(BASIC_URL + AUTH_URL, configAuth)
      .then((res) => {
        setTtl(res.data.ttl);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      fetchDataAuth();
    } else setLoggedIn(true);
  };

  const ttlCheck = () => {
    fetchDataTtl();
    if (ttl! < Date.now() / 1000) {
      fetchDataAuth();
    }
  };

  return {
    error,
    tokenCheck,
    loggedIn,
    ttlCheck,
  };
}
