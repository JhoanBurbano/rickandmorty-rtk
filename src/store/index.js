import { configureStore } from "@reduxjs/toolkit";
import character from "./slice/characterSlice"

export const store = configureStore({
    reducer:{
        character
    }
})