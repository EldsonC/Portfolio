// import { Arrow } from "./assets/icons/arrow";
import { StyleApp } from "./styleApp";
import background from "./assets/img/backpc.png";
// import { ArrowLeft } from "./assets/icons/arrowLeft";
import { personalProjects } from "./mocks/projects";
import { projects } from "./mocks/projects";
import { Card } from "./components/card";
import { Load } from "./components/load";
import { useEffect, useState } from "react";
import { SideBar } from "./components/sidebar";
import { MenuIcon } from "./assets/icons/menu";
import { hide, show, stateSideBar } from "./redux/sidebar";
import { hide as hideMobile, show as showMobile } from "./redux/sidebarMobile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statesidebarmobile } from "./redux/sidebarMobile";
import { SideBarMobile } from "./components/sidebarmobile";
import { CloseIcon } from "./assets/icons/close";
import { Notify } from "./components/notify";
import { api } from "./services/api";

interface ProjectProps {
  image: string,
  name: string,
  description: string,
  link_github: string,
  link_site: string,
};

interface NotifyProps {
  title: string;
  description: string;
};

function App() {
  const dispatch = useDispatch();
  const [loadState, setLoadState] = useState(true);
  const stateSide = useSelector(stateSideBar);
  const stateSideMobile = useSelector(statesidebarmobile);

  const navigationToLink = (link: string) => {
    const newWindow = window.open(link, '_blank');
    if (newWindow) {
      newWindow.opener = null;
    }
  };


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
    if (key.code === "BracketRight") {
      showSidebar();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false)
    }, 5000)

    const now: Date = new Date();
    const hours: number = now.getHours();
    const minutes: number = now.getMinutes();

    api.post("/send-sms", {
      toNumber: "+5544999814053",
      message: `Olá, grande raparigo! Uma nova visita às ${hours}h${minutes}.`
    }).then(() => {
      console.log("Enviado com sucesso!");
    }).catch((err:any) => {
      console.log(err);
    });



    window.addEventListener("keydown", (key) => showKey(key))
  }, [])

  const showSidebarMobile = () => {
    if (!stateSideMobile) {
      dispatch(showMobile());
    } else {
      dispatch(hideMobile());
    }
  };

  const notification = [
    {
      title: "Wellcome",
      description: "Bem-vindo ao meu portifolio"
    },
  ] as NotifyProps[];

  return (
    <>
      {stateSideMobile ? <SideBarMobile /> : null}
      {loadState ? <Load /> : null}
      <StyleApp>
        <div className="container_notify">
          {notification.map((data: NotifyProps, index: number) => {
            return (
              <Notify
                key={index}
                id={`notify${index}`}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
        <div id="side" className={stateSide ? "side" : "side-hide"}>
          <SideBar />
        </div>
        <div className="content">
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="hiro_container">
            <div className="header">
              <h1>Eldson <span>Caldas</span></h1>
              <button onClick={() => showSidebarMobile()}>
                {stateSideMobile ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <div className="container_buttons">
              <button className="button" onClick={() => navigationToLink("https://github.com/EldsonC")}>
                <p className="p-btn">Github</p>
              </button>

              <button className="button secundary" onClick={() => navigationToLink("https://www.linkedin.com/in/eldsonc/")}>
                <p className="p-btn p-btn-secundary">Linkedin</p>
              </button>
            </div>
            <p>Conheça Eldson, um entusiasta apaixonado pela tecnologia e sempre ávido por desafios inovadores.</p>
          </div>

          <div className="projects_container">
            <div className="left">
              <h3>Top Projects</h3>
              <div className="container_cards">
                {projects.map((project: ProjectProps, key) => {
                  return (
                    <Card
                      key={key}
                      image={project.image}
                      name={project.name}
                      description={project.description}
                      link_github={project.link_github}
                      link_site={project.link_site}
                    />
                  );
                })}
              </div>
            </div>

            <div className="left right">
              <h3>Personal Projects</h3>
              <div className="container_cards">
                {personalProjects.map((personalProject: ProjectProps, key) => {
                  return (
                    <Card
                      key={key}
                      image={personalProject.image}
                      name={personalProject.name}
                      description={personalProject.description}
                      link_github={personalProject.link_github}
                      link_site={personalProject.link_site}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </StyleApp>
    </>
  );
};

export default App;
