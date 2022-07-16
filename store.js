import { configureStore } from "@reduxjs/toolkit";
import SignUpreducer from './reduxSlice/SignUpSlice'

export const store=configureStore({
    reducer:{
        SignUP:SignUpreducer
    }
})