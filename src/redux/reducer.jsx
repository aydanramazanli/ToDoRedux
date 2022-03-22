import { createSlice } from "@reduxjs/toolkit";

const state=[];


const toDoReducer=createSlice({
    name:"todo",
    initialState:state,
    reducers:{
        addToDo:(state, action)=>{
            state.push(action.payload);
            return state;
        }
    }
})

export const {addToDo} =toDoReducer.actions
export const reducer = toDoReducer.reducer