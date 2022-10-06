import React from "react";

import {Route, Routes} from "react-router-dom"
import Projects from "../pages/projects";
import Home from "../pages/home";
import Header from "../shared/header";

export default function Routers() {
    return (
        <Routes>
            <Route path="/home" element={
                <>
                    <Header/>
                    <Home/>
                </> 
            }/>

            <Route path="/projects" element={
                <>
                   <Header/>
                   <Projects/>
                </> 
            }/>

            <Route path="/about" element={
                <>
                    <Header/>
                </> 
            }/>
        </Routes>
    )
}