import styled from "styled-components";

export const CardStyle = styled.div`
    padding: 1.75rem 1.5rem;
    min-width: calc(12.75rem - 3rem);
    height: calc(16.5rem - 3.5rem);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 0.8125rem;
    border: 1px solid var(--card-border);
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
`;
