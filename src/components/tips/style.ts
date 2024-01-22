import styled from "styled-components";

export const TipsStyle = styled.div `
    padding: 10px 10px;
    width: calc(300px - 20px);
    height: auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: #222222;
    border-radius: 15px;
    border: 1px solid #464646;

    z-index: 1000;

    animation: tipAnimation .5s forwards;

    @keyframes tipAnimation {
        from {
            opacity: 0;
            transform: translateY(300px);
        }
    }

    &.remove-tip {
        animation: removeTip .5s forwards;
    }

    @media screen and (max-width: 600px) {
        position: relative;
        bottom: none !important;
        right: none !important;
    }

    @keyframes removeTip {
        from {
            opacity: 1;
            transform: translateY(0px);
        }

        to {
            opacity: 0;
            transform: translate(300px);
        }
    }

    .image_tip {
        width: 100%;
        height: 150px;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
            border-radius: 10px;
        }

    }

    h3 {
        font-size: 16px;
        font-weight: 500;
        color: white;
    }

    p {
        max-width: 90%;
        color: #5C5C5C;
        font-weight: 400;
        font-size: 14px;

        line-height: 1.5rem;

        span {
            padding: 5px 5px;

            font-size: 10px;

            color: white;

            background-color: #2B2B2B;
            border-radius: 5px;
            border: 1px solid #383838;
        }
    }

    .buttons {
        padding-top: 16px;
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        button {
            padding: 10px 30px;
            border-radius: 10px;

            font-size: 12px;
            
            background-color: #242424;
            border: 1px solid #383838;

            color: white;
            cursor: pointer;
        }

        .next {
            background-color: #2B2B2B;
        }

    }

    @media screen and (min-width: 541px) {
        position: fixed;
        right: 20px;
        bottom: 20px;
    }

`;