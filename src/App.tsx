import { Arrow } from "./assets/icons/arrow"
import { Github } from "./assets/icons/github";
import { StyleApp } from "./styleApp"

interface ProjectProps {
  image: string,
  name: string,
  description: string,
  link_github: string,
  link_site: string,
}
function App() {
  const projects = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/marya-4c963.appspot.com/o/logoAnny.png?alt=media&token=c1fd4b74-5c1f-474e-90e3-28c92b49550f",
      name: "AnnyApp",
      description: "Agendamento fácil para o seu estabelecimento, além de gestão financeira.",
      link_github: "",
      link_site: "https://annyapp.com.br/",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/marya-4c963.appspot.com/o/logoIrfae.png?alt=media&token=f2199be2-bcd4-4a98-9c9b-a2355f03a3e0",
      name: "Irfae",
      description: "Site institucional do IRFAE, focado em cursos de teologia em Curitiba, PR.",
      link_github: "",
      link_site: "https://www.irfae.com.br/",
    },
  ] as ProjectProps[];

  const personalProjects = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/marya-4c963.appspot.com/o/logoIvy.png?alt=media&token=8c918baa-663c-47b8-9348-bba1bab05d55",
      name: "IVY Softwares",
      description: " Site empresarial para a IVY Softwares, startup de desenvolvimento de softwares.",
      link_github: "",
      link_site: "https://ivysoftwares.vercel.app/",
    },
  ] as ProjectProps[];

  const navigationToLink = (link: string) => {
    window.location.href = link
  }

  return (
    <StyleApp>
      <div className="hiro_container">
        <div className="arrow">
          <Arrow />
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
                    <button className="button button-card">
                      <Github />
                      <p className="p-btn-card">Private</p>
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
                    <button className="button button-card">
                      <Github />
                      <p className="p-btn-card">Private</p>
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
