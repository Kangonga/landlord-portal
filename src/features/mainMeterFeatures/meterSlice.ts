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
const allSm: subMeterInterface = {
  mmId: 0,
  smId: 0,
  meterNo: "all",
  type: 0,
  regDate: "",
  payments: [],
};
const emptySm: subMeterInterface = {
  mmId: 0,
  smId: 0,
  meterNo: "none",
  type: 0,
  regDate: "",
  payments: [],
};
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
  activeSubMeter: subMeterInterface;
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
  activeSubMeter: emptySm,
};

const meterReducer = createSlice({
  name: "meter",
  initialState,
  reducers: {
    changeActiveMeter: (state, action) => {
      if (action.payload == "") {
        state.accName = "";
        state.accNo = "";
        state.accType = "";
        state.buildingNo = "";
        state.mmId = 0;
        state.regDate = "";
        state.sm = [];
        state.utilityType = "";
        state.activeSubMeter = emptySm;
      } else {
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
        state.activeSubMeter = emptySm;
      }
    },
    changeActiveSubMeter: (state, action) => {
      if (action.payload == "all") {
        state.activeSubMeter = { ...allSm };
        return;
      }
      state.activeSubMeter = { ...action.payload };
    },
  },
});

export const meterActions = meterReducer.actions;
export default meterReducer.reducer;
