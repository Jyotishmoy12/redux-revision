import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

// reducer will be talking to the store
export const store=configureStore({
    reducer:todoReducer,
})