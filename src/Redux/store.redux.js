import {configureStore} from "@reduxjs/toolkit"

import authReducers from "./Slices/auth.slice"
import urlReducers from "./Slices/url.slice"


const store= configureStore({
    reducer : { 
        auth : authReducers,
        url: urlReducers
    }, 
    devTools : true 
})

export default store;
