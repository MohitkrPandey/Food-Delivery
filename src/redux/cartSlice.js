import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    AddItems:(state,action)=>{
      let exists= state.find((item)=>(item.id==action.payload.id))
      if(exists){
        return state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
      }
      else{
       state.push(action.payload);
      }
      
    },
    RemoveItems:(state,action)=>{
      
      return state.filter((item)=>item.id!=action.payload)
      
    },

    IncrementItems:(state,action)=>{
      return state.map((item)=>(item.id==action.payload?{...item,qty:item.qty+1}:item))
      
    },

    DecrementItems:(state,action)=>{
    
      return state.map((item)=>(item.id===action.payload?{...item,qty:item.qty-1}:item));
      

    }

     
    
}})

export const cartActions= cartSlice.actions;
export default cartSlice;
