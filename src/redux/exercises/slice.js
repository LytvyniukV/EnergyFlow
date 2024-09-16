import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleRejected } from "../../utils/handleStatusRequest";
import { getExercises, getFilters } from "./operations";

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    filters: {
      filterName: "Muscles",
      docs: [],
    },
    exercises: {
      filter: {},
      query: "",
      docs: [],
    },
    currentExercise: {
      bodyPart: "",
      equipment: "",
      gifUrl: "",
      name: "",
      target: "",
      description: "",
      rating: 0,
      burnedCalories: 0,
      time: 0,
      popularity: 0,
      reviews: 0,
    },
    reviews: [],
    isLoading: false,
    totalPages: 0,
    isExerciseSearching: false,
  },
  reducers: {
    changeQuery(state, action) {
      state.exercises.query = action.payload;
    },
    changeFilterName(state, action) {
      state.filters.filterName = action.payload;
    },
    changeExerciseFilter(state, action) {
      state.exercises.filter = action.payload;
    },
    changeIsExerciseSearching(state, action) {
      state.isExerciseSearching = action.payload;
    },
    setExerciseCard(state, action) {
      state.currentExercise = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getFilters.pending, handlePending)
      .addCase(getFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filters.docs = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.exercises.query = "";
        state.exercises.docs = [];
      })
      .addCase(getFilters.rejected, handleRejected)
      .addCase(getExercises.pending, handlePending)
      .addCase(getExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filters.docs = [];
        state.exercises.docs = action.payload.data;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getExercises.rejected, handleRejected),
});

export const {
  changeFilterName,
  changeQuery,
  changeExerciseFilter,
  changeIsExerciseSearching,
  setExerciseCard,
} = exercisesSlice.actions;
export const exercisesReduser = exercisesSlice.reducer;
