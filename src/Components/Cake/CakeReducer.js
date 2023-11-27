import { createSlice } from "@reduxjs/toolkit"

const initialState={
    numofCakes:10
}

 const Cake=createSlice({
    name:'Cake',
    initialState,
        reducers:{
            ordered:(state,action)=>{
                state.numofCakes=state.numofCakes-action.payload
            },
            restocked:(state,action)=>{
                state.numofCakes=state.numofCakes+action.payload
            },
            reset:(state,action)=>{
                action.payload=initialState.numofCakes;
                state.numofCakes=action.payload
            }
        }
    }
)

export default Cake.reducer;
export const {ordered,restocked,reset} = Cake.actions;
