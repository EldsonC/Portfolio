import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        outline: none;
        border: none;
        list-style: none;
        text-decoration: none;
    }

    :root {
        --background: #171717;
        --text-destaque-color: #ffffff;
        --text-grey-100: #3D3D3D;
        --text-grey-200: #5C5C5C;

        --button-grey-100: #2B2B2B;
        --button-grey-200: #242424;

        --text-button-100: #424242;

        --card-background: #222222;
        --card-destaque-background: #2B2B2B;

        --card-border: #2E2E2E;
    }

    body, html {
        font-family: "Inter", sans-serif;
        background-color: var(--background);
        overflow-X: hidden;
        overflow-y: scroll;
    }

    ::selection {
        background-color: #d352d3; /* Cor de fundo da seleção */
        color: #fff; /* Cor do texto selecionado */
    }

    /* Para navegadores WebKit (Chrome, Safari) */
    ::-webkit-scrollbar {
        width: 0px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
        background-color: #272727; /* Cor do indicador da barra de rolagem */
        border-radius: 6px; /* Raio de borda do indicador */
    }

    /* Para navegadores Firefox */
    ::-moz-scrollbar {
        width: 12px; /* Largura da barra de rolagem */
    }

    ::-moz-scrollbar-thumb {
        background-color: #272727; /* Cor do indicador da barra de rolagem */
        border-radius: 6px; /* Raio de borda do indicador */
    }
`;