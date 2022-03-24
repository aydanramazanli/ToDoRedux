import { createSlice } from "@reduxjs/toolkit";

const state=[];


const toDoReducer=createSlice({
    name:"todo",
    initialState:state,
    reducers:{
        // add list
        addToDo:(state, action) => {
            state.push(action.payload);
            return state;
        },

        //remove list
        removeTodo: (state, action) => {
            return state.filter((item)=> item.id !== action.payload)
        },
    }
})

export const {addToDo,removeTodo} =toDoReducer.actions
export const reducer = toDoReducer.reducer