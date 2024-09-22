import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axiosApi/axios";

export const getFilters = createAsyncThunk(
  "exercises/getFiters",
  async (searchParams, thunkAPI) => {
    try {
      const { data } = await api.get(`/filters?${searchParams}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExercises = createAsyncThunk(
  "exercises/getExercises",
  async (searchParams, thunkAPI) => {
    try {
      const { data } = await api.get(`/exercises?${searchParams}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const leaveReview = createAsyncThunk(
  "exercises/leaweReview",
  async (review, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.post(`/exercises/reviews/${review.id}`, {
        rating: review.rating,
        comment: review.comment,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
