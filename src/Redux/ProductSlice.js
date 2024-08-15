import { createSlice } from "@reduxjs/toolkit";

const ProductSlice =createSlice(
    {
    name :"ProductSlice",
    initialState :{
        product : [],
        count : 0,
    },
    reducers :{
        addproduct : (state ,action)=>{
            state.product.push(action.payload)
        },
        increment : (state ,action)=>{
            state.count +=1
        }
    }
})
export const {addproduct,increment} =ProductSlice.actions
export default ProductSlice.reducer