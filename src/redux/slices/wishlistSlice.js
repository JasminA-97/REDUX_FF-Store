import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'mywishlist',
    initialState:[],
    reducers:{
        addtoWishlist:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addtoWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer