import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background2};
  width: 100%;

  padding: 60px 127px;

  @media (max-width: 768px) {
    padding: 60px 40px;    
}

  justify-content:center;


    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 50PX;
`;

export const CardItem = styled.div`
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  font-family: "open sans", sans-serif;
  font-weight: normal;
  color: ${({theme}) => theme.colors.textLight};
  line-height: 140%;

  height:170px;

  border-radius: 15px;

  text-align: center;
  align-items: center;

  img{
    width:41px;
  }

  .header{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    height: 15px;
    width:100%;
    background-color: ${({theme}) => theme.colors.primary};
  }

  p{
    margin: 0 27px 22px 27px;
  }
`;
