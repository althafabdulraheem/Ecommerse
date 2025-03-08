import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    items:[],
    
};

const counterSlice=createSlice({
    name:'cartCounter',
    initialState:INITIAL_STATE,
    reducers:{
        addItem:(state,action)=>{
            let exist=state.items.find((value)=>value.id === action.payload.id)
            if(exist)
            {
               
                exist.qty=exist.qty+1
              
            }
            else{
                state.items.push({...action.payload,'qty':1})
               
            }
            
        },
        removeItem:(state)=>{

        }
    }
})

export const {addItem,removeItem}=counterSlice.actions;
export default counterSlice.reducer;