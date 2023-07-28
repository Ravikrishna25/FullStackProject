import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "./Slice/userSlice"

export default configureStore({
    reducer:{
        case : caseReducer
    }
})