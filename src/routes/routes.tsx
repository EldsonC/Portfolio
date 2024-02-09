import { Routes, Route } from "react-router-dom";
import { Port } from "../pages/port";
import { Privates } from "./privates";
import { Dashboard } from "../pages/dashboard";
import { SignIn } from "../pages/signin";
import { LandPage } from "../pages/web";
import { SignUp } from "../pages/signup";
import { Code } from "../pages/code";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<LandPage/>}/>
            <Route path="/port/:id_user" element={<Port/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-up/code" element={<Code/>}/>

            <Route path="/" element={<Privates/>}>
                <Route path="/port/dashboard/:id_user" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}