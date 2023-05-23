import { createSlice } from "@reduxjs/toolkit";

export interface authInterface {
    userId:string,
    token:string
}
const initialState:authInterface = {
    userId: '',
    token: ''
}



const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updatePassword:(action)=>{
            console.log('payload', action)
        },
        login:(state, action)=>{
            state.userId = action.payload.user
            state.token = action.payload.token
            console.log('token updated',state.token)
        },
        logout: ()=> initialState
    }
})

export default authReducer.reducer
export const authActions = authReducer.actions
