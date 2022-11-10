import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }

  .img-container {
    width: 100%;
    max-height: 40.875rem;

    z-index: 1 !important;

    img {
      width: 100%;
    }
  }
`;

export const Image = styled.img``;
