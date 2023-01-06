import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background2};
  width: 100%;

  padding: 3.75rem 8rem;

  @media (max-width: 48rem) {
    padding: 3.75rem 2.5rem;
  }

  justify-content: center;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3.125rem;
`;

export const CardItem = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "open sans", sans-serif;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 140%;

  height: 170px;

  border-radius: 0.9375rem;

  text-align: center;
  align-items: center;

  img {
    width: 2.5625rem;
  }

  .header {
    border-top-left-radius: 0.9375rem;
    border-top-right-radius: 0.9375rem;

    height: 0.9375rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0 1.6875rem 1.375rem 1.6875rem;
  }
`;
