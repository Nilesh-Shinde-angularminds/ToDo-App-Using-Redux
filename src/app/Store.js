import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../features/TodoSlice";

export default configureStore({
    reducer:{
        todo:TodoSlice,

    }
})