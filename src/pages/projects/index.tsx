import React from "react";
import Banner from "../../assets/svg/banner";
import { MainStyle } from "./style";

export default function Projects() {
    return (
        <MainStyle>
            <section className="styles_section__projects">
                <div className="styles_container__banner">
                    <Banner/>
                </div>
            </section>
        </MainStyle>
    )
}