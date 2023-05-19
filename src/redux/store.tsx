import { configureStore } from "@reduxjs/toolkit";
import { vacApi } from "./slices/apiSlice";
import setKeywordReducer from "./slices/paramsSlice";
import setPageReducer from "./slices/paramsSlice";
import setSalaryFromReducer from "./slices/paramsSlice";
import setSalaryToReducer from "./slices/paramsSlice";
import setCatalogueReducer from "./slices/paramsSlice";
import setAgreementReducer from "./slices/paramsSlice";

export const store = configureStore({
  reducer: {
    setKeyword: setKeywordReducer,
    setPage: setPageReducer,
    setSalaryFrom: setSalaryFromReducer,
    setSalaryTo: setSalaryToReducer,
    setCatalogue: setCatalogueReducer,
    setAgreement: setAgreementReducer,
    [vacApi.reducerPath]: vacApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/*
import { configureStore } from "@reduxjs/toolkit";
import setQueryReducer from "./slices/searchSlice";
import setisSubmittedReducer from "./slices/searchSlice";
import { showApi } from "./slices/apiSlice";
import setApiCardsReducer from "./slices/apiCardsSlice";
import setPopupDataReducer from "./slices/popupSlice";
import setIsOpenPopupReducer from "./slices/popupSlice";
import setFormCardsReducer from "./slices/formCardsSlice";

export const store = configureStore({
  reducer: {
    setQuery: setQueryReducer,
    setIsSubmitted: setisSubmittedReducer,
    setApiCards: setApiCardsReducer,
    setPopupData: setPopupDataReducer,
    setIsOpenPopup: setIsOpenPopupReducer,
    setFormCards: setFormCardsReducer,
    [showApi.reducerPath]: showApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(showApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
*/
