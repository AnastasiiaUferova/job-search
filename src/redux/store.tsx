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
import setCardIdReducer from "./slices/idSlice";

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
    setCardId: setCardIdReducer,
    [vacApi.reducerPath]: vacApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
