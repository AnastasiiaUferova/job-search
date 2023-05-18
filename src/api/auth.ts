import { useCallback, useEffect, useState } from "react";
import { AUTH_URL, BASIC_URL, configAuth } from "../_constants/constants";
import axios from "axios";

export default function useAuth() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [ttl, setTtl] = useState<number>();

  const token = localStorage.getItem("token");

  const fetchDataAuth = async () => {
    try {
      const response = await axios.get(BASIC_URL + AUTH_URL, configAuth);
      localStorage.setItem("token", response.data.access_token);
      setLoggedIn(true);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const fetchDataTtl = async () => {
    try {
      const response = await axios.get(BASIC_URL + AUTH_URL, configAuth);
      setTtl(response.data.ttl);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      fetchDataAuth();
    } else setLoggedIn(true);
  };

  const checkIfLoggedIn = useCallback(tokenCheck, [token]);

  const ttlCheck = () => {
    fetchDataTtl();
    if (ttl! < Date.now() / 1000) {
      fetchDataAuth();
    }
  };

  useEffect(() => {
    ttlCheck();
    checkIfLoggedIn();
  }, []);

  return {
    error,
    loggedIn,
  };
}
