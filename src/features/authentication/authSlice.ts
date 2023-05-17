import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface authInterface {
    loading: boolean,
    userInfo: {},
    userToken: string,
    error: string|undefined,
    isLoggedIn: boolean,
}
const initialState:authInterface = {
    loading: false,
    userInfo: {},
    userToken: '',
    error: '',
    isLoggedIn: false,
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