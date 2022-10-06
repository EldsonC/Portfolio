import React from "react";
import Logo from "../../assets/svg/logo";
import { HeaderStyle } from "./style";
import { NavLink } from "react-router-dom";
import Menu from "../../assets/svg/menu";
export default function Header() {
    return (
        <HeaderStyle>
            <div className="style_header__div">
                <a href="/home">
                    <Logo/>
                </a>
                <nav className="styles_nav__header">
                        <NavLink to="/home" className={({isActive}) => (isActive ? "styles_navItem": "styles_navList-unActive")}> 
                            Home
                        </NavLink>

                        <NavLink to="/projects" className={({isActive}) => (isActive ? "styles_navItem": "styles_navList-unActive")}> 
                            Projects
                        </NavLink>

                        <NavLink to="/about" className={({isActive}) => (isActive ? "styles_navItem": "styles_navList-unActive")}> 
                            About
                        </NavLink> 
                </nav>
                <button type="button" className="styles_button__header">CONTACT ME</button>
                <div className="styles_menu__header">
                    <Menu/>
                </div>
            </div>
        </HeaderStyle>
    )
}