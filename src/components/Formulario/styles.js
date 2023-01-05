import styled from "styled-components";
import {
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";

export const DialogOverlay = styled(Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

export const DialogContent = styled(Content)`
  height: auto;
  min-width: 300px;
  background: white;
  padding: 1.875rem;
  border: 0.0625rem solid rgba(199, 199, 199, 0.3) !important;
  border-radius: 0.25rem;
`;

export const DialogTitle = styled(Title)`
  font-family: "open sans", sans-serif;
  font-size: 1.875rem;
  margin-bottom: 0.75rem;
  color: #2c3131;
  font-weight: bold;
`;

export const DialogDescription = styled(Description)`
  font-family: "open sans", sans-serif;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const DialogClose = styled(Close)`
  background-color: ${({ theme }) => theme.colors.button};
  padding: 1rem 0;
  height: auto;
  width: 7.5rem;
  margin: 0 auto;
  border: none;
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  float: right;
  color: #fff;

  transition: 0.8s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 600px;
  padding: 3.75rem 8rem;

  .header {
    font-size: 1.875rem;
    font-family: "nunito", sans-serif;
    font-weight: bold;
    color: #404040;
    margin: 3.5rem 0;

    .underline {
      background-color: ${({ theme }) => theme.colors.primary};
      height: 0.1875rem;
      width: 8rem;
      margin: 0 auto;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    font-family: "open sans", sans-serif;

    width: 100%;

    button {
      background-color: ${({ theme }) => theme.colors.button};
      font-family: "open sans", sans-serif;
      font-size: 1.25rem;
      color: white;
      padding: 1rem 0;
      width: 7.5rem;
      margin: 0 auto;
      border: none;
      border-radius: 0.25rem;
      transition: 0.8s all;

      &:hover {
        background-color: ${({ theme }) => theme.colors.button};
        opacity: 0.8;
      }
    }

    .row {
      display: flex;
      gap: 2.5rem;

      width: 100%;

      margin-bottom: 1.5625rem;

      label {
        font-size: 1rem;
        color: #2c3131;
        font-weight: bold;
      }

      .input {
        flex: 1;

        .text-area {
          min-height: 6.5rem;
        }
      }

      input,
      select {
        height: 3.5rem;
        width: 100%;

        padding: 1rem;
        margin-top: 0.5rem;

        border: 1px solid rgba(199, 199, 199, 0.4) !important;
        outline: none;
        outline-offset: -0.0625rem;

        background-color: rgba(199, 199, 199, 0.04);

        font-family: "open sans", sans-serif;
        font-size: 1rem;

        ::placeholder {
          color: #a9a9a9;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3.75rem 2.5rem;

    .row {
      flex-direction: column;
    }
  }
`;
