import styled from "styled-components";

export const AddModalStyle = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1500;

    background-color: #000000de;

    animation: AddAnimation .5s forwards;

    .form_container {
        padding: 31px;
        padding-bottom: 0px;

        width: calc(519px - 62px);
        height: auto;

        background-color: #121212;
        border: 1px solid #2E2E2E;
        border-radius: 10px;

        animation: AddAnimationForm .5s forwards;
        
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4 {
                font-size: 16px;
                font-weight: 500;
                color: #FFFFFF;

                text-transform: lowercase;
            }

            .close {
                width: 37px;
                height: 37px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 50%;
                background-color: #1A1A1A;

                cursor: pointer;
            }

            
            
        }

        form {
            margin-top: 26px;
            width: 100%;

            display: flex;
            flex-direction: column;

            .first_width {
                display: flex;
                align-items: center;
                gap: 18px;

                .input_width {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    label {
                        font-size: 14px;
                        font-weight: 500;
                        color: #A1A1A1;
                    }

                    .input_icon {
                        padding: 0px 18px;
                        width: calc(280px - 36px);
                        height: 44px;

                        display: flex;
                        align-items: center;
                        gap: 10px;

                        border-radius: 5px;
                        background-color: #121212;
                        border: 1px solid #383838;

                        input {
                            flex: 1;
                            height: 100%;
                            background-color: transparent;

                            color: #727272;

                            &::placeholder {
                                font-size: 14px;
                                font-weight: 500;
                                color: #3D3D3D;
                            }
                        }
                    }
                }

                .input_select {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    label {
                        font-size: 14px;
                        font-weight: 500;
                        color: #A1A1A1;
                    }

                    .input_icon-sel {
                        padding: 0px 18px;
                        width: calc(150px - 36px);
                        height: 44px;

                        display: flex;
                        align-items: center;
                        gap: 10px;

                        cursor: pointer;

                        border-radius: 5px;
                        background-color: #121212;
                        border: 1px solid #383838;

                        span {
                            width: 70px;
                            background-color: transparent;

                            font-size: 14px;
                            color: #3D3D3D;
                        }

                    }

                    .options {
                        position: absolute;
                        top: 170px;

                        ul {
                            display: flex;
                            flex-direction: column;

                            background-color: #181818;
                            border-radius: 5px;

                            border: 1px solid #222222;

                            li {
                                width: 152px;
                                height: 40px;

                                display: flex;
                                justify-content: center;
                                align-items: center;

                                background-color: #181818;
                                color: #5c5c5c;

                                border-radius: 5px;

                                font-size: 14px;
                                font-weight: 500;

                                cursor: pointer;

                                &:hover {
                                    background-color: #2424249c;
                                }
                            }
                        }
                    }

                    .remove-options {
                        display: none;
                    }
                }
            }

            .input_ {
                margin-top: 20px;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 8px;

                label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #A1A1A1;
                }

                .input_icon {
                    padding: 0px 18px;
                    width: calc(100% - 36px);
                    height: 44px;

                    display: flex;
                    align-items: center;
                    gap: 10px;

                    border-radius: 5px;
                    background-color: #121212;
                    border: 1px solid #383838;

                    input {
                        flex: 1;
                        height: 100%;
                        background-color: transparent;

                        color: #727272;

                        &::placeholder {
                            font-size: 14px;
                            font-weight: 500;
                            color: #3D3D3D;
                        }
                    }

                    .upload {
                        padding: 6px 10px;

                        display: flex;
                        align-items: center;
                        gap: 5px;

                        background-color: #2222229c;
                        border-radius: 5px;
                        border: 1px solid #303030;

                        cursor: pointer;

                    }
                    input[type="file"] {
                        display: none;
                    }
                }
                
            }

            .container_btns {
                margin-top: 24px;
                margin-bottom: 23px;
                width: 100%;

                display: flex;

                justify-content: flex-end;
                align-items: center;
                gap: 11px;

                button {
                    width: 93px;
                    height: 40px;

                    border-radius: 10px;
                    border: 1px solid #383838;
                    background-color: #1D1D1D;

                    cursor: pointer;

                    p {
                        font-size: 14px;
                        font-weight: 500;
                        color: white;
                    }
                }

                .create_btn {
                    background-color: #2B2B2B;
                    border: 1px solid #2B2B2B;
                }
            }
        }
    }

    @keyframes AddAnimation {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes AddAnimationForm {
        from {
            opacity: 0;
            transform: translateY(-300px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);

        }
    }
`;