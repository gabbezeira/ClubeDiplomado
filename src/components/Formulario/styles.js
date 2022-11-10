import styled from "styled-components";

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

    margin-bottom: 3.5rem;

    .underline {
      background-color: ${({ theme }) => theme.colors.primary};
      height: 0.1875rem;
      width: 8rem;
      margin: 0 auto;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    font-family: "open sans", sans-serif;

    width: 100%;

    button {
      background-color: ${({ theme }) => theme.colors.button};

      font-family: "open sans", sans-serif;
      font-size: 20px;
      color: white;

      padding: 16px 0;

      width: 120px;

      margin: 0 auto;

      border: none;
      border-radius: 4px;
    }

    .row {
      display: flex;
      gap: 40px;

      width: 100%;

      margin-bottom: 25px;

      label {
        font-size: 1rem;
        color: #2c3131;
        font-weight: bold;
      }

      .input {
        flex: 1;
      }

      input,
      select {
        height: 56px;
        width: 100%;

        padding: 16px;
        margin-top: 8px;

        border: 1px solid rgba(199, 199, 199, 0.4) !important;
        outline: none;
        outline-offset: -1px;

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
