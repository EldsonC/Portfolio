import styled from "styled-components";

export const StyleLoad = styled.div `
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--background);
    z-index: 1500;

    .conteiner_load {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        .logo-item {
            /* width: 200px; */
            animation: animationLoad .5s infinite alternate-reverse;
        }

        .progress_container {
            width: 150px;
            height: 7px;

            border-radius: 10px;
            background-color: #272727;
            border: 1px solid #4e4e4e;

            .progress {
                width: 50%;
                height: 100%;

                background-color: #5f5f5f;
                border-radius: 10px;
            }
        }
    }

    &.removeLoad {
        animation: removeLoadAnimation 2s forwards;
    }

    @keyframes animationLoad {
        from {
            transform: scale(1);
        }

        to {
            transform: scale(1.2);
        }
    }

    @keyframes removeLoadAnimation {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
`;