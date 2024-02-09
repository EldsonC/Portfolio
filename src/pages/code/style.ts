import styled from "styled-components";

export const CodeStyle = styled.div `
    .top-note {
        height: 50px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #33996B;

        p {
            color: #f7f7f7;
        }
    } 

    .content_main {
        
        .left_container {
            width: 100%;
            height: auto;
            min-height: 100vh;

            display: flex;

            background-color: transparent;

            .header_login {
                padding-top: 40px;
                padding-left: 20px;

                cursor: pointer;
            }
        }

        max-width: calc(100% - 46px);
        width: 100vw;
        height: auto;

        border-left: 1px solid #141414;
        border-right: 1px solid #141414;

        display: flex;
        justify-content: center;

        section {
            width: 100%;
            height: auto;
        }

        .hiro {
            padding: 0px;
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                margin-bottom: 10px;
                max-width: 64.125rem;
                font-size: 40px;
                font-weight: 500;

                color: #f7f7f7;

                z-index: 1000;
            }

            p {
                margin-bottom: 40px;
                max-width: 366px;
                font-size: 14px;
                font-weight: 500;
                color: #AEAEAE;

                text-align: center;

                z-index: 1000;
            }

            form {
                width: 300px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 11px;

                .input_container {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;

                    width: 100%;

                    .label_container {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        
                        a {
                            margin: 0px;
                        }
                    }

                    label {
                        font-size: 14px;
                        color: #d3d0d0;
                    }
                    .input-eye {
                        padding-left: 23px;
                        padding-right: 10px;

                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        width: calc(100% - 33px);
                        height: 45px;
    
                        border-radius: 5px;
                        border: 1px solid #4D4D4D;
                        color: #4D4D4D;
    
                        background-color: #222222;

                        input {
                            padding: 0px;
                            background-color: transparent;
                            border: none;
                            height: 100%;
                        }

                        button {
                            display: flex;
                            
                            padding: 5px 7px;
                            border-radius: 5px;
                            background-color: transparent;
                            border: 1px solid #4D4D4D;

                            cursor: pointer;
                        }
                    }
                    .error_field {
                        background-color: #1F1315;
                        border: 1px solid #822025;
                        color: #802936;
                    } 
                    .error_label {
                        margin: 0px;
                        margin-bottom: 10px;
                        display: flex;

                        color: #c23d43;
                    }
                    input {
                        padding: 0px 23px;
                        width: calc(100% - 46px);
                        height: 45px;
    
                        border-radius: 5px;
                        border: 1px solid #4D4D4D;
                        color: #7a7878;
    
                        background-color: #222222;
    
                        &:focus {
                            border-color: #8d8d8d;
                        }
                    }
                }


                .code {
                    width: 56px;
                    height: 60px;

                    input {
                        width: 100%;
                        height: 100%;

                        padding: 0px;
                        text-align: center;
                        font-size: 18px;

                        background-color: transparent;
                    }
                }

                .code-form {
                    display: flex;
                    gap: 20px;
                }

                a {
                    margin-top: 19px;
                    margin-bottom: 30px;
                    color: #5E5E5E;
                    font-size: 14px;
                    font-weight: 500;
                }

                .btn_login {
                    margin-top: 10px;
                    width: 100%;
                    height: 45px;
    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
    
                    border-radius: 5px;
                    border: 1px solid #202020;
                    background: #202020;
    
                    p {
                        margin: 0px;
                        font-size: 14px;
                        font-weight: 400;
    
                        color: #fff;
                    }
    
                    cursor: pointer;
    
                    z-index: 1000;
                }

                .btn_disable {
                    background-color: #2E2E2E;
                    border-color: #4D4D4D;

                    cursor: default;
                }

                .create-acc {
                    margin-top: 20px;
                    color: #5E5E5E;
                    font-size: 14px;
                    font-weight: 500;

                    a {
                        color: #f7f7f7;
                        text-decoration: underline;
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1190px){
        .content_main {
            .container_right {
                display: none;
            }
        }
    }

    @media screen and (max-width: 630px) {
        .top-note {
            height: 50px;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #33996B;

            p {
                text-align: center;
                font-size: 12px;
                color: #f7f7f7;
            }
        } 
        .content_main {
            .left_container {
                width: 100vw;
                height: auto;
                /* min-height: calc(100vh - 50px); */

                background-color: #1C1C1C;
                border-right: none;

                .header_login {
                    padding-top: 40px;
                    padding-left: 20px;

                    cursor: pointer;
                }
            }

            max-width: 100%;
            width: 100%;
            height: auto;

            border-left: 1px solid #141414;
            border-right: 1px solid #141414;

            display: flex;
            flex-direction: column;

            section {
                width: 100%;
                height: auto;
            }

            .hiro {
                padding: 20px;
                width: calc(100% - 40px);

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h1 {
                    margin-bottom: 10px;
                    max-width: 64.125rem;
                    font-size: 40px;
                    font-weight: 500;

                    color: #f7f7f7;

                    z-index: 1000;
                }

                p {
                    margin-bottom: 40px;
                    max-width: 366px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #AEAEAE;

                    text-align: center;

                    z-index: 1000;
                }

                .buttons_login {
                    width: calc(100% - 40px);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;

                    .focu-login {
                        background-color: #2E2E2E;
                    }

                    button {
                        width: 100%;
                        height: 45px;

                        border-radius: 6px;
                        border: 1px solid #4D4D4D;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 9px;
                        background-color: transparent;

                        p {
                            margin-bottom: 0px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #f7f7f7;
                        }

                        cursor: pointer;
                    }
                }

                .divider {
                    width: calc(100% - 40px);
                    margin: 27px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                    span {
                        width: 45%;
                        height: 1px;
                        background-color: #3a3a3a;
                    }

                    p {
                        margin-bottom: 0px;
                        font-size: 14px;
                        color: #f7f7f7;
                    }
                }

                form {
                    width: calc(100% - 40px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 11px;

                    .input_container {
                        margin-bottom: 10px;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        width: 100%;

                        .label_container {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            
                            a {
                                margin: 0px;
                            }
                        }

                        label {
                            font-size: 14px;
                            color: #d3d0d0;
                        }
                        input {
                            padding: 0px 23px;
                            width: calc(100% - 46px);
                            height: 45px;
        
                            border-radius: 5px;
                            border: 1px solid #4D4D4D;
                            color: #4D4D4D;
        
                            background-color: #222222;
        
                            &:focus {
                                border-color: #4D4D4D;
                            }
                        }
                    }


                    a {
                        margin-top: 19px;
                        margin-bottom: 30px;
                        color: #5E5E5E;
                        font-size: 14px;
                        font-weight: 500;
                    }

                    .btn_login {
                        margin-top: 10px;
                        width: 100%;
                        height: 45px;
        
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
        
                        border-radius: 5px;
                        border: 1px solid #52d399;
                        background: #33996B;
        
                        p {
                            margin: 0px;
                            font-size: 14px;
                            font-weight: 400;
        
                            color: #fff;
                        }
        
                        cursor: pointer;
        
                        z-index: 1000;
                    }

                    .create-acc {
                        margin-top: 20px;
                        color: #5E5E5E;
                        font-size: 14px;
                        font-weight: 500;

                        a {
                            color: #f7f7f7;
                            text-decoration: underline;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
`;