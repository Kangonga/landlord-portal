import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authentication/authSlice";

export interface utilityInterface {
    hasBothUtilities:boolean,
    allUtilityData:{},
    activeBuilding:{label:string, meters:{}[]},
    allBuildings:{label:string, meters:{}[]}[],
    mainMeters:{}[],
    activeMainMeter:{},
    meters:{}[],
    activeMeter:{},
    statementsRange:{
        from:'',
        to:''
    },
    statements:[{}],
    payments:[{}]
}
const initialState:utilityInterface = {
    hasBothUtilities:false,
    allUtilityData:{},
    activeBuilding:{
        label:'building one',
        meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}]
    },
    allBuildings:[
        {
            label:'building one',
            meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}]
        },
        {
            label:'building two',
            meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}]
        }
    ],
    mainMeters:[{}],
    activeMainMeter:{},
    meters:[{}],
    activeMeter:{},
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
        updateBuilding:(state,action)=>{
            console.log('in reducer')
            console.log('payload', action.payload)
            state.activeBuilding = state.allBuildings.filter(building=>building.label===action.payload.label)[0]
            console.log('active building',state.activeBuilding)
        },
        updateUtility:()=>{},
        updateMeter: ()=>{},
        updateSubMeter:()=>{},
    },
    extraReducers: builder=>{
        builder
        .addCase(login.fulfilled, (state,action)=>{
            state.allUtilityData = action.payload
            
        })
    }
})

export const utilityActions = utilityReducer.actions
export default utilityReducer.reducer