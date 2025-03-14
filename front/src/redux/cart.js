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
        removeItem:(state,action)=>{
            let check=state.items.find((value)=>value.id === action.payload.id)
            if(check.qty === 1)
            {
                state.items=state.items.filter((value)=>(value.id !== action.payload.id))

            }
            else{
                let updated=state.items.map((value)=>value.id===action.payload.id?{...value,'qty':value.qty-1}:value)
               return {items:updated}
            }
        }
    }
})

export const {addItem,removeItem}=counterSlice.actions;
export default counterSlice.reducer;