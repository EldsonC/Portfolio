import { useState } from "react";
import { CloseAddIcon } from "../../assets/icons/addclose";
import { DescriptionIcon } from "../../assets/icons/description";
import { DownIcon } from "../../assets/icons/down";
import { FolderIcon } from "../../assets/icons/folder";
import { GithubAddIcon } from "../../assets/icons/github-add";
import { TypeIcon } from "../../assets/icons/tip";
import { WebsiteIcon } from "../../assets/icons/website";
import { hide } from "../../redux/addproject";
import { AddModalStyle } from "./style";

import { useDispatch } from "react-redux";
import { ImageIcon } from "../../assets/icons/image";
import { UploadIcon } from "../../assets/icons/upload";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

interface AddProps {
    typeSelect: string;
}

export function AddModal({typeSelect}:AddProps) {
    const dispatch = useDispatch();
    
    const [ name, setName ] = useState("");
    const [ type, setType ] = useState(typeSelect);
    const [ cover, setCover ] = useState("");
    const [ repository, setRepository ] = useState("");
    const [ website, setWebsite ] = useState("");
    const [ description, setDescription ] = useState("");
    
    const revealOptions = () => {
        const options = document.getElementById("options") as HTMLDivElement;
        if (options.className === "remove-options") {
            options.classList.replace("remove-options","options");
        } else {
            options.classList.replace("options","remove-options");
        }
    }
    
    const setTypeProject = (type: string) => {
        const options = document.getElementById("options") as HTMLDivElement;

        setType(type);
        options.classList.replace("options","remove-options");
    }

    const params = useParams();

    const createProject = (e:any) => {
        e.preventDefault();

        api.post("/create-project", {
            id_user: params.id_user,
            cover: cover,
            title: name,
            description: description,
            repository: repository,
            website: website,
            type: type
        }).then(() => {
            window.location.reload()
        }).catch((error: any) => {
            console.log(error)
        })
    }
    
    return (
        <AddModalStyle>
            <div className="form_container">
                <header>
                    <h4>Add new {typeSelect} project</h4>
                    <div className="close" onClick={() => dispatch(hide())}>
                        <CloseAddIcon />
                    </div>
                </header>

                <form>
                    <div className="first_width">
                        <div className="input_width">
                            <label htmlFor="">Name *</label>
                            <div className="input_icon">
                                <FolderIcon />
                                <input 
                                    type="text" 
                                    placeholder="Name your project" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="input_select">
                            <label htmlFor="">Type</label>
                            <div className="input_icon-sel" onClick={revealOptions}>
                                <TypeIcon />
                                <span id="type">{type}</span>
                                <DownIcon />
                            </div>
                            <div className="remove-options" id="options">
                                <ul>
                                    <li onClick={() => setTypeProject("Personal")}>Personal</li>
                                    <li onClick={() => setTypeProject("Work")}>Work</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="input_">
                        <label htmlFor="">Cover (optional)</label>
                        <div className="input_icon">
                            <ImageIcon />
                            <input 
                                type="text" 
                                placeholder="URL image or upload file" 
                                onChange={(e) => setCover(e.target.value)}
                            />
                            <label htmlFor="upload" className="upload">
                                <UploadIcon/>
                                <p>upload</p>
                            </label>

                            <input type="file" id="upload" />
                        </div>
                    </div>

                    <div className="input_">
                        <label htmlFor="">Github (optional)</label>
                        <div className="input_icon">
                            <GithubAddIcon />
                            <input 
                                type="text" 
                                placeholder="Link to repository" 
                                onChange={(e) => setRepository(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input_">
                        <label htmlFor="">Website (optional)</label>
                        <div className="input_icon">
                            <WebsiteIcon />
                            <input 
                                type="text" 
                                placeholder="Link to website" 
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input_">
                        <label htmlFor="">Description *</label>
                        <div className="input_icon">
                            <DescriptionIcon />
                            <input 
                                type="text" 
                                placeholder="Describe your project" 
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="container_btns">
                        <button onClick={() => dispatch(hide())}>
                            <p>Cancel</p>
                        </button>
                        <button className="create_btn" onClick={(e) => {createProject(e)}}>
                            <p>Create</p>
                        </button>
                    </div>
                </form>
            </div>
        </AddModalStyle>
    );
}