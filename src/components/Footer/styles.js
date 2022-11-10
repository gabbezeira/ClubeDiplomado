import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.button};
  display: flex;
  width: 100%;
  height: 6.375rem;
  padding: 3.75rem 8rem;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    justify-content: center;
    gap: 10px;
  }

  .copyright {
    float: right;
    font-family: "open sans", sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    color: #fff;
  }
`;
