import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: null,
      name: null,
      gender: null,
      activeTime: 0,
      weight: 0,
      liters: 0,
      avatarURL: null,
      favoriteExercises: [],
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: (builder) => builder,
});

export const userReduser = userSlice.reducer;
