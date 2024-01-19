import { NotifyStyle } from "./style";
import logo from "../../assets/img/portfolio.png";
import { useEffect } from "react";

interface NotifyProps {
    id: string;
    title: string;
    description: string;
};

export function Notify({id, title, description}:NotifyProps) {
    const removeNotify = () => {
        const notifyElement = document.querySelector(`#${id}`) as HTMLDivElement;
        notifyElement.classList.add("remove-notify");
    };

    useEffect(() => {
        setTimeout(() => {
            removeNotify();
        }, 7000)
    }, [])

    return (
        <NotifyStyle id={id}>
            <div className="logo">
                <img src={logo} alt="" />

                <div className="message">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </NotifyStyle>
    );
};