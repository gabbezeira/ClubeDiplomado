import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 0.625rem 8rem;
  background-color: #073b59;

  z-index: 21;

  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    padding: 1.875rem 1rem;
    display: flex;

    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: "Nunito", sans-serif;

  .invi {
    display: none;
  }

  .list {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: auto;

    li {
      font-size: 1.2rem;
      font-weight: 400;
      list-style: none;

      &:not(:last-child) {
        margin-right: 1.5625rem !important;
      }

      a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    .btn-subscribe {
      color: #fff;
      font-size: 1.0625rem;
      font-weight: 500;

      display: flex;

      align-items: center;
      justify-content: center;

      width: 7.5rem;
      height: 2.625rem;
      border-radius: 0.25rem;
      text-align: center;

      background-color: ${({ theme }) => theme.colors.primary};
      border: none;

      cursor: pointer;
      transition: 1s all;

      &:hover {
        background-color: #fe5000d5;
      }
    }
  }

  button.menu {
    border: 0;
    background-color: transparent;

    font-size: 2rem;
    color: white;

    display: none;
  }

  @media (max-width: 768px) {
    .invi {
      background-color: #073b59;
      display: flex;

      width: 100%;

      height: 100px;
    }
    .list {
      background-color: #073b59;

      height: auto;

      position: absolute;

      top: 0;
      left: 0;

      z-index: 20;

      transition: all 0.6s;

      margin-top: ${({ toggleMenu }) => (toggleMenu ? 100 : -200)}px;

      display: flex;
      flex-direction: column;

      width: 100%;

      gap: 20px;

      padding-bottom: 20px;

      li {
        width: 100%;

        margin-right: 0;
      }

      li > a {
        width: 100%;

        display: flex;

        justify-content: center;
        align-items: center;
      }
    }
    button.menu,
    img,
    .invi {
      display: flex;
      z-index: 21;
    }
  }
`;
