import { createSlice } from "@reduxjs/toolkit"

const initialState={
    numOfIce:15
}

const IceCream=createSlice({
    initialState,
    name:"IceCream",
    reducers:{
        sold:(state,action)=>{
            state.numOfIce=state.numOfIce-action.payload;
        },
        returns:(state,action)=>{
            state.numOfIce=state.numOfIce+action.payload
        },
        restock:(state)=>{
            state.numOfIce=initialState.numOfIce
        },
    }
})

export default IceCream.reducer;
export const {sold,returns,restock}=IceCream.actions