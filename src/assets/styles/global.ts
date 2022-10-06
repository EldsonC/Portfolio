import {createGlobalStyle} from "styled-components"

export default createGlobalStyle `
    * {
        margin: 0px;
        padding: 0px;
    }

    body {
        width: 100%;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif !important;

        background: var(--dark);
    }
    :root {
        --dark: #181818;
        --purple: #8257E6;
        --grey: #E1E1E6;
    }
`;