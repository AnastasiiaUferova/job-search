import { useState } from "react";
import { BASIC_URL } from "../_constants/constants";
import axios from "axios";
import { vacDetailsType } from "../types/types";

export default function useGetDetailedData() {
  const [vacDetails, setVacDetails] = useState<vacDetailsType>({
    id: 0,
    profession: "",
    payment_from: 0,
    currency: "",
    town: {
      title: "",
    },
    type_of_work: {
      title: "",
    },
    vacancyRichText: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);

  const getDetailedData = async (url: string) => {
    try {
      setLoading(true);
      const response = await axios.get(BASIC_URL + url, {
        headers: {
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
          "x-api-app-id":
            "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setVacDetails(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return {
    loading,
    error,
    vacDetails,
    getDetailedData,
  };
}
