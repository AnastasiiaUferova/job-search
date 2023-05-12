import { useState } from "react";
import { BASIC_URL } from "../_constants/constants";
import axios from "axios";

export default function useFetch() {
  const [data, setData] = useState<[]>([]);
  const [catalogueData, setCatalogueData] = useState<[]>([]);
  const [vacDetails, setVacDetails] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetchData = (url: string) => {
    setLoading(true);
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
        setData(res.data.objects);
        setCatalogueData(res.data);
        setVacDetails(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    error,
    data,
    fetchData,
    catalogueData,
    vacDetails,
  };
}
