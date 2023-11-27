import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:true,
    payload:[],
    error:""
}

export const fetchAPI=createAsyncThunk('user/fetchUers', async ()=>{
    return await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(res=>res.json())

})

const UserAPI=createSlice({
    initialState,
    name:"fetchAPI",
    extraReducers:(builder)=>{
        builder.addCase(fetchAPI.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchAPI.fulfilled,(state,action)=>{
            state.loading=false;
            state.payload=action.payload
        })
        builder.addCase(fetchAPI.rejected,(state,action)=>{
            state.loading=false;
            state.payload=[];
            state.error=action.error.message
        })
    }
})

export default UserAPI.reducer
