import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axios.helper"
import toast from "react-hot-toast"

const initialState = {
    shortUrl : "",
    longUrl:"", 
    allUrls : [],
    customUrlDiv:false
}

export const getShort = createAsyncThunk("/url/getUrl" , async ( url   ) => { 
    try {
        
        const response = axiosInstance.post("url/link-shortUrl" , url )  
        toast.promise(response ,{
            loading :"Wait .... ",
            success :"Created Short Url",
            error : "Failed to create Short Url"
        })  

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
            success : "Urls fetched Successfully", 
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



export const getCustomUrl = createAsyncThunk("/url/createCustomUrl" ,async(obj) => {
    try {
        const body ={
            "longUrl":obj.longUrl
        }
        const response = axiosInstance.post(`/url/custom/${obj.hash}`, body);

        toast.promise(response , {
            loading : "Shortening you URL " ,
            success : "Custom URL created", 
            error:"Failed to generate custom url"
        })
        return (await response).data;

    } catch (error) {
        toast.error(error?.response?.data?.message)
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
        .addCase(getCustomUrl.fulfilled  , (state ,action) => { 
            state.longUrl = action.payload?.longUrl,
            state.shortUrl = action.payload?.shortUrl
        })
        

        
    }
})

  


export default urlSlice.reducer




