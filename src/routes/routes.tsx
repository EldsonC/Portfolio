import { Routes, Route } from "react-router-dom";
import { Port } from "../pages/port";
import { Privates } from "./privates";
import { Dashboard } from "../pages/dashboard";
import { SignIn } from "../pages/signin";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/port/:id_user" element={<Port/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>

            <Route path="/" element={<Privates/>}>
                <Route path="/port/dashboard/:id_user" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}