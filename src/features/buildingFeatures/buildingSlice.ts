import { createSlice } from "@reduxjs/toolkit";

export interface buildingInterface {
    label:string,
    meters:{}[]
}

const initialState = {
    loading: false,
    buildingInfo: {
        meters:[],
        default:{},
        active:{}
    },
    utility:'',
    statementsRange:{
        from:'',
        to:''
    }
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