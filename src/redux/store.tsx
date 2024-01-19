import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebar";
import sidebarMobile from "./sidebarMobile";

export default configureStore({
    reducer: {
        sidebar: sidebar,
        sidebarmobile: sidebarMobile
    }
});