import { useCallback, useEffect, useState } from "react";
import { useGetDataAuthQuery } from "../redux/slices/authSlice";

export default function useAuth() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [ttl, setTtl] = useState<number>();

  const tokenAuth = localStorage.getItem("token");

  const { error: authError, refetch } = useGetDataAuthQuery("");

  const fetchDataAuth = async () => {
    try {
      const response = await refetch();
      localStorage.setItem("token", response.data.access_token);
      setLoggedIn(true);
    } catch (err) {
      console.log(authError);
    }
  };

  const fetchDataTtl = async () => {
    try {
      const response = await refetch();
      setTtl(response.data.ttl);
    } catch (err) {
      console.log(authError);
    }
  };

  const tokenCheck = () => {
    if (tokenAuth === null) {
      fetchDataAuth();
    } else setLoggedIn(true);
  };

  // check if the token is expired
  const ttlCheck = () => {
    fetchDataTtl();
    if (ttl! < Date.now() / 1000) {
      fetchDataAuth();
    }
  };

  const checkIfLoggedIn = useCallback(tokenCheck, [tokenAuth]);

  useEffect(() => {
    ttlCheck();
    checkIfLoggedIn();
  }, []);

  return {
    loggedIn,
  };
}
