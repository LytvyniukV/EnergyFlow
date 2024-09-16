export const selectFilters = (state) => state.exercises.filters.docs;
export const selectFilterName = (state) => state.exercises.filters.filterName;
export const selectExercises = (state) => state.exercises.exercises.docs;
export const selectQuery = (state) => state.exercises.exercises.query;
export const selectTotalPages = (state) => state.exercises.totalPages;
export const selectExerciseFilter = (state) => state.exercises.exercises.filter;
export const selectIsExerciseSearching = (state) =>
  state.exercises.isExerciseSearching;
export const isExerciseLoading = (state) => state.exercises.isLoading;
export const selectExerciseItem = (state) => state.exercises.currentExercise;
export const selectReviews = (state) => state.exercises.reviews;
