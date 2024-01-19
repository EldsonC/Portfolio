import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: auto;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  
  .container_side {
    width: 250px;
    height: 100%;
    
    background-color: #000000;
    animation: sideAnimationBar 1s forwards;
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
`;
