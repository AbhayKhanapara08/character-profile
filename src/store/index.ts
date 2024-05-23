import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./slice";
import { characterSlice } from "./characterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [characterSlice.reducerPath]: characterSlice.reducer,
    character: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
