import { useState } from "react";
import { AUTH_URL, BASIC_URL, configAuth } from "../_constants/constants";
import axios from "axios";

export default function useAuth() {
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const fetchDataAuth = () => {
    axios
      .get(BASIC_URL + AUTH_URL, configAuth)
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setLoggedIn(true);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      fetchDataAuth();
    } else setLoggedIn(true);
  };

  return {
    error,
    tokenCheck,
    loggedIn,
  };
}
