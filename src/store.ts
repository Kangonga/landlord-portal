import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/features/authentication/authSlice'
import buildingReducer from './features/buildingFeatures/buildingSlice';
import meterReducer from './features/mainMeterFeatures/meterSlice';

export const store = configureStore({
    reducer: {
        auth:authReducer,
        building: buildingReducer,
        meter: meterReducer,
    }
})