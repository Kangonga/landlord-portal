import { createSlice } from "@reduxjs/toolkit";

interface meterInterface {
    loading:boolean,
    meterInfo: {},
    utility:string,
    building:string,
    submeters:{}[],
    activeMeter:{}
}
const initialState:meterInterface = {
    loading: false,
    meterInfo: {
        totalCollections:0,
        paymentsIn:[],
        paymentsOut:[]
    },
    utility:'',
    building:'',
    submeters:[{}],
    activeMeter:{}
}

const meterReducer = createSlice({
    name:'meter',
    initialState,
    reducers:{
        changeActiveMeter:()=>{}
    }
})

export const meterActions = meterReducer.actions
export default meterReducer.reducer