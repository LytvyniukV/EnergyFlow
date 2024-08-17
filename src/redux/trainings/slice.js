import { createSlice } from "@reduxjs/toolkit";

const trainingSlice = createSlice({
  name: "training",
  initialState: {
    training: {
      activeDay: "",
      dayTraining: {
        date: "",
        trainings: [],
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

export const trainingReducer = trainingSlice.reducer;
