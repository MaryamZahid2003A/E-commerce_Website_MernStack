import {createSlice} from '@reduxjs/toolkit'

const initialState={
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const UserSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials :(state,action)=>{
            state.userInfo=action.payload
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        setLogout : (state)=>{
            state.userInfo=null;
            localStorage.removeItem('userInfo')
            console.log('inside the slice')
        }
    }
})

export const {setCredentials,setLogout}=UserSlice.actions;
export {UserSlice}