import styled from "styled-components";

export const StyleApp = styled.main`
    width: 100vw;
    height: 100vh;
 
    display: flex;
    flex-direction: flex;

    .khtaUK:nth-last-child(1) {
        margin-right: 0px;
    }

    .background_spline {
        width: 100vw;
        height: 100vh;
        position: fixed;
    }

    .remove-content {
        animation: removeContent 2s forwards;
    }

    .show-content {
        animation: showContent 2s forwards;
    }

    @keyframes removeContent {
        from {
            opacity: 1;
            transform: translateY(0);
        }

        to {
            opacity: 0;
            transform: translateY(-500px);
        }
    }

    @keyframes showContent {
        from {
            opacity: 0;
            transform: translateY(-500px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .back_spline-hide {
        display: none;
    }

    .container_notify {
        max-width: 100%;

        position: fixed;
        top: 30px;
        right: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    @media screen and (max-width: 600px) {

        .show-tip-container {
            width: 100vw;
            height: 100vh;

            display: flex;
            justify-content: center;
            align-items: center;

            position: fixed;

            background-color: #000000b0;
        }
    }
 
    .side {
        width: 250px;
        height: 100%; 

        animation: sideAnimation 1s forwards;
    } 

    .side-hide {
        width: 30px;
        height: 100%;

        animation: sideAnimationRemove 1s forwards;
    }

    @keyframes sideAnimation {
        from {
            width: 0px;
        }

        to {
            width: 250px;
        }

    }

    @keyframes sideAnimationRemove {
        from {
            width: 250px;
        }

        to {
            width: 30px;
        }

    }
    
    .content {
        padding-top: 32px;
        width: calc(100% - 320px);
        max-width: 100%;
        height: auto;

        flex: 1;
        /* background-color: red; */

        .background {
            display: none;
        }

        .button {
            padding: 0.88rem 2.19rem;
            border-radius: 0.5rem;
    
            background-color: var(--button-grey-100);
    
            .p-btn {
                font-size: 0.75rem;
                font-weight: 400;
                color: var(--text-destaque-color);
            }
    
            cursor: pointer;
        }
    
        .button-card {
            padding: 0.56rem 0.94rem;
            display: flex;
            align-items: center;
            gap: 0.31rem;
            
            .p-btn-card {
                font-size: 0.625rem;
                font-weight: 500;
                color: var(--text-destaque-color);
            }
        }
    
        .secundary {
            background-color: var(--button-grey-200);
    
            .p-btn-secundary {
                color: var(--text-button-100);
            }
        }
    
        .hiro_container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
    
            .arrow-left {
                display: none;
            }
    
            .header {
                padding-right: 15px;
                display: flex;
                justify-content: space-between;
    
                button {
                    display: flex;
                    background-color: transparent;
                }
            }

            .head_cont {
                display: flex;
                align-items: center;
                gap: 16px;

                h1 {
                    color: var(--text-destaque-color);
                    font-size: 30px;
                    font-weight: 600;
                    
                    span {
                        color: var(--text-grey-100);
                        font-weight: 300;
                    }
                }

                label {
                    padding: 5px 10px;
                    border-radius: 5px;

                    font-size: 12px;
                    color: grey;

                    background-color: var(--card-background);
                    border: 1px solid var(--card-border);
                }
            }
    
    
    
            .container_buttons {
                display: flex;
                gap: 0.625rem;
            }
    
            p {
                max-width: 15.0625rem;
                font-size: 1rem;
                font-weight: 400;
                color: var(--text-grey-200);
            }
        }
    
        .projects_container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 2rem;
    
            .left {
                width: 100%;
    
                h3 {
                    color: var(--text-destaque-color);
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: normal;
                }
    
                .container_cards {
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    width: 100%;
    
                    display: flex;
                    align-items: center;
                    gap: 1.37rem;
    
                    overflow-x: scroll;
    
                    .card {
                        padding: 1.75rem 1.5rem;
                        min-width: calc(12.75rem - 3rem);
                        height: calc(16.5rem - 3.5rem);
    
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
    
                        border-radius: 0.8125rem;
                        background-color: var(--card-background);
    
                        .image_project {
                            width: 3.9375rem;
                            min-height: 3.9375rem;
    
                            display: flex;
                            justify-content: center;
                            align-items: center;
    
                            border-radius: 0.25rem;
                            background-color: var(--card-destaque-background);
    
                            img {
                                width: 2.51625rem;
                                height: 2.51625rem;
    
                                object-fit: cover;
                            }
                        }
    
                        h2 {
                            color: var(--text-destaque-color);
                            font-size: 1rem;
                            font-weight: 500;
                            line-height: normal;
                        }
    
                        p {
                            max-width: 9.625rem;
                            color: var(--text-grey-200);
                            font-size: 0.75rem;
                            font-weight: 500;
                        }
    
                        .btns_container {
                            display: flex;
                            align-items: center;
                            gap: 0.62rem;
                        }
    
                        &:nth-last-child(1) {
                            margin-right: 1.37rem;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 600px) {       
            .projects_container {
                padding-top: 32px;
            }
            
        }
    
        @media screen and (min-width: 540px) {
            margin: 0 auto;
            padding-left: 0;
            padding-top: 3.75rem;
            width: 73.75rem;
            max-width: 70%;
            height: calc(100vh - 3.75rem);
    
            display: flex;
            flex-direction: column;
            gap: 4.31rem;
    
            .background {
                width: 100vw;
                height: 100vh;
    
                display: none;
                justify-content: center;
                align-items: center;
    
                position: fixed;
                top: 0px;
                left: 0px;
    
                img {
                    width: 900px;
                }
    
            }
    
            .hiro_container {
                z-index: 1;
    
                .arrow-left {
                    display: flex;
                } 
                .arrow {
                    display: none;
                } 
    
                .header {
                    button {
                        display: none;
                    }
                }
    
                p {
                    max-width: 22.1875rem;
                }
            } 
    
            .projects_container {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 0rem;
    
                z-index: 1;
    
                .left {
                    width: auto;
    
                    h3 {
                        color: var(--text-destaque-color);
                        font-size: 1rem;
                        font-weight: 500;
                        line-height: normal;
                    }
    
                    .container_cards {
                        padding-top: 1rem;
                        width: 460px;
    
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 1rem;
    
                        overflow-x: hidden;
                    }
                }
    
                .right {
                    flex: 1;
    
                    .container_cards {
                        padding-top: 1rem;
                        width: 100%;
    
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 1rem;
    
                        overflow-x: hidden;
                    }
                }
            }
        }
    
        @media screen and (min-width: 1200px) {
            .projects_container {
                .right {
                    flex: 1;
    
                    .container_cards {
                        padding-top: 1rem;
                        width: 100%;
    
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 1.37rem;
    
                        overflow-x: hidden;
                    }
                }
            }
        }
    
        @media screen and (min-width: 1600px) { 
            .projects_container {
                .left {
                    .container_cards {
                        gap: 1rem;
                    }
                }
                .right {
                    width: 680px;
    
                    .container_cards {
                        padding-top: 1rem;
                        width: 100%;
    
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 1rem;
    
                        overflow-x: hidden;
                    }
                }
            }
        }
    }
`;