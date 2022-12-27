import styled from "styled-components";

export const Container = styled.div`
  background-color:${({theme}) => theme.colors.button};
  display:flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.375rem;
  padding: 3.75rem 8rem;

  .copyright {
    float: right;
    font-family: "open sans", sans-serif;
    font-size: 0.875rem;
    font-weight: bold;
    color: #fff;
  }

`