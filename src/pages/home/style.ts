import styled from "styled-components";

export const MainStyle = styled.main `
    display: block;

    .styles_section {
        margin-bottom: 230px;
        .styles__img {
            width: 100%;
            display: flex;
            justify-content: center;
            position: absolute;
        }
        .styles__constainer {
            width: 100%;
            max-width: 70rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            z-index: 200;

            .styles_content__section {
                margin-top: 131px;
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 400;

                .styles__title {
                    margin-bottom: 16px;
                    max-width: 680px;
                    font-family: "Roboto";
                    font-size: 56px;
                    line-height: 60px;
                    font-weight: bold;
                    color: white;

                    text-align: center;
                }

                .styles__subtitle {
                    margin-bottom: 40px;
                    max-width: 472px;
                    font-family: "Roboto";
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 500;
                    color: white;

                    text-align: center;
                }

                .styles__footer {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    .styles_link {
                        max-height: 56px;
                        text-decoration: none;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        
                        font-family: "Roboto";
                        font-size: 16px;
                        font-weight: 700;
                        color: white;
                        border-radius: 5px;
                        padding: 15px 16px 15px 24px;
                        text-transform: uppercase;
                        background: var(--purple);
                    }

                    .styles_link > div {
                        display: flex;
                        margin-left: 24px;
                    }

                    .styles_link:hover {
                        background: #633BBC;
                        transition: .1s;
                    }
                }

                @media screen and (max-width: 755px) {
                    .styles__title {
                        font-size: 30px;
                        line-height: 40px;
                    }
                }
                .styles_contianer__video {
                    margin-top: 93px;
                    margin-bottom: 52px;
                    width: 100%;
                    height: 600px;
                    justify-content: center;

                    background: blue;

                    .style__video {
                        width: 100%;
                        height: 100%;

                        .video-react-button {
                            position: absolute;
                            top: 50%;
                            left: 50%; 
                        }
                    }
                
                }

                .styles__divider {
                    width: 100%;
                    display: flex;
                    justify-content: center;

                    .divider {
                        width: 3px;
                        height: 55px;

                        background: linear-gradient(179.98deg, #8257E6 0.02%, rgba(130, 87, 230, 0) 153.61%);

                    }
                }
            }
        }
    }
`;

export const FooterStyle = styled.footer `
    width: 100%;
    position: fixed;
    right: 34px;
    bottom: 30px;

    display: flex;
    justify-content: flex-end;
`;