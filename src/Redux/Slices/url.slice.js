import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axios.helper"
import toast from "react-hot-toast"

const initialState = {
    shortUrl : "",
    longUrl:"",
}

export const getShort = createAsyncThunk("/url/getUrl" , async ( url   ) => { 
    try {
        
        const response = axiosInstance.post("url/link-shortUrl" , url )  
        toast.promise(response ,{
            loading :"Wait .... ",
            success :"Created Short Url",
            error : "Failed to create Short Url"
        })  
        console.log((await response).data)

        return (await response).data; 

    } catch (error) {
        toast.error(error.response?.data?.message)
    }
})


const urlSlice = createSlice({
    name : "url", 
    initialState,
    reducers : {},
    extraReducers: (builder) =>{ 
        builder.addCase(getShort.fulfilled , (state ,action ) => {  
            console.log(action.payload) 
            localStorage.setItem("longUrl" , action.payload.longUrl)
            localStorage.setItem("shortUrl" , action.payload.shortUrl)
            state.longUrl = action.payload.longUrl,
            state.shortUrl = action.payload.shortUrl
        })
    }
})
  


export default urlSlice.reducer




