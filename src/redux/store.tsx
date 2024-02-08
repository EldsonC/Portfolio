import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./sidebar";
import sidebarMobile from "./sidebarMobile";
import addproject from "./addproject";

export default configureStore({
    reducer: {
        sidebar: sidebar,
        sidebarmobile: sidebarMobile,
        addproject: addproject
    }
});