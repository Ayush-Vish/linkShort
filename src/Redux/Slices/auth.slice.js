import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axios.helper"  
import {toast} from "react-hot-toast"
const initialState =  {
    isLoggedIn : localStorage.getItem("isLoggedIn") || false, 
    data :( localStorage.getItem("data" ) &&   JSON.parse( localStorage.getItem("data" ) ))|| { } 
}

export const createNewAccount = createAsyncThunk("auth/signup", async (data ) => {
    try {
        const response = axiosInstance.post("/api/v1/user/register"  ,data)  

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
export const login  =createAsyncThunk("/auth/signin" , async (data) => {
    try {
        const response = axiosInstance.post("/api/v1/user/login" ,data)   
        toast.promise(response , {
            loading : "Authenticating .... ", 
            success : "Logged in Successfully", 
            error : "Error in logging in . "
        })
        return (await response).data
    } catch (e) {
        toast.error(e.response?.data?.message )
    }
} )
 

export const logout = createAsyncThunk ( "/auth/logout" , async () =>  {
    try {
        const response = axiosInstance.get("/api/v1/user/logout" ) 
        toast.promise(response ,  { 
            loading : "Logging Out....", 
            success : "Logged Out", 
            error  :"Error in logging Out "
        }) 
        return (await response).data
    } catch (e)  {
        toast.error(e?.response?.data?.message)
        
    }
})

const authSlice  = createSlice({
    name:  "auth", 
    initialState , 
    reducers : {}, 
    extraReducers :(builder) => { 
        builder
        .addCase(login.fulfilled , (state ,action) => { 
            console.log("Fulfilled")
            localStorage.setItem("data" ,JSON.stringify(action?.payload?.user)); 
            localStorage.setItem("isLoggedIn" ,true ) 
            state.isLoggedIn =true 
            state.data =action?.payload?.user
        })
        .addCase(login.rejected , (state  ) => { 
            console.log("rejected")
            localStorage.clear() ;
            state.data = {} ;
            state.isLoggedIn =false;
        })
        .addCase(logout.fulfilled, (state  )=> {
            localStorage.clear() ;
            state.data = {} ;
            state.isLoggedIn =false;
        })
        
        
    }
})
 


export default authSlice.reducer;