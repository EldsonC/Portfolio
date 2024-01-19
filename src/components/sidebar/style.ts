import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: auto;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  
  
  .container_side {
    padding: 20px 20px;
    width: calc(250px - 40px);
    height: calc(100% - 40px);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    background-color: #000000;
    animation: sideAnimationBar 1s forwards;
    
    .remove-side {
      animation: sideAnimationRemove 1s forwards;
    }
    .top {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .header {
        display: flex;
        align-items: center;
        gap: 10px;

        p {
          color: #d1d1d1;
          font-size: 14px;
          font-weight: 500;
        }

      }
    }

    .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .star {
        display: flex;
        align-items: center;
        gap: 1rem;

        .text {
          display: flex;
          flex-direction: column;
          gap: 0px;

          h4 {
            color: white;
            font-size: 14px;
            font-weight: 600;
          }

          p {
            font-size: 13px;
            color: grey;
            font-weight: 500;
          }
        }
      }

      button {
        width: 100%;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        background-color: var(--button-grey-200);
        border-radius: 5px;
        border: 1px solid var(--card-border);

        p {
          color: white;
          font-size: 14px;
          font-weight: 400;
        }

        cursor: pointer;
      }
    }
  }

  .right_btn {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;

    z-index: 1000;


    .right_btn {
      padding-left: 10px;
      height: 100%;

      display: flex;
      align-items: center;

      button {
        padding-left: 10px;
        rotate: 180deg;
        background-color: transparent;
        cursor: pointer;
      }

      .tag_sidebar {
        padding: 10px 10px;
        background-color: black;
        color: white;
        font-size: 14px;
        font-weight: 500;

        border-radius: 10px;
      }

      .tag_sidebar-hide {
        display: none;
      }

    }
  }

  @keyframes sideAnimationBar {
      from {
        transform: translateX(-320px);
      } 
  }

  @keyframes sideAnimationRemove {
    from {
        width: 250px;
    }

    to {
        width: 30px;
    }

  }
`;
