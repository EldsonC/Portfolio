import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  
  .container_side {
    width: 320px;
    height: 100%;
    
    background-color: #000000;
    animation: sideAnimationBar 1s forwards;
  }

  .right_btn {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;


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
    }
  }

  @keyframes sideAnimationBar {
      from {
        transform: translateX(-320px);
      } 
  }
`;
