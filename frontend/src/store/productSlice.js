import { createSlice } from "@reduxjs/toolkit";

const initialState={
    productInfo: localStorage.getItem('productInfo') ? JSON.parse(localStorage.getItem('productInfo')) : null
}

const productSlice=createSlice({
    name : 'product',
    initialState,
    reducers:{
        set_product_Credentials:(state,action)=>{
            state.productInfo=action.payload
            localStorage.setItem('productInfo',JSON.stringify(action.payload))
        }
    }
})

export const {set_product_Credentials}=productSlice.actions;
export default productSlice;