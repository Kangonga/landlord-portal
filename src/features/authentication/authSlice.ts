import { createSlice } from "@reduxjs/toolkit";

export interface authInterface {
  userId: string;
  token: string;
  phone: string;
  names: string;
  phone1: number | null;
  phone2: number | null;
  email: string | null;
  address: string | null;
  nationalID: string | null;
  regDate: string;
}
const initialState: authInterface = {
  userId: "",
  token: "",
  phone: "",
  names: "",
  phone1: null,
  phone2: null,
  email: "",
  address: "",
  nationalID: "",
  regDate: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updatePhoneNumber: (state, action) => {
      state.phone = action.payload;
    },
    updateUserId: (state, action) => {
      console.log("payload", action.payload);
      state.userId = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload.token;
    },
    updatePassword: (action) => {
      console.log("payload", action);
    },
    login: (state, action) => {
      state.userId = action.payload.user;
      state.token = action.payload.token;
    },
    logout: () => initialState,
  },
});

export default authReducer.reducer;
export const authActions = authReducer.actions;
