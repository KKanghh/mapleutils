import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  loading: boolean;
}

const initialLoadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    start(state) {
      state.loading = true;
    },
    stop(state) {
      state.loading = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
