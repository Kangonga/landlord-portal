import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    meterInfo: {
        submeters:[],
        default:{},
        active:{}
    },
    utility:''
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