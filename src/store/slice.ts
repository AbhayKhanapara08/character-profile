import { createSlice } from "@reduxjs/toolkit";

export interface CharacterState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState = {
  data: [],
  loading: false,
  error: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export default characterSlice.reducer;
export const characterAction = characterSlice.actions;
