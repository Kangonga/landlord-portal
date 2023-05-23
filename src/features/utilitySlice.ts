import { createSlice } from "@reduxjs/toolkit";

export interface utilityInterface {
    allUtilityData:{},
    activeBuilding:{label:string, meters:{}[], hasBothUtilities:boolean},
    allBuildings:{label:string, meters:{}[], hasBothUtilities:boolean,}[],
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
    allUtilityData:{},
    activeBuilding:{
        label:'building one',
        meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}],
        hasBothUtilities:false,
    },
    allBuildings:[
        {
            label:'building one',
            meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}],
            hasBothUtilities:false,
        },
        {
            label:'building two',
            meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}],
            hasBothUtilities:false,
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
    }
})

export const utilityActions = utilityReducer.actions
export default utilityReducer.reducer