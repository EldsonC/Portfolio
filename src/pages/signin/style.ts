import styled from "styled-components";

export const SignInStyle = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;

    .login_container {
        padding: 47px 55px;
        width: calc(450px - 110px);
        height: calc(100% - 94px);

        background-color: #212121;
        border-right: 1px solid #363636;

        .first_text {
            display: flex;
            flex-direction: column;
            gap: 7px;

            h1 {
                margin-top: 49px;
                font-size: 30px;
                font-weight: 500;

                color: #ffffff;
            }

            p {
                font-size: 16px;
                font-weight: 500;
                color: #4A4A4A;
            }
        }

        form {
            margin-top: 29px;
            display: flex;
            flex-direction: column;

            .error_label {
                margin-bottom: 16px;
                font-size: 12px;
                font-weight: 500;
                color: #c40a57;
            }

            .google_btn {
                width: 100%;
                height: 44px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;

                background-color: #262626;
                border-radius: 5px;
                border: 1px solid #4F4F4F;

                cursor: pointer;

                p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #FFFFFF;
                }
            }

            .divider {
                margin: 21px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 9px;

                .line {
                    height: 2px;
                    flex: 1;

                    background-color: #2E2E2E;
                    border-radius: 10px;
                }

                span {
                    font-size: 14px;
                    font-weight: 500;
                    color: white;
                }
            }

            .input_ {
                margin-bottom: 16px;
                display: flex;
                flex-direction: column;
                gap: 8px;

                label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #3D3D3D;
                }

                input {
                    padding: 0px 18px;
                    width: calc(100% - 36px);
                    height: 44px;

                    background-color: #262626;
                    border-radius: 5px;
                    border: 1px solid #2E2E2E;

                    color: #4d4c4c;

                    &::placeholder {
                        color: #3D3D3D;
                    }

                    &:focus {
                        border: 1px solid #555555;
                    }
                }

            }

            .sign_in {
                margin-top: 21px;
                width: 100%;
                height: 44px;

                background-color: #222222;
                border-radius: 5px;
                border: 1px solid #2E2E2E;

                font-size: 14px;
                font-weight: 500;
                color: #B0B0B0;

                cursor: pointer;
            }
        }

        .signup_link {
            margin-top: 35px;
            width: 100%;
            display: flex;
            justify-content: center;

            span {
                font-size: 14px;
                font-weight: 400;
                
                color: #4A4A4A;

                a {
                    color: white;
                }
            }
        }
    }

    .illu_container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;

        img {
            width: 750px;
        }
    }
`;