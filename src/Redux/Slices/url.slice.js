import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axios.helper"
import toast from "react-hot-toast"

const initialState = {
    shortUrl : "",
    longUrl:"", 
    allUrls : []
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

export const getAllUrls = createAsyncThunk("/url/getUserUrls" , async ( ) => {
    try { 
        const response  = axiosInstance.get("/url/getAllUrls") 
        toast.promise(response ,  {
            loading:"Wait Loding Urls ",
            success : "Urls fetchde Successfully", 
            error : "Error in Loding Urls" 
        }) 
        return (await response).data;

        
    } catch (error) {
        toast.error(error?.response?.data?.message); 
    }
}) 
export const deleteUrl = createAsyncThunk("/url/delete" , async (url ) => {  

    try {   
        const response= axiosInstance.post("/url/deleteUrl", {
            shortUrl : url
        }) 
        toast.promise(response , {
            loading: "Wait deleting Url...", 
            success : "Url delete Successfully", 
            error : "Error in deleting Url"
        }) 
        return (await response).data
        
    } catch (e) {
        toast.error(e?.response?.data?.message);
        
    }
})

const urlSlice = createSlice({
    name : "url", 
    initialState,
    reducers : {},
    extraReducers: (builder) =>{ 
        builder.addCase(getShort.fulfilled , (state ,action ) => {  
            state.longUrl = action.payload?.longUrl,
            state.shortUrl = action.payload?.shortUrl
        }) 
        .addCase(getAllUrls.fulfilled , (state , action)=>{ 
            state.allUrls = action.payload?.urls
        }) 
        

        
    }
})

  


export default urlSlice.reducer




