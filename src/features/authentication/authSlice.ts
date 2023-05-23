import { createSlice } from "@reduxjs/toolkit";

export interface authInterface {
    userId:string,
    token:string,
    phone:string
}
const initialState:authInterface = {
    userId: '',
    token: '',
    phone:''
}



const authReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        updatePhoneNumber:(state,action)=>{
        state.phone = action.payload
        console.log('phone updated')
        },
        updateUserId:(state,action)=>{
            console.log('payload', action.payload)
            state.userId = action.payload
            console.log('userid updated', state.userId)
        },
        updateToken:(state,action)=>{
            state.token = action.payload.token
        },
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
