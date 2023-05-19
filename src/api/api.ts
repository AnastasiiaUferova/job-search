import { useState } from "react";
import { BASE_URL } from "../_constants/constants";
import axios from "axios";

export default function useGetData(isGeneralData: boolean) {
  const [data, setData] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);

  const getData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL + url, {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "x-api-app-id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setData(isGeneralData ? response.data.objects : response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return {
    loading,
    error,
    data,
    getData,
  };
}
