import { RightIcon } from "../../assets/icons/right";
import { SideBarStyle } from "./style";
// import cat from "../../assets/img/cat.gif";
import { hide, show, stateSideBar } from "../../redux/sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function SideBar() {
    const dispatch = useDispatch();
    const stateSide = useSelector(stateSideBar);
    const [colorButton, setColorButton] = useState(false);

    const showSidebar = () => {
        if (!stateSide) {
            dispatch(show());
            const btnElement = document.querySelector("#sideBtn") as HTMLButtonElement;
            btnElement.style.rotate = "0deg";
            btnElement.style.paddingLeft = "0px";
            btnElement.style.paddingRight = "15px";
        } else {
            dispatch(hide());
            const btnElement = document.querySelector("#sideBtn") as HTMLButtonElement;
            btnElement.style.rotate = "180deg";
            btnElement.style.paddingLeft = "15px";
            btnElement.style.paddingRight = "0px";
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
                <div className="container_side">

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