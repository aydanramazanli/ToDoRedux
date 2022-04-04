import { createSlice } from "@reduxjs/toolkit";

const state=[];


const toDoReducer=createSlice({
    name:"todo",
    initialState:state,
    reducers:{
        // add list
        addTodos:(state, action) => {
            state.push(action.payload);
            return state;
        },

        //remove list
        removeTodos: (state, action) => {
            return state.filter((item)=> item.id !== action.payload)
        },

        //update list
        updateTodos: (state, action) => {
            return state.filter((item)=>{
                if(item.id === action.payload.id){
                    return{
                        ...item,
                        item:action.payload.item
                    }
                    
                }
                return item;
            })
        },
        //completed list
        completeTodos: (state, action)=>{
            return state.map((item)=>{
                if(item.id === action.payload){
                    return{
                        ...item,
                        completed: true,
                    }
                    
                }
                return item;
            })
        }
    }
})

export const {addTodos,removeTodos,updateTodos,completeTodos} =toDoReducer.actions
export const reducer = toDoReducer.reducer