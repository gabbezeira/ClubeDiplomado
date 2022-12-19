import styled from 'styled-components';

export const Container = styled.div`
.mySwiper {
  width: 100%;
  height: 40.875rem;
}

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
`


