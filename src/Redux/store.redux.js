import {configureStore} from "@reduxjs/toolkit"

import authReducers from "./Slices/auth.slice"


const store= configureStore({
    reducer : { 
        auth : authReducers

    }, 
    devTools : true 
})

export default store;
