import styled from "styled-components";

export const NotifyStyle = styled.div`
    padding: 0 10px;
    width: calc(300px - 20px);
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 10px;
    background-color: var(--card-background);
    border: 1px solid var(--card-border);

    animation: notifyAnimation .5s;

    &.remove-notify {
        animation: removeNotifyAnimation .5s forwards;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.75rem;


        img {
            width: 40px;
        }

        .message {
            display: flex;
            flex-direction: column;
            gap: 2px;

            h4 {
                font-size: 14px;
                font-weight: 600;
                color: white;
            }

            p {
                font-size: 12px;
                color: white;
            }
        }
    }

    @keyframes notifyAnimation {
        from {
            opacity: 0;
            transform: translateX(300px);
        }

        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    @keyframes removeNotifyAnimation {
        from {
            transform: translateX(0px);
            opacity: 1;
        }

        to {
            opacity: 0;
            transform: translateX(300px);
        }
    }
`;