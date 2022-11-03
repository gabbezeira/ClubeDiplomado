import styled from "styled-components";

export const Container = styled.div`
  background-color:${({theme}) => theme.colors.primary};
  display:flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  padding: 3.75rem 7.9375rem;
  
  .text-solicitar {
    width: 80%;
    float: left;

    font-family: "open sans", sans-serif;
    font-size: 1.75rem;
    color: #fff;
    line-height: 120%;
    font-weight: 600;
    }

    .btn-solicitar {
        width: 208px;
        height: 62px;
        float: right;

        margin-left: auto;
        border-radius: 0.25rem;
        text-align: center;

        background-color: ${({theme}) => theme.colors.button};
        border: none;

        cursor: pointer;
        transition: 1s all;

        &:hover {
            background-color: #034870;
        }

        a {
            padding: 1.25rem 4.5rem;
            font-family: 'Open Sans', sans-serif;
            color: #FFF;
            font-size: 17px;
            font-weight: 600;
        }
    }

@media (max-width: 768px) {
    padding: 3.75rem 2.5rem;
    display: grid;
    text-align: center;
    flex-direction: column;

    .text-solicitar {
        width: 100%;
        float: none;
    }

    .btn-solicitar {
        width: 100%;
        margin-top: 3.125rem;
        float: none;
    }
}
`