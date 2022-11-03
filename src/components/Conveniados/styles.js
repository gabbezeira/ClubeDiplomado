import styled from 'styled-components';

export const Container = styled.div`
  background-color:${({theme}) => theme.colors.background};
  display:flex;
  flex-direction: column;
  align-items: center;

  padding: 3.75rem 8rem;

  @media (max-width: 768px) {
    padding: 3.75rem 2.5rem;    

    .table #hide{
        display:none;

      
      
    }

    .td{        
        width:100%;
    }

  }

  .overflow{
    height:21.875rem;
    width: 100%;
    overflow:auto; 

    ::-webkit-scrollbar-track {
    background-color: rgba(254, 80, 0,.05);
    border-radius: 0.625rem;
}
::-webkit-scrollbar {
    width: 1rem;
    background: rgba(254, 80, 0,.05);
}
::-webkit-scrollbar-thumb {
    background: #FE5000;
    border-radius: 0.625rem;
}
  }

  .table{
    display: flex;
    flex-direction: column;
    width:100%;
    font-family: "open sans", sans-serif;
    font-size: 1rem;

    .tr{
        display: flex;
        color: ${({theme}) => theme.colors.textLight};
    }
   

    .td{
        display:flex;
        align-items:center;
        justify-content:center;
        flex:1;
        padding: 1rem;

        border: 0.0625rem solid rgba(199, 199, 199, 0.4);

        b{
            color:rgba(7, 59, 89, 0.8);
        }

        button{
            padding: 0.5625rem 1.5rem;
            background-color:${({theme}) => theme.colors.button};
            border-radius: 0.25rem;
            border:none;
            color:white;
            font-family: "open sans", sans-serif;
            transition: all 1s;

            cursor: pointer;

            &:hover {
                background-color: #034870;
            }
        }
    }
    
  }

  .header{

    font-size: 1.875rem;
    font-family: "nunito", sans-serif;
    font-weight: bold;
    color: #404040;

    margin-bottom: 3.5rem;

    .underline {
        background-color: ${({theme}) => theme.colors.primary};
        height: 0.1875rem;
        width: 8rem;
        margin:0 auto;
  }
  }

.input{
    background: #fff;
    width: 100%;
    height:3.375rem;
    padding:1rem 1.5rem;
    margin-bottom: 1.5625rem;

    display:flex;

    border: 0.0625rem solid rgba(199, 199, 199, 0.4);
    border-radius: 0.25rem;

    img{
        margin-right: 1.25rem;
    }

    input{
        flex:1;
        font-family: "open sans", sans-serif;
        font-size: 1rem;

        border:0;
        outline:none;

        ::placeholder {
        color: #c7c7c7;
        }
    }
}  

 


`;
