import { StyleLoad } from "./style";
import logo from "../../assets/img/portfolio.png";
import { useEffect } from "react";
// import logo from "../../assets/img/cat.gif";
// import logo from "../../assets/img/logo.gif";

export function Load() {
    const removeLoad = () => {
        const loadElement = document.querySelector("#load") as HTMLDivElement;
        loadElement.classList.add("removeLoad");
    };

    useEffect(() => {
        setTimeout(() => {
            removeLoad();
        }, 3000);

        localStorage.setItem("sidebar", JSON.stringify(false));
    }, []);

    return (
        <StyleLoad id="load">
            <div className="conteiner_load">
                <img src={logo} alt="logo" />
            </div>
        </StyleLoad>
    );
};