import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/features/authentication/authSlice'
import buildingReducer from './features/buildingFeatures/buildingSlice';
import meterReducer from './features/mainMeterFeatures/meterSlice';
import utilityReducer from "./features/utilitySlice";

export interface storeInterface{
    auth:{},
    building:{},
    meter:{},
    utility:{}
}
export const store = configureStore({
    reducer: {
        auth:authReducer,
        utility: utilityReducer,
        building: buildingReducer,
        meter: meterReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch