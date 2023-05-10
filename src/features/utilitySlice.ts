import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    clientId:'',
    loading:false,
    utility:'',
    building:'',
    mainMeters:[{}],
    meters:[{}],
    statementsRange:{
        from:'',
        to:''
    },
    statements:[{}],
    payments:[{}]
}

const utilityReducer = createSlice({
    name:'utility',
    initialState,
    reducers:{
        updateBuilding:()=>{},
        updateUtility:()=>{},
        updateMeter: ()=>{},
        updateSubMeter:()=>{},
    }
})

export const utilityActions = utilityReducer.actions
export default utilityReducer.reducer