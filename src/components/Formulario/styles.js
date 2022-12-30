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

  .form {
    display: flex;
    flex-direction: column;

    font-family: "open sans", sans-serif;

    width: 100%;

    button {
      background-color: ${({ theme }) => theme.colors.button};

      font-family: "open sans", sans-serif;
<<<<<<< HEAD
      font-size: 20px;
      color: white;

      padding: 16px 0;

      width: 120px;
=======
      font-size: 1.25rem;
      color: white;

      padding: 1rem 0;

      width: 7.5rem;
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368

      margin: 0 auto;

      border: none;
<<<<<<< HEAD
      border-radius: 4px;
=======
      border-radius: 0.25rem;
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368
    }

    .row {
      display: flex;
<<<<<<< HEAD
      gap: 40px;

      width: 100%;

      margin-bottom: 25px;
=======
      gap: 2.5rem;

      width: 100%;

      margin-bottom: 1.5625rem;
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368

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
<<<<<<< HEAD
        height: 56px;
        width: 100%;

        padding: 16px;
        margin-top: 8px;

        border: 1px solid rgba(199, 199, 199, 0.4) !important;
        outline: none;
        outline-offset: -1px;
=======
        height: 3.5rem;
        width: 100%;

        padding: 1rem;
        margin-top: 0.5rem;

        border: 1px solid rgba(199, 199, 199, 0.4) !important;
        outline: none;
        outline-offset: -0.0625rem;
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368

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
