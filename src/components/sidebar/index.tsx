import { RightIcon } from "../../assets/icons/right";
import { SideBarStyle } from "./style";
// import cat from "../../assets/img/cat.gif";
import { show, stateSideBar } from "../../redux/sidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export function SideBar() {
    const dispatch = useDispatch();
    const stateSide = useSelector(stateSideBar);

    const showSidebar = () => {
        dispatch(show());
    };

    return (
        <SideBarStyle>
            {stateSide ? (
                <div className="container_side">

                </div>
            ) : null}
            <div className="right_btn">
                <button onClick={() => showSidebar()}>
                    <RightIcon/>
                </button>
            </div>
        </SideBarStyle>
    );
};