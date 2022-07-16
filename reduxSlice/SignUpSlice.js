import { createSlice } from "@reduxjs/toolkit"

const initialState={
    name:'',
  username:'',

}

export const SignUpSlice=createSlice({
    name:'SignUP',
    initialState,
    reducers:{
        addtask:(state,action)=>{
            const newTask={
                name:action.payload.name,
                username:action.payload.username
            }
            ;
            state.push(newTask)
  
        }}
})
export const {setName,setUsername}=SignUpSlice.actions
export default SignUpSlice.reducer