import styled from "styled-components"

export const HeaderStyle = styled.header `
    height: 88px;
    background: var(--dark);

    display: flex;
    justify-content: center;

    .style_header__div {
        width: 70rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 300;
        

        .styles_nav__header {
            display: flex;
            height: 100%;
            
            .styles_navItem {
                height: 100%;
                margin-left: 32px;
                display: flex;
                align-items: center;

                font-family: "Roboto";
                font-weight: 700;
                font-size: 16px;
                color: white;

                border-bottom: 2px solid var(--purple);

                text-decoration: none;
            }

            .styles_navList-unActive {
                height: 100%;
                margin-left: 32px;
                display: flex;
                align-items: center;

                font-family: "Roboto";
                font-weight: 400;
                font-size: 16px;
                color: var(--grey);

                border-bottom: 2px solid var(--dark);

                text-decoration: none;
            } 

            .styles_navList-unActive:hover {
                color: white;
                border-bottom: 2px solid var(--purple);
                transition: .2s;
            }
        }

        .styles_button__header {
                width: 126px;
                height: 40px;

                border-radius: 5px;
                background: unset;
                border: 1px solid var(--purple);

                font-family: "Roboto";
                font-weight: 700;
                color: white;

                cursor: pointer;
        }
        .styles_button__header:hover {
            background: var(--purple);
            transition: .5s;
        }
        .styles_menu__header {
            display: none;
        }
        @media screen and (max-width: 722px) {
            .styles_nav__header {
                display: none;
            }
            .styles_button__header {
                display: none;
            }
            .styles_menu__header {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 1120px) {
        .style_header__div {
            margin: 0 35px;
        }
    }

`;