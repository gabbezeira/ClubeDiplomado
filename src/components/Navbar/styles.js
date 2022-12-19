import styled from "styled-components";

export const NavContainer = styled.div`
width: 100%;
height: auto;
padding: 0.625rem 8rem;
background-color: #073B59; 

@media (max-width: 768px) {
    padding: 1.875rem 1rem;
}
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

@media (max-width: 768px) {
    .list {
        display: none;
    }
}
`