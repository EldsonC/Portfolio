import { StyleApp } from "./styleApp";
import background from "../../assets/img/backpc.png";
import { CardDash } from "../../components/card-dash";
import { Load } from "../../components/load";
import { useEffect, useState } from "react";

import { MenuIcon } from "../../assets/icons/menu";
import { hide, show, stateSideBar } from "../../redux/sidebar";
import { hide as hideMobile, show as showMobile } from "../../redux/sidebarMobile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statesidebarmobile } from "../../redux/sidebarMobile";
import { SideBarMobile } from "../../components/sidebarmobile";
import { CloseIcon } from "../../assets/icons/close";

import { Tips } from "../../components/tips";
import { api } from "../../services/api";

import { useNavigate, useParams } from "react-router-dom";
import { AddProject } from "../../components/add";
import { WorkIcon } from "../../assets/icons/work";
import { AddIcon } from "../../assets/icons/add";
import { AddModal } from "../../components/addmodal";

import { stateAddproject, show as showAdd } from "../../redux/addproject";
import { SettingsIcon } from "../../assets/icons/settings";
import { BellIcon } from "../../assets/icons/bell";
import { LogoutIcon } from "../../assets/icons/logout";
import { CopyIcon } from "../../assets/icons/copy";
import { SideBarDash } from "../../components/sidebardash";

interface ProjectProps {
  id: string;
  cover: string;
  title: string;
  description: string;
  repository: string;
  website: string;
  type: string;
};

