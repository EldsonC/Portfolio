import React from "react";
import Arrow from "../../assets/svg/arrow";
import Background from "../../assets/svg/background";
import Whatsapp from "../../assets/svg/whatsapp";
import { MainStyle, FooterStyle } from "./style";

import { Player } from "video-react";

export default function Home() {
    return (
        <>
            <MainStyle>
                <section className="styles_section">
                    <div className="styles__img">
                        <span>
                            <img src="https://images.unsplash.com/photo-1633432695542-b2c8e2b8a26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="dragon" />
                        </span>
                    </div>
                    <div className="styles__constainer">
                        <div className="styles_content__section">
                            <h1 className="styles__title">Acelere cada etapa da sua carreira em programação</h1>
                            <h2 className="styles__subtitle">O mapa completo para você impulsionar sua evolução e acessar as melhores oportunidades da sua carreira como dev.</h2>
                            <div className="styles__footer">
                                <a href="#" className="styles_link">
                                    entrar em contato
                                    <div>
                                        <span><Arrow/></span>
                                    </div>
                                </a>
                            </div>
                            <div className="styles_contianer__video">
                                <div className="style__video">
                                    <Player
                                        autoPlay={true}
                                        poster="https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                                    />
                                </div>
                            </div>
                            <div className="styles__divider">
                                <div className="divider">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainStyle>
            <FooterStyle>
                <a href="#">
                    <Whatsapp/>
                </a>
            </FooterStyle>
        </>
    )
}