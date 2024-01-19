import { RightIcon } from "../../assets/icons/right";
import { SideBarStyle } from "./style";
import logo from "../../assets/img/portfolio.png";
import cat from "../../assets/img/logo.gif";
import { show, hide } from "../../redux/sidebarMobile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { EmailIcon } from "../../assets/icons/email";
import { MagicIcon } from "../../assets/icons/magic";
import { SkillIcon } from "../../assets/icons/skill";
import { skills, skillsBack } from "../../mocks/skills";
import { statesidebarmobile } from "../../redux/sidebarMobile";

interface SkillProps {
    name: string;
}

export function SideBarMobile() {
    const dispatch = useDispatch();
    const stateSide = useSelector(statesidebarmobile);
    const [colorButton, setColorButton] = useState(false);

    const myEmail = "eldson.caldasw@gmail.com";

    const handleEmailClick = () => {
        window.location.href = `mailto:${myEmail}`;
    }

    const showSidebar = () => {
        const btnElement = document.querySelector("#sideBtn") as HTMLButtonElement;
        const sideElement = document.querySelector("#sideBtn") as HTMLButtonElement;
        if (!stateSide) {
            dispatch(show());
            btnElement.style.rotate = "0deg";
            btnElement.style.paddingLeft = "0px";
            btnElement.style.paddingRight = "15px";
        } else {
            sideElement.classList.add("remove-side");
            
            btnElement.style.rotate = "180deg";
            btnElement.style.paddingLeft = "15px";
            btnElement.style.paddingRight = "0px";

            dispatch(hide());
        }
    };

    const hoverTagBtn = () => {
        const tagElement = document.querySelector("#tag") as HTMLLabelElement;

        if (stateSide) {
            tagElement.innerText = "Hide sidebar"
        }

        tagElement.classList.replace("tag_sidebar-hide", "tag_sidebar");
        setColorButton(true);
    };

    const hideHoverTagBtn = () => {
        const tagElement = document.querySelector("#tag") as HTMLLabelElement;
        tagElement.classList.replace("tag_sidebar", "tag_sidebar-hide");
        setColorButton(false);
    };

    return (
        <SideBarStyle>
            {stateSide ? (
                <div className="container_side" id="side_cont">
                    <div className="top">
                        <div className="header">
                            <img src={logo} width={30} alt="logo" />
                            <p>FullStack Pleno</p>
                        </div>
                        <label className="head_label">Front-End</label>
                        <div className="container_skills">
                            {skills.map((skill:SkillProps) => {
                                return (
                                    <div className="skill">
                                        <p>{skill.name}</p>
                                        <span>
                                            <SkillIcon/>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <label className="head_label">Back-End</label>
                        <div className="container_skills">
                            {skillsBack.map((skillBack:SkillProps) => {
                                return (
                                    <div className="skill">
                                        <p>{skillBack.name}</p>
                                        <span>
                                            <SkillIcon/>
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="pet">
                            <img src={cat} alt="" />
                        </div>
                        <div className="star">
                            <MagicIcon/>
                            <div className="text">
                                <h4>Experience duration</h4>
                                <p>+4 years of experience</p>
                            </div>
                        </div>
                        <button onClick={handleEmailClick}>
                            <EmailIcon/>
                            <p>Contato</p>
                        </button>
                    </div>
                </div>
            ) : null}
            <div className="right_btn">
                <button
                    id="sideBtn"
                    onClick={() => showSidebar()}
                    onMouseOver={() => hoverTagBtn()}
                    onMouseLeave={() => hideHoverTagBtn()}>
                    <RightIcon
                        color={colorButton ? "#FFFFFF" : ""}
                    />
                </button>
                <label id="tag" className="tag_sidebar-hide">Open sidebar</label>
            </div>
        </SideBarStyle>
    );
};