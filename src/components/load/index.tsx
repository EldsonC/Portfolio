import { StyleLoad } from "./style";
import logo from "../../assets/img/portfolio.png";
import { useEffect } from "react";
import { api } from "../../services/api";
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

        const now: Date = new Date();
        const hours: number = now.getHours();
        const minutes: number = now.getMinutes();

        api.post("/send-sms", {
          toNumber: "+5544999814053",
          message: `Olá, grande raparigo! Uma nova visita às ${hours}:${minutes}.`
        }).then(() => {
          console.log("Enviado com sucesso!");
        }).catch((err:any) => {
          console.log(err);
        });

        localStorage.setItem("sidebar", JSON.stringify(false));
    }, []);

    return (
        <StyleLoad id="load">
            <div className="conteiner_load">
                <img src={logo} width={80} alt="logo" />
            </div>
        </StyleLoad>
    );
};