export function Dashboard() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [loadState, setLoadState] = useState(true);
  const [spline, setSpline] = useState(false);
  const stateSide = useSelector(stateSideBar);
  const stateSideMobile = useSelector(statesidebarmobile);
  const addProject = useSelector(stateAddproject);
  const [stateTip, setStateTip] = useState(false);

  const [type, setType] = useState("");

  const [projects, setProjects] = useState<ProjectProps[]>([]);

  // const navigationToLink = (link: string) => {
  //   const newWindow = window.open(link, '_blank');
  //   if (newWindow) {
  //     newWindow.opener = null;
  //   }
  // };


  const showSidebar = () => {
    const btnElement = document.querySelector("#sideBtn") as HTMLButtonElement;
    const sideElement = document.querySelector("#sideBtn") as HTMLButtonElement;

    if (!stateSide) {
      dispatch(show());
      btnElement.style.rotate = "0deg";
      btnElement.style.paddingLeft = "0px";
      btnElement.style.paddingRight = "15px";
      localStorage.setItem("sidebar", JSON.stringify(true));
    } else {
      sideElement.classList.add("remove-side");

      btnElement.style.rotate = "180deg";
      btnElement.style.paddingLeft = "15px";
      btnElement.style.paddingRight = "0px";
      localStorage.setItem("sidebar", JSON.stringify(false));

      dispatch(hide());
    }
  };

  const showKey = (key: KeyboardEvent) => {
    if (key.ctrlKey && key.key === "b") {
      showSidebar();
    };

    if (key.ctrlKey && key.key === "m") {

      if (!spline) {
        const spline = document.querySelector("#spline") as HTMLDivElement;
        const content = document.querySelector("#content") as HTMLDivElement;
        spline.classList.toggle("background_spline", true);
        spline.classList.add("show-content");
        spline.classList.toggle("back_spline-hide", false);
        content.classList.add("remove-content");
        content.classList.remove("show-content");

        spline.style.zIndex = "1000";


        setSpline(true);
      } else {
        const spline = document.querySelector("#spline") as HTMLDivElement;
        const content = document.querySelector("#content") as HTMLDivElement;
        spline.classList.toggle("background_spline", false);
        spline.classList.add("remove-content");
        spline.classList.toggle("back_spline-hide", true);
        content.classList.add("show-content");
        content.classList.remove("remove-content");

        setTimeout(() => {
          content.classList.remove("show-content");
        }, 2000)

        setSpline(false);
      }
    };
  };

  const paramas = useParams();

  useEffect(() => {

    const stateTip = localStorage.getItem("tipState");
    const loggedUser = JSON.parse(localStorage.getItem("@USER:token") || "[]")
    if (stateTip) {
      setStateTip(false);
    }

    api.post("/get-projects-dash", {
      id_user: paramas.id_user,
      loggedInUserId: loggedUser.name
    })
      .then((result: any) => {
        setLoadState(false);
        if (!stateTip) {
          setStateTip(true);
        }
        setProjects(result.data)
      })
      .catch(() => {
        window.location.href = `/port/dashboard/${loggedUser.name}`;
      })
  }, [window.addEventListener("keydown", (key) => showKey(key))]);

  const showSidebarMobile = () => {
    if (!stateSideMobile) {
      dispatch(showMobile());
    } else {
      dispatch(hideMobile());
    }
  };

  const deleteProject = (id: string) => {
    api.post("/delete-project", {
      id: id,
    })
      .then(() => {
        window.location.reload();
      })
  }

  const logout = () => {
    localStorage.removeItem("@MRYTOKEN:token");
    localStorage.removeItem("@USER:token");

    navigation("/sign-in")
  }

  return (
    <>
      {addProject ? <AddModal typeSelect={type} /> : null}
      {stateSideMobile ? <SideBarMobile /> : null}
      {loadState ? <Load /> : null}
      <StyleApp>
        <div id="container_tip" className={stateTip ? "show-tip-container" : ""}>
          {stateTip ? <Tips /> : null}
        </div>
        <div className="back_spline-hide" id="spline">
          <spline-viewer url="https://prod.spline.design/ScUBWw-SBz68a3os/scene.splinecode"></spline-viewer>
        </div>

        <div id="side" className={stateSide ? "side" : "side-hide"}>
          <SideBarDash />
        </div>
        <div className="content" id="content">
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="hiro_container">
            <div className="header">
              <div className="head_cont">
                <h1>{paramas.id_user} <span>admin</span></h1>
                <label className="mob-game">CTRL+M</label>
              </div>

              <div className="admin_btns">
                <button className="admin_button" onClick={logout}>
                  <LogoutIcon />
                </button>

                <button className="admin_button">
                  <SettingsIcon />
                </button>

                <button className="admin_button">
                  <BellIcon />
                </button>
              </div>
              <button onClick={() => showSidebarMobile()}>
                {stateSideMobile ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <div className="public_info">
              <div className="info">
                <div className="tag_dash">
                  <p>https://powtfy.com/port/{paramas.id_user}</p>
                </div>
                <button>
                  <CopyIcon/>
                </button>
              </div>

              <div className="info">
                <div className="tag_dash">
                  <p>Visits: 19</p>
                </div>

                <div className="tag_dash">
                  <p>Github clicks: 30</p>
                </div>
              </div>
            </div>
            <div className="container_buttons">
              <button className="button">
                <p className="p-btn">Edit profile</p>
              </button>

              <button className="button secundary">
                <p className="p-btn p-btn-secundary">Share</p>
              </button>
            </div>
            {/* <p>Meet Eldson, a technology enthusiast with a passion for innovation and a constant eagerness for new challenges.</p> */}
          </div>

          <div className="projects_container">
            <div className="left">
              <h3>Top works</h3>
              <div className="container_cards">
                <AddProject
                  icon={<WorkIcon />}
                  title="New work"
                  action={() => {
                    dispatch(showAdd())
                    setType("Work")
                  }}
                />
                {projects.map((project: ProjectProps, key) => {
                  if (project.type === "Work") {
                    return (
                      <CardDash
                        deleteAction={() => deleteProject(project.id)}
                        key={key}
                        image={project.cover}
                        name={project.title}
                        description={project.description}
                        link_github={project.repository}
                        link_site={project.website}
                      />
                    );
                  }
                })}

              </div>
            </div>

            <div className="left right">
              <h3>Personal projects</h3>
              <div className="container_cards">
                <AddProject
                  icon={<AddIcon />}
                  title="New personal"
                  action={() => {
                    dispatch(showAdd())
                    setType("Personal")
                  }}
                />
                {projects.map((project: ProjectProps, key) => {
                  if (project.type === "Personal") {
                    return (
                      <CardDash
                        deleteAction={() => deleteProject(project.id)}
                        key={key}
                        image={project.cover}
                        name={project.title}
                        description={project.description}
                        link_github={project.repository}
                        link_site={project.website}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </StyleApp>
    </>
  );
};
