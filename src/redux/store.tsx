import { configureStore } from "@reduxjs/toolkit";
import { vacApi } from "./slices/apiSlice";
import setKeywordReducer from "./slices/paramsSlice";
import setPageReducer from "./slices/paramsSlice";
import setSalaryFromReducer from "./slices/paramsSlice";
import setSalaryToReducer from "./slices/paramsSlice";
import setCatalogueReducer from "./slices/paramsSlice";
import setAgreementReducer from "./slices/paramsSlice";
import setVacDataReducer from "./slices/vacGeneralSlice";
import setSavedDataReducer from "./slices/savedSlice";
import { authApi } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    setKeyword: setKeywordReducer,
    setPage: setPageReducer,
    setSalaryFrom: setSalaryFromReducer,
    setSalaryTo: setSalaryToReducer,
    setCatalogue: setCatalogueReducer,
    setAgreement: setAgreementReducer,
    setVacData: setVacDataReducer,
    setSavedData: setSavedDataReducer,
    [vacApi.reducerPath]: vacApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
