import { StyleLoad } from "./style";
import logo from "../../assets/img/portfolio.png";
import { useEffect } from "react";
import { api } from "../../services/api";

export function Load() {
    const removeLoad = () => {
        const loadElement = document.querySelector("#load") as HTMLDivElement;
        loadElement.classList.add("removeLoad");
    };

    const getOperatingSystem = (): string => {
        const platform = navigator.platform.toLowerCase();

        if (platform.includes('win')) {
            return 'Windows';
        } else if (platform.includes('mac')) {
            return 'MacOS';
        } else if (platform.includes('linux')) {
            return 'Linux';
        } else if (platform.includes('android')) {
            return 'Android';
        } else if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
            return 'iOS';
        } else {
            return 'Unknown';
        }
    };

    useEffect(() => {
        setTimeout(() => {
            removeLoad();
        }, 3000);

        const now: Date = new Date();
        const hours: number = now.getHours();
        const minutes: number = now.getMinutes();

        // api.post("/send-sms", {
        //     toNumber: "+5544999814053",
        //     message: `Olá, grande raparigo! Uma nova visita às ${hours}:${minutes}.`
        // }).then(() => {
        //     console.log("Enviado com sucesso!");
        // }).catch((err: any) => {
        //     console.log(err);
        // });

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    api.post("/send-email", {
                        email: "eldson.caldasw@gmail.com",
                        message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }, {timeout: 30000}).then(() => {
                        console.log("Email enviado com sucesso!");
                    }).catch((err: any) => {
                        console.log(err);
                    });
                },
                (error) => {
                    console.error('Erro ao obter a localização:', error);
                    api.post("/send-email", {
                        email: "eldson.caldasw@gmail.com",
                        message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
                        latitude: "0",
                        longitude: "0"
                    }, {timeout: 30000}).then(() => {
                        console.log("Email enviado com sucesso!");
                    }).catch((err: any) => {
                        console.log(err);
                    });
                }
            );
        } else {
            console.log('Geolocalização não suportada pelo navegador.');
            api.post("/send-email", {
                email: "eldson.caldasw@gmail.com",
                message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
                latitude: "0",
                longitude: "0"
            }, {timeout: 30000}).then(() => {
                console.log("Email enviado com sucesso!");
            }).catch((err: any) => {
                console.log(err);
            });
        }


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