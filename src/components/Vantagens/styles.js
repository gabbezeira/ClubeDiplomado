import styled from 'styled-components';

export const Content = styled.div`
width: 100%;
height: 100%;

display: flex;
justify-content: space-between;
align-items: center;

font-family: 'Nunito', sans-serif;

.left {
    width: auto;
    height: 100%;
    float: left;

    img {
        width: auto;
        height: 100%;
        max-height: 100%;
        overflow: contain;
    }
}

.right {
    width: 55%;
    height: 100%;
    float: right;

    display: flex;
    align-items: center;

    .content-right {
        width: 100%;
        height: auto;

        h1 {
            font-size: 2.75rem;
            font-weight: bold;
            color: #404040;
        }

        .underline {
            width: 8rem;
            height: 0.1875rem;
            background-color: ${({theme}) => theme.colors.primary};
        }

        .text-right {
            width: 100%;
            height: 100%;

            max-height: 100%;
            overflow: contain;

            font-family: 'Open Sans', sans-serif;
            font-size: 1.25rem;
            color: ${({theme}) => theme.colors.textLight};
            line-height: 140%;

            margin: 3.5rem 0;
        }

        .btn-vantagens {
            width: 208px;
            height: 62px;
            border-radius: 0.25rem;
            text-align: center;

            
            background-color: ${({theme}) => theme.colors.primary};
            border: none;

            cursor: pointer;
            transition: 1s all;

            &:hover {
                background-color: #FE5000D5;
            }

            a {
                padding: 1.25rem 4.5rem;
                font-family: 'Open Sans', sans-serif;
                color: #FFF;
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
}

@media (max-width: 768px) {
    .left {
        display: none;
    }

    .right {
        width: 100%;
        height: auto;
        overflow: contain;
        float: none;

        .content-right {
            display: flex;
            align-items: center;
            flex-direction: column;
            overflow: contain;
            text-align: center;

            .text-right {
                margin: 3.125rem 0;
            }
        }
    }
}
`