import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: {},
    utility: '',
    userToken: null,
    error: null,
    isLoggedIn: false,
    hasBothUtilities: false
}

const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: ()=> initialState
    }
})

export default authReducer.reducer
export const authActions = authReducer.actions