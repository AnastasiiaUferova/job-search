import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, CATALOGUES_URL, headers } from "../../_constants/constants";

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
          headers,
        };
      },
    }),
    getCatalogues: builder.query({
      query: () => {
        return {
          url: CATALOGUES_URL,
          headers,
        };
      },
    }),
    getDetails: builder.query({
      query: (source: string) => {
        return {
          url: `/2.0/vacancies/${source}/`,
          headers,
        };
      },
    }),
  }),
});

export const { useGetVacsQuery, useGetCataloguesQuery, useGetDetailsQuery } =
  vacApi;
