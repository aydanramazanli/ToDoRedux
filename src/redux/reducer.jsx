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

        //update list
        updateTodo: (state, action) => {
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
        completeTodo: (state, action)=>{
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

export const {addToDo,removeTodo,updateTodo,completeTodo} =toDoReducer.actions
export const reducer = toDoReducer.reducer