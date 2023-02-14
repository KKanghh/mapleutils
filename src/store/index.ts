import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import seedReducer from "./seed";
import loadingReducer from "./loading";

const store = configureStore({
  reducer: { modal: modalReducer, seed: seedReducer, loading: loadingReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
