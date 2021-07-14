export const selectAllUsers = (state) => state.users.userData;

// try with filter and find and see the difference
export const selectCurrentUser = (state) => {
  return (
    state.users.currentUser &&
    state.users.userData.find((u) => u.id === state.users.currentUser)
  );
};

export const selectIsLoading = (state) => state.users.loading;
export const selectIsLoaded = (state) => state.users.loaded;
export const selectIsError = (state) => state.users.error;
