import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    return result.data.products
})

const productSlice = createSlice({
    name:'products',
    initialState:{allProducts:[],
                  loading:false,
                  error:""
    },
    reducers:{

    },
    extraReducers:(buider)=>{
        buider.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.allProducts = action.payload
            state.loading = false
            state.error = ""
        })
        buider.addCase(fetchProducts.pending,(state,action) =>{
            state.allProducts = []
            state.loading = true
            state.error = ""
        })
        buider.addCase(fetchProducts.rejected,(state,action) =>{
            state.allProducts = []
            state.loading = false
            state.error = "API call failed...pls try after some time"
        })
    }     
    
    
})
export default productSlice.reducer