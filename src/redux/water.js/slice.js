import { createSlice } from "@reduxjs/toolkit";

const waterSlice = createSlice({
  name: "water",
  initialState: {
    water: {
      activeDay: "",
      dayWater: {
        date: "",
        water: [],
      },
      currentDay: [],
    },
    isLoading: false,
  },
  reducers: {
    setActiveDay: (state, action) => {
      state.activeDay = action.payload;
    },
  },
  extraReducers: (builder) => builder,
});

export const waterReducer = waterSlice.reducer;
