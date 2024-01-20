import styled from "styled-components";

export const SideBarStyle = styled.div`
  width: auto;
  max-width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  z-index: 1000;

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
      flex: 1;
      flex-direction: column;
      gap: 1rem;

      overflow-y: scroll;
      position: relative;

      .header {
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;

        position: sticky;
        top: 0px;

        background-color: #000000;

        p {
          color: #d1d1d1;
          font-size: 14px;
          font-weight: 500;
        }

      }

      .head_label {
        margin-top: 16px;
        padding-left: 10px;
        color: #646464;
        font-size: 12px;
        font-weight: 700;
      }

      .container_skills {
        display: flex;
        flex-direction: column;

        .skill {
          padding: 0 10px;
          width: calc(100% - 20px);
          height: 40px;
  
          display: flex;
          justify-content: space-between;
          align-items: center;
  
          background-color: transparent;
          border-radius: 10px;
  
          cursor: pointer;
  
          p {
            color: white;
            font-size: 14px;
            font-weight: 500;
          }
  
          span {
            display: none;
          }
  
          &:hover {
            background-color: #202123;
  
            span {
              display: flex;
            }
          }
        }
      }

    }

    .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .pet {
        width: 100%;
        display: flex;
        justify-content: center;


        img {
          width: 150px;
        }
      }

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

        &::before {
          content: "Press (])";
          display: flex;

          height: 20px;
          font-size: 10px;
          color: grey;
        }
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
