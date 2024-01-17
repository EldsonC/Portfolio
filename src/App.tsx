import { Arrow } from "./assets/icons/arrow";
import { Github } from "./assets/icons/github";
import { StyleApp } from "./styleApp";
import background from "./assets/img/backpc.png";
import { ArrowLeft } from "./assets/icons/arrowLeft";
import { personalProjects } from "./mocks/projects";
import { projects } from "./mocks/projects";

interface ProjectProps {
  image: string,
  name: string,
  description: string,
  link_github: string,
  link_site: string,
}
function App() {

  const navigationToLink = (link: string) => {
    window.location.href = link
  }

  return (
    <StyleApp>
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="hiro_container">
        <div className="arrow">
          <Arrow />
        </div>

        <div className="arrow-left">
          <ArrowLeft />
        </div>
        <h1>Eldson <span>Caldas</span></h1>
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
                <div className="card">
                  <div className="image_project">
                    <img src={project.image} alt="" />
                  </div>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>

                  <div className="btns_container">
                    <button className="button button-card" onClick={() => project.link_github === "" ? null : navigationToLink(project.link_github)}>
                      <Github />
                      <p className="p-btn-card" style={{color: "white"}}>{project.link_github === "" ? "Private" : "Github"}</p>
                    </button>

                    <button className="button button-card secundary" onClick={() => navigationToLink(project.link_site)}>
                      <p className="p-btn-secundary-card">Site</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="left">
          <h3>Personal Projects</h3>
          <div className="container_cards">
            {personalProjects.map((personalProject: ProjectProps) => {
              return (
                <div className="card">
                  <div className="image_project">
                    <img src={personalProject.image} alt="" />
                  </div>
                  <h2>{personalProject.name}</h2>
                  <p>{personalProject.description}</p>

                  <div className="btns_container">
                    <button className="button button-card" onClick={() => personalProject.link_github === "" ? null : navigationToLink(personalProject.link_github)}>
                      <Github />
                      <p className="p-btn-card" style={{color: "white"}}>{personalProject.link_github === "" ? "Private" : "Github"}</p>
                    </button>

                    <button className="button button-card secundary" onClick={() => navigationToLink(personalProject.link_site)}>
                      <p className="p-btn-secundary-card">Site</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StyleApp>
  )
}

export default App
