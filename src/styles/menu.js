import styled from "styled-components";

export const NavContainer = styled.div`
top: 0;
position: fixed;
z-index: 100;
width: 100%;
height: auto;
padding: 0.625rem 8rem;
background-color: #073B59;
`
export const NavContainerMobile = styled.div`
top: 0;
position: fixed;
z-index: 100;
width: 100%;
height: auto;
padding: 0.625rem 1rem;
background-color: #073B59;
`

export const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

font-family: 'Nunito', sans-serif;

    .list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    
        width: auto;
            
            li {
                font-size: 1.2rem;
                font-weight: 400;
                list-style: none;
    
                &:not(:last-child){
                    margin-right: 1.5625rem !important;
                }

                a {
                    color: #FFF;
                    text-decoration: none;
                    cursor: pointer;
                    transition: all 0.3s ease;

                    &:hover {
                        opacity: .7;
                    }
                }
            }

            .btn-subscribe {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #FFF;
                font-size: 1.0625rem;
                font-weight: 500;
                width: 7.5rem;
                height: 2.625rem;
                border-radius: 0.25rem;
                text-align: center;
                background-color: ${({theme}) => theme.colors.primary};
                border: none;
                cursor: pointer;
                transition: 1s all;
                &:hover {
                    background-color: #FE5000D5;
                }
            }
    }
`