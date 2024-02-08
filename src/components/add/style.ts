import styled from "styled-components";

export const AddProjectStyle = styled.div `
    padding: 1.75rem 1.5rem;
    min-width: calc(12.75rem - 3rem);
    height: calc(16.5rem - 3.5rem);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border-radius: 0.8125rem;
    border: 1px solid var(--card-border);
    background-color: transparent;

    cursor: pointer;

    p {
        font-size: 14px;
        font-weight: 500;
        color: #3f3f3f;
    }
    
    &:hover {
        border: 1px solid #464646;
    }
`;