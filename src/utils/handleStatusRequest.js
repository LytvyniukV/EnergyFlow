export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state) => {
  state.isLoading = false;
};
