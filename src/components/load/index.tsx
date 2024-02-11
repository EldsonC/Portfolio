import { StyleLoad } from "./style";
import { useEffect } from "react";
// import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { LoadLogoIcon } from "../../assets/icons/logoload";

export function Load() {
    const params = useParams();

    // const getOperatingSystem = (): string => {
    //     const platform = navigator.platform.toLowerCase();

    //     if (platform.includes('win')) {
    //         return 'Windows';
    //     } else if (platform.includes('mac')) {
    //         return 'MacOS';
    //     } else if (platform.includes('linux')) {
    //         return 'Linux';
    //     } else if (platform.includes('android')) {
    //         return 'Android';
    //     } else if (platform.includes('iphone') || platform.includes('ipad') || platform.includes('ipod')) {
    //         return 'iOS';
    //     } else {
    //         return 'Unknown';
    //     }
    // };

    useEffect(() => {
        const titlePage = document.querySelector("#title") as HTMLTitleElement;
        titlePage.innerText = `Portifolio | ${params.id_user}`

        // const now: Date = new Date();
        // const hours: number = now.getHours();
        // const minutes: number = now.getMinutes();

        // api.post("/send-sms", {
        //     toNumber: "+5544999814053",
        //     message: `Olá, grande raparigo! Uma nova visita às ${hours}:${minutes}.`
        // }).then(() => {
        //     console.log("Enviado com sucesso!");
        // }).catch((err: any) => {
        //     console.log(err);
        // });

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(
        //         (position) => {
        //             api.post("/send-email", {
        //                 email: "eldson.caldasw@gmail.com",
        //                 message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
        //                 latitude: position.coords.latitude,
        //                 longitude: position.coords.longitude
        //             }, {timeout: 30000}).then(() => {
        //                 console.log("Email enviado com sucesso!");
        //             }).catch((err: any) => {
        //                 console.log(err);
        //             });
        //         },
        //         (error) => {
        //             console.error('Erro ao obter a localização:', error);
        //             api.post("/send-email", {
        //                 email: "eldson.caldasw@gmail.com",
        //                 message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
        //                 latitude: "0",
        //                 longitude: "0"
        //             }, {timeout: 30000}).then(() => {
        //                 console.log("Email enviado com sucesso!");
        //             }).catch((err: any) => {
        //                 console.log(err);
        //             });
        //         }
        //     );
        // } else {
        //     console.log('Geolocalização não suportada pelo navegador.');
        //     api.post("/send-email", {
        //         email: "eldson.caldasw@gmail.com",
        //         message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
        //         latitude: "0",
        //         longitude: "0"
        //     }, {timeout: 30000}).then(() => {
        //         console.log("Email enviado com sucesso!");
        //     }).catch((err: any) => {
        //         console.log(err);
        //     });
        // }

        localStorage.setItem("sidebar", JSON.stringify(false));
    }, []);

    return (
        <StyleLoad id="load">
            <div className="conteiner_load">
                <div className="logo-item">
                    <LoadLogoIcon/>
                </div>
                {/* <div className="progress_container">
                    <div className="progress"></div>
                </div> */}
            </div>
        </StyleLoad>
    );
};