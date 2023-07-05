import { dashboardInterface } from "@/pages/login/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: dashboardInterface = {
  data: {
    Names: "",
    phone1: 0,
    phone2: 0,
    email: "",
    address: "",
    nationalID: "",
    regDate: "",
    mm: [],
  },
  status: 0,
  statusDesc: "",
};

const utilitySlice = createSlice({
  name: "utility",
  initialState,
  reducers: {
    initialSetUp: (state, action) => {
      state.data.Names = action.payload.Names;
      state.data.phone1 = action.payload.phone1;
      state.data.phone2 = action.payload.phone2;
      state.data.email = action.payload.email;
      state.data.address = action.payload.address;
      state.data.nationalID = action.payload.nationalID;
      state.data.regDate = action.payload.regDate;
      state.data.mm = Object.values(action.payload.mm);
    },
  },
});

export default utilitySlice.reducer;
export const utilityActions = utilitySlice.actions;
