import styled from "styled-components";

export const StyleApp = styled.main`
    padding-left: 1.75rem;
    padding-top: 3.75rem;
    width: calc(100vw - 1.75rem);
    height: calc(100vh - 3.75rem);

    display: flex;
    flex-direction: column;
    gap: 4.31rem;

    .button {
        padding: 0.88rem 2.19rem;
        border-radius: 0.5rem;

        background-color: var(--button-grey-100);

        .p-btn {
            font-size: 0.75rem;
            font-weight: 400;
            color: var(--text-destaque-color);
        }
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


        h1 {
            color: var(--text-destaque-color);
            font-size: 30px;
            font-weight: 600;
            
            span {
                color: var(--text-grey-100);
                font-weight: 300;
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
`;