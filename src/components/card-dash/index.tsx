import { DeleteIcon } from "../../assets/icons/delete";
// import { EditIcon } from "../../assets/icons/edit";
import { Github } from "../../assets/icons/github";
import { CardStyle } from "./style";

interface ProjectProps {
    image: string,
    name: string,
    description: string,
    link_github: string,
    link_site: string,
    deleteAction: () => void;
};

export function CardDash({
    image,
    name,
    description,
    link_github,
    link_site,
    deleteAction
}: ProjectProps) {

    const navigationToLink = (link: string) => {
        const newWindow = window.open(link, '_blank');
        if (newWindow) {
            newWindow.opener = null;
        }
    };

    return (
        <CardStyle>
            <div className="header_card">
                <div className="image_project">
                    <img src={image} alt="" />
                </div>

                <div className="btns_card">
                    {/* <button title="Edit">
                        <EditIcon />
                    </button> */}
                    <button title="Delete" onClick={deleteAction}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
            <h2>{name}</h2>
            <p>{description}</p>

            <div className="btns_container">
                <button className="button button-card" onClick={() => link_github === "" ? null : navigationToLink(link_github)}>
                    <Github />
                    <p className="p-btn-card" style={{ color: "white" }}>{link_github === "" ? "Private" : "Github"}</p>
                </button>

                <button className="button button-card secundary" onClick={() => navigationToLink(link_site)}>
                    <p className="p-btn-secundary-card">Site</p>
                </button>
            </div>
        </CardStyle>
    );
};