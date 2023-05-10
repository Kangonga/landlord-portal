import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    buildingInfo: {
        meters:[],
        default:{},
        active:{}
    },
    utility:''
}

const buildingReducer = createSlice({
    name:'building',
    initialState,
    reducers:{
        changeActiveBuilding:()=>{}
    }
})

export const buildingActions = buildingReducer.actions
export default buildingReducer.reducer