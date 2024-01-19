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
        img {
            /* width: 200px; */
            animation: animationLoad 5s infinite;
        }
    }

    &.removeLoad {
        animation: removeLoadAnimation 2s forwards;
    }

    @keyframes animationLoad {
        0% {
            /* opacity: 0; */
        }

        20% {
            rotate: 90deg;

        }

        40% {
            rotate: 180deg;
        }

        100% {
            rotate: 360deg;
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