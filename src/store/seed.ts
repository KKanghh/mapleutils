import Ring from "@/types/Ring";
import { createSlice } from "@reduxjs/toolkit";

export interface SeedState {
  targets: Ring[];
}

const initialSeedState: SeedState = {
  targets: [],
};

const seedSlice = createSlice({
  name: "seed",
  initialState: initialSeedState,
  reducers: {
    add(state, action) {
      state.targets.push(action.payload);
    },
    remove(state, action) {
      state.targets = state.targets.filter(
        (target) =>
          target.name !== action.payload.name ||
          target.level !== action.payload.level
      );
    },
  },
});

export const seedActions = seedSlice.actions;

export default seedSlice.reducer;
