import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebar";


export default configureStore({
    reducer: {
        sidebar: sidebar
    }
});