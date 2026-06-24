import { createSlice } from "@reduxjs/toolkit";
//intail state
const initialState ={
    value:0,
}

export const counter=createSlice({
    name:'count',
    initialState,
    reducers: {
        increment:function(state){
            state.value+=1
        },
        decrement:function(state)
        {
            state.value-=1
        },
        sum:function(state,action)
        {
            state.value+=action.payload
        }
    }
})

export const {increment,sum,decrement}=counter.actions
export default counter.reducer