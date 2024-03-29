import styled from "styled-components";
import { Title, Close } from "@radix-ui/react-dialog";

export const DialogFooter = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DialogClose = styled(Close)`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 1rem 0;
  height: auto;
  width: 7.5rem;
  margin: 0;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  outline: none;
  text-align: center;
  transition: 0.8s all;
  font-family: "opens sans", sans-serif;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
    opacity: 0.9;
  }
`;

export const DialogTitleMobile = styled(Title)`
  font-family: "open sans", sans-serif;
  font-size: 1.875rem;
  margin-bottom: 2.5rem;
  color: #2c3131;
  font-weight: bold;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.75rem 8rem;

  .none-search {
    font-size: 1.575rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    color: #a9a9a9;
  }

  @media (max-width: 768px) {
    padding: 3.75rem 2.5rem;

    .table #hide {
      display: none;
    }

    .td {
      width: 100%;
    }
  }

  .overflow {
    height: 21.875rem;
    width: 100%;
    overflow: auto;

    ::-webkit-scrollbar-track {
      background-color: rgba(254, 80, 0, 0.05);
      border-radius: 0.625rem;
    }
    ::-webkit-scrollbar {
      width: 1rem;
      background: rgba(254, 80, 0, 0.05);
    }
    ::-webkit-scrollbar-thumb {
      background: #fe5000;
      border-radius: 0.625rem;
    }
  }

  .table {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: "open sans", sans-serif;
    font-size: 1rem;

    .tr {
      display: flex;
      color: ${({ theme }) => theme.colors.textLight};

      .td {
        display: flex;
        align-items: center;
        justify-content: left;
        flex: 1;
        padding: 1rem;
        text-align: left;
        border: 0.0625rem solid rgba(199, 199, 199, 0.4);

        .b-categoria {
          margin-left: 0.575rem;
        }

        b {
          color: rgba(7, 59, 89, 0.8);
        }

        button {
          width: 7.5rem;
          height: 3.125rem;
          padding: 0.5625rem 1.5rem;
          background-color: ${({ theme }) => theme.colors.button};
          border-radius: 0.25rem;
          border: none;
          color: white;
          font-family: "open sans", sans-serif;
          transition: all 1s;
          margin-left: 0.875rem;

          cursor: pointer;

          &:hover {
            background-color: #034870;
          }
        }
      }
    }
  }

  .header {
    font-size: 1.875rem;
    font-family: "nunito", sans-serif;
    font-weight: bold;
    color: #404040;
    margin-bottom: 3.5rem;

    .underline {
      background-color: ${({ theme }) => theme.colors.primary};
      height: 0.1875rem;
      width: 8rem;
      margin: 0 auto;
    }
  }

  .input {
    background: #fff;
    width: 100%;
    height: 3.375rem;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5625rem;

    display: flex;

    border: 0.0625rem solid rgba(199, 199, 199, 0.4);
    border-radius: 0.25rem;

    img {
      margin-right: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
    }

    input {
      flex: 1;
      font-family: "open sans", sans-serif;
      font-size: 1rem;

      border: 0;
      outline: none;

      ::placeholder {
        color: #c7c7c7;
      }
    }
  }

  .footerTable {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;

    p {
      font-family: "Open sans", sans-serif;
      font-size: 0.9375rem;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.6;
      text-decoration: none;
      transition: all 0.6s;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
`;
