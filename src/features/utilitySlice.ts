import { createSlice } from "@reduxjs/toolkit";
import { buildingInterface } from './buildingFeatures/buildingSlice';

export interface utilityInterface {
    clientId:'',
    loading:false,
    utility:'',
    activeBuilding:buildingInterface,
    buildings:buildingInterface[],
    mainMeters:{}[],
    meters:buildingInterface["meters"],
    statementsRange:{
        from:'',
        to:''
    },
    statements:[{}],
    payments:[{}]
}
const initialState:utilityInterface = {
    clientId:'',
    loading:false,
    utility:'',
    activeBuilding:{
        label:'building one',
        meters:[{label:'meter one'}, {label:'meter two'}, {label:'meter three'}]
    },
    buildings:[
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
        updateBuilding:(state,action)=>{
            console.log('in reducer')
            console.log('payload', action.payload)
            state.activeBuilding = state.buildings.filter(building=>building.label===action.payload.label)[0]
            console.log('active building',state.activeBuilding)
        },
        updateUtility:()=>{},
        updateMeter: ()=>{},
        updateSubMeter:()=>{},
    }
})

export const utilityActions = utilityReducer.actions
export default utilityReducer.reducer