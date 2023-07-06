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
  activeSubMeter: string;
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
  activeSubMeter: "all",
};

const meterReducer = createSlice({
  name: "meter",
  initialState,
  reducers: {
    changeActiveMeter: (state, action) => {
      state.accName = action.payload.accName;
      state.accNo = action.payload.accNo;
      state.accType = action.payload.accType;
      state.buildingNo = action.payload.buildingNo;
      state.mmId = action.payload.mmId;
      state.regDate = action.payload.regDate;
      state.sm = action.payload.sm;
      state.utilityType = action.payload.utilityType;
      if (action.payload.payments) {
        state.payments = action.payload.payments;
      }
      state.activeSubMeter = "all";
    },
    changeActiveSubMeter: (state, action) => {
      state.activeSubMeter = action.payload;
    },
  },
});

export const meterActions = meterReducer.actions;
export default meterReducer.reducer;
