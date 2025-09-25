import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
      name:"search",
      initialState:"",
      reducers:{
            searchItem:(state,  action)=>{
                 return action.payload
            }
      }

})


export const  { searchItem}  =  searchSlice.actions;
export default  searchSlice.reducer;