import { createSlice } from "@reduxjs/toolkit";

const initState = {
    email:"",
    password:"",
    isLoading: false,
    isError: false,
    message: "",

}
const loginSlice = createSlice({
    name:"login",
    initialState:initState,
    reducers:{
    }
})

export default loginSlice.reducer
export const loginAction = loginSlice.actions