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
import { stateSideBar } from "./redux/sidebar";
import { hide as hideMobile, show as showMobile } from "./redux/sidebarMobile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statesidebarmobile } from "./redux/sidebarMobile";
import { SideBarMobile } from "./components/sidebarmobile";
import { CloseIcon } from "./assets/icons/close";
import { Notify } from "./components/notify";

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
  const [ loadState, setLoadState ] = useState(true);
  const stateSide = useSelector(stateSideBar);
  const stateSideMobile = useSelector(statesidebarmobile);

  const navigationToLink = (link: string) => {
    const newWindow = window.open(link, '_blank');
    if (newWindow) {
        newWindow.opener = null;
    }
  };
  const [ scrollY, setScrollY ] = useState<number>(0); 

  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY);
      }

      if (scrollY >= 200) {
          
      } else {
          
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  }, [scrollY])

  console.log(scrollY)

  useEffect(() => {
    setTimeout(() => {
      setLoadState(false)
    }, 5000)
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
      {stateSideMobile ? <SideBarMobile/> : null}
      {loadState ? <Load/> : null}
      <StyleApp>
        <div className="container_notify">
          {notification.map((data:NotifyProps, index: number) => {
            return (
              <Notify
                id={`notify${index}`}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
        <div id="side" className={stateSide ? "side" : "side-hide"}>
          <SideBar/> 
        </div>
        <div className="content">
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="hiro_container">
            <div className="header">
              <h1>Eldson <span>Caldas</span></h1>
              <button onClick={() => showSidebarMobile()}>
                {stateSideMobile ? <CloseIcon/> : <MenuIcon/>}
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
                {projects.map((project: ProjectProps) => {
                  return (
                    <Card
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
                {personalProjects.map((personalProject: ProjectProps) => {
                  return (
                    <Card
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
