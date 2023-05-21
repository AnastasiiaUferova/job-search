import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AUTH_URL,
  BASE_URL,
  headersAuth as headers,
} from "../../_constants/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers,
  }),

  endpoints: (builder) => ({
    getDataAuth: builder.query({
      query: () => AUTH_URL,
    }),
  }),
});

export const { useGetDataAuthQuery } = authApi;
