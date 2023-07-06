import { payment } from "@/pages/login/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface paymentsOut {
  mmId: string;
  pId: string;
  paytime: string;
  accNo: string;
  accName: string;
  amount: string;
  message: string;
}
interface subMeterInterface {
  mmId: number;
  smId: number;
  meterNo: string;
  type: number;
  regDate: string;
  payments: payment[];
}
interface motherMeterInterface {
  mmId: number;
  buildingNo: string;
  accNo: string;
  accName: string;
  accType: string;
  utilityType: string;
  regDate: string;
  sm: subMeterInterface[];
  payments?: paymentsOut[];
}

const initialState: motherMeterInterface = {
  mmId: 0,
  buildingNo: "",
  accNo: "",
  accName: "",
  accType: "",
  utilityType: "",
  regDate: "",
  sm: [],
  payments: [],
};

const meterReducer = createSlice({
  name: "meter",
  initialState,
  reducers: {
    changeActiveMeter: (state, action) => {
      state = { ...action.payload };
    },
  },
});

export const meterActions = meterReducer.actions;
export default meterReducer.reducer;
