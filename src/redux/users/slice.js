import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";
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
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload.email;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
      })
      .addCase(login.rejected, handleRejected),
});

export const userReduser = userSlice.reducer;
