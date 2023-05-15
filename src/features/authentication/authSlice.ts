import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface authInterface {
    loading: boolean,
    userInfo: {},
    userToken: string,
    error: string|undefined,
    isLoggedIn: boolean,
    hasBothUtilities: boolean
}
const initialState:authInterface = {
    loading: false,
    userInfo: {},
    userToken: '',
    error: '',
    isLoggedIn: false,
    hasBothUtilities: false
}

const login = createAsyncThunk('auth/login',async ()=>{
    const response = await axios.post('api/login');
    return response.data;
})

const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: ()=> initialState
    },
    extraReducers: builder=>{
        builder
        .addCase(login.pending, state=>{
            state.loading = true
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.loading = false
            state.userInfo = action.payload
            state.isLoggedIn = true
            state.userToken = action.payload.userToken
            state.hasBothUtilities = action.payload.utilityType>1?true:false
        })
        .addCase(login.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
        } )
    }
})

export default authReducer.reducer
export const authActions = authReducer.actions
export { login }