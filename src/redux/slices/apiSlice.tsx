import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CATALOGUES_URL } from "../../_constants/constants";

/*const prepareHeaders = (headers:Headers) => {
  const token = localStorage.getItem("token");

  // If we have a token set in state, let's assume that we should be passing it.
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }

  return headers;
};*/

export const vacApi = createApi({
  reducerPath: "vacApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getVacs: builder.query({
      query: (params) => {
        const { keyword, page, catalogue, salaryFrom, salaryTo, agreement } =
          params;
        return {
          url: `/2.0/vacancies/?keyword=${keyword}&published=1&page=${page}&catalogues=${catalogue}&payment_from=${salaryFrom}&payment_to=${salaryTo}&no_agreement=${agreement}&count=4/`,
          headers: {
            "x-secret-key": "GEU4nvd3rej*jeh.eqp",
            "x-api-app-id":
              "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      },
    }),
    getCatalogues: builder.query({
      query: () => CATALOGUES_URL,
    }),
    getDetails: builder.query({
      query: (source: string) => `/2.0/vacancies/${source}/`,
    }),
  }),
});

export const { useGetVacsQuery, useGetCataloguesQuery, useGetDetailsQuery } =
  vacApi;
