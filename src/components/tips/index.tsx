import { useState } from "react";
import { TipsStyle } from "./style";
import sidebar from "../../assets/img/sidebar.gif";
import game from "../../assets/img/f.gif";
import wellcome from "../../assets/img/wellcome.gif";

interface TipsProps {
    image: string;
    title: string;
    description: string;
}

export function Tips() {
    const [currentTip, setCurrentTip] = useState(0);

    const tips: TipsProps[] = [
        {
            image: wellcome,
            title: "Wellcome!",
            description: "Welcome to my portfolio, make yourself at home.",
        },
        {
            image: sidebar,
            title: "To navigation",
            description: "To access the sidebar, click the button on the left or use <span>CTRL+B</span> to open the sidebar.",
        },
        {
            image: game,
            title: "Play game",
            description: "Have some fun with a little game using <span>CTRL+M</span>. To move the car, use the WASD keys.",
        },
    ];

    const handleNextTip = () => {
        setCurrentTip((prevTip) => (prevTip + 1) % tips.length);
    };

    const handleSkipTip = () => {
        localStorage.setItem("tipState", JSON.stringify(""));
        const tip = document.querySelector("#tip") as HTMLDivElement;
        const container = document.querySelector("#container_tip") as HTMLDivElement;
        tip.classList.add("remove-tip");
        container.classList.add("remove-tip");
        container.style.display = "none"
    }

    return (
        <TipsStyle id="tip">
            <div className="image_tip">
                <img src={tips[currentTip].image} alt="" />
            </div>
            <h3>{tips[currentTip].title}</h3>
            <p dangerouslySetInnerHTML={{ __html: tips[currentTip].description }} />

            <div className="buttons">
                <button onClick={handleSkipTip}>skip</button>
                <button className="next" onClick={currentTip === tips.length - 1 ? handleSkipTip : handleNextTip}>
                    {currentTip === tips.length - 1 ? "start" : "continue"}
                </button>
            </div>
        </TipsStyle>
    );
}
