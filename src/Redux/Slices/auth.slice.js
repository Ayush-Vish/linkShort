import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axios.helper"  
import {toast} from "react-hot-toast"
const initialState =  {
    isLoggedIn : localStorage.getItem("isLoggedIn") || false, 
    data : localStorage.getItem("data" ) || { } 
}

export const createAccount = createAsyncThunk("auth/signup", async (data ) => {
    try {
        const response = axiosInstance.post("/user/register"  ,data) 
        toast.promise(response , {
            loading : "Wait Creating Account", 
            success : "User Created Successfully", 
            error : "Error in creating account"
        })
        return (await response).data;


    }catch(e) { 
        toast.error(e?.response?.data?.message)
    }
}) 
export const login  =createAsyncThunk("/auth/signin" , (data) => {
    try {
        const response = axiosInstance.post("/user/login" ,data)  
        toast.promise(response , {
            loading : "Authenticating .... ", 
            success : "Logged in Successfully", 
            error : "Error in logging in . "
        })
        return d
    } catch (e) {
        toast.error(e.response?.data?.message )
    }
} )



const authSlice  = createSlice({
    name:  "auth", 
    initialState , 
    reducers : {}, 
    extraReducers :(builder) => {
        
    }
})


export default authSlice.reducer;