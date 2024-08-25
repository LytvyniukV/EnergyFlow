import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axiosApi/axios";

const setAuthHeader = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  api.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.post("/auth/register", userData);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.post("/auth/login", userData);

      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const {
      user: { refreshToken },
    } = thunkAPI.getState();
    setAuthHeader(refreshToken);
    const { data } = await api.post("/auth/logout");
    clearAuthHeader();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "user/currentUser",
  async (_, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await api.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_, thunkAPI) => {
    const {
      user: { refreshToken },
    } = thunkAPI.getState();
    setAuthHeader(refreshToken);
    const {
      data: { data },
    } = await api.post("/auth/refresh");
    setAuthHeader(data.accessToken);
    return data;
  },
  {
    condition: (_, { getState }) => {
      const {
        user: { refreshToken },
      } = getState();

      return refreshToken !== null;
    },
  }
);
