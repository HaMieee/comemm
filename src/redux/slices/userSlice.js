import { createSlice } from "@reduxjs/toolkit";

const initState = {
  user: {
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    token: "",
  },
  isLoading: false,
  isError: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    loginPending:(state) => {
        state.isLoading = true
    },
    loginSuccess: (state, action) => {
        state.user = action.payload
        state.isLoading = false
    },
    loginError:(state, action) => {
        state.isError = action.payload
    },
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    getUserError: (state, action) => {
      state.isError = action.payload;
    },
    addUserPending: (state) => {
      state.isLoading = true;
    },
    addUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    addUserError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export default userSlice.reducer;

export const userAction = userSlice.actions;
