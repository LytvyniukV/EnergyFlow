import { createSlice } from "@reduxjs/toolkit";
import {
  currentUser,
  login,
  logout,
  refreshToken,
  register,
} from "./operations";
import { handlePending, handleRejected } from "../../utils/handleStatusRequest";

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
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.user = {
          email: null,
          name: null,
          gender: null,
          activeTime: 0,
          weight: 0,
          liters: 0,
          avatarURL: null,
          favoriteExercises: [],
        };
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(refreshToken.pending, (state, action) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(currentUser.pending, handlePending)
      .addCase(currentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(currentUser.rejected, handleRejected),
});

export const userReduser = userSlice.reducer;
