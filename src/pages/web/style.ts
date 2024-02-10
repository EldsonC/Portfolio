import styled from "styled-components";

export const LandPageStyle = styled.div `
    width: 100vw;
    height: 100vh;

    overflow-y: auto;

    scroll-behavior: smooth;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #171717;

    &::selection {
        background-color: #d352d3; /* Cor de fundo da seleção */
        color: #fff; /* Cor do texto selecionado */
    }

    /* Para navegadores WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 5px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #272727; /* Cor do indicador da barra de rolagem */
        border-radius: 6px; /* Raio de borda do indicador */
    }

    header {
        padding-top: 44px;
        padding-bottom: 20px;
        width: 1273px;
        max-width: 90%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        /* position: sticky;
        top: 0px; */

        background: #171717ff;
        

        .left {
            display: flex;
            align-items: center;
            gap: 50px;

            ul {
                display: flex;
                align-items: center;
                gap: 30px;

                li {
                    cursor: pointer;
                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: #C7C7C7;
                    }
                }
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 16px;

            button {
                padding: 11px 22px;

                border-radius: 5px;
                border: 1px solid #303030;
                background-color: #171717;

                cursor: pointer;

                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #404040;
                }
            }

            .get_started {
                background-color: #242424;
                
                p {
                    color: white;
                }
            }
        }

    }

    /* Media Header */
    @media screen and (max-width: 600px) {
        .hide-mob {
            display: none;
        }

        .mob-small-hide {
            display: none;
        }
    }

    @media screen and (max-width: 375px) {
        .mob-small-hide {
            display: none;
        }
        .mob-size {
            .logo {
                img {
                    width: 90px;
                }
            }

            button {
                padding: 5px 10px;
                p {
                    font-size: 12px;
                }
            }


        }
    }

    .hiro {
        width: 1046px;

        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-top: 64px;
            margin-bottom: 13px;
            max-width: 476px;

            text-align: center;

            font-size: 40px;
            font-weight: 500;
            color: #C7C7C7;

            span {
                color: #A401B2;
            }
        }

        p {
            margin-bottom: 33px;
            max-width: 638px;

            text-align: center;

            font-size: 16px;
            font-weight: 400;
            color: #8C8C8C;
        }

        .btns_hiro {
            margin-bottom: 18px;
            display: flex;
            align-items: center;
            gap: 16px;

            button {
                padding: 11px 22px;
                border-radius: 5px;
                border: 1px solid #303030;
                background-color: #171717;

                cursor: pointer;

                p {
                    margin-bottom: 0px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #404040;
                }
            }

            .get_started {
                background-color: #242424;
                
                p {
                    color: white;
                }
            }

        }

        .lock_beta {
            margin-bottom: 35px;
            display: flex;
            align-items: center;
            gap: 4px;

            p {
                margin-bottom: 0px;
                font-size: 14px;
                font-weight: 400;

                color: #A1A1AA;
            }
        }

        .illustration {
            display: flex;
            flex-direction: column;
            align-items: center;

            button {
                padding: 7px 32px;

                display: flex;
                align-items: center;
                gap: 6px;

                border-radius: 26px;
                background-color: #D9D9D9;

                cursor: pointer;

                p {
                    margin-bottom: 0px;
                    font-size: 14px;
                    font-weight: 500;

                    color: #000000;
                }
            }
        }
    }

    /* Media Hiro */
    @media screen and (max-width: 600px) {
        .hiro {
            width: 95%;
        }

        .mob-size {
            h1, .p-hiro {
                max-width: 90%;
                font-size: 30px;
            }

            .p-hiro {
                font-size: 16px;
            }

            .illustration {
                img {
                    width: 95%;
                }

                button {
                    img {
                        width: 30px;
                    }
                }
            }
        }
    }

    .features {
        padding-top: 100px;
        width: 1140px;

        display: flex;
        align-items: center;
        gap: 24px;

        .card {
            padding: 32px;
            width: calc(396px - 64px);
            height: calc(205px - 64px);

            border-radius: 12px;

            background-color: #171717;

            img {
                margin-bottom: 21px;
            }

            h4 {
                margin-bottom: 16px;
                font-size: 15.9px;
                font-weight: 500;
                color: white;
            }

            p {
                margin-bottom: 0;
                max-width: 282px;
                font-size: 13.9px;
                font-weight: 500;
                color: #ffffffa1;
            }
        }

        :first-child {
            background-color: #232323;
        }
    }

     /* Media Features */
     @media screen and (max-width: 600px) {
        .features {
            padding-bottom: 50px;
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .card {
                width: 100%;
            }
        }
    }

    .video_container {
        padding-bottom: 100px;
        width: 1046px;
        
        .video {
            width: 100%;
            border-radius: 10px;
        }
    }

    /* Media  Video */
    @media screen and (max-width: 600px) {
        .video_container {
            margin-bottom: 100px;
            padding-bottom: 0px;

            width: 90%;
            height: 300px;

            background-color: #1b1b1b;
            border-radius: 10px;

            .video {
                height: 300px;
            }
        }
    }

    @media screen and (max-width: 375px) {
        .video_container {
            height: 250px;

            .video {
                height: 250px;
            }
        }
    }

    .trusted {
        padding-top: 118.6px;
        width: 1140px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        p {
            font-size: 15.9px;
            font-weight: 500;
            color: #A2A2A2;
        }

        .companies {
            display: flex;
            align-items: center;
            gap: 66.59px;
        }
    }

    /* Media  Trusted */
    @media screen and (max-width: 600px) {
        .trusted {
            width: 100%;

            .companies {
                padding-left: 20px;
                width: calc(100% - 20px);

                scroll-snap-type: x mandatory;
                overflow-x: scroll;
                scroll-behavior: smooth;

                img {
                    scroll-snap-align: center;
                }
            }
        }
    }

    .profile {
        padding-top: 50px;
        width: 1108px;
        display: flex;
        align-items: center;
        gap: 22px;

        .card {
            padding: 28px 24px;

            width: calc(204px - 48px);
            height: calc(264px - 56px);

            border-radius: 13px;

            background-color: #222222;
            border: 1px solid #2E2E2E;

            .profile_picture {
                margin-bottom: 16px;
                width: 63px;
                height: 63px;

                border-radius: 4px;
                background-color: #2B2B2B;

                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 40.26px;
                    height: 40.26px;

                    border-radius: 5.85px;

                    object-fit: cover;
                }

            }
            h4 {
                margin-bottom: 16px;
                font-size: 16px;
                font-weight: 500;
                color: #FFFFFF;
            }

            p {
                margin-bottom: 16px;
                max-width: 154px;
                font-size: 12px;
                font-weight: 500;
                color: #5C5C5C;
            }

            button {
                width: 100%;
                height: 40px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;

                background-color: #2B2B2B;
                border-radius: 8px;

                p {
                    margin-bottom: 0;
                    color: white;
                }
            }
        }
    }

    /* Media  Profile */
    @media screen and (max-width: 600px) {
        .profile {
            padding-left: 20px;
            width: calc(100% - 20px);
            min-height: 267px;
            
            scroll-snap-type: x mandatory;
            overflow-x: scroll;
            scroll-behavior: smooth;

            .card {
                min-width: calc(204px - 48px);
                min-height: calc(264px - 56px);
                
                scroll-snap-align: center;
            }
        }
    }
`;
