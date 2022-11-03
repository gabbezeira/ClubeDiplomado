import { Container,CardItem } from "./styles";
import heartIcon from '../../assets/images/Icons/heart.svg';
import lightIcon from '../../assets/images/Icons/lightning.svg';
import shopIcon from '../../assets/images/Icons/shopping.svg';

export default function card() {
    return ( 
        <Container>
            <CardItem>
                <div className="header"/>
                <img src={heartIcon} alt="Ícone de Coração"/> 
                <p>Descontos com profissionais da saúde e de alimentação.</p>
            </CardItem>
            <CardItem>
                <div className="header"/>
                <img src={lightIcon} alt="ícone de Raio"/> 
                <p>Descontos em academias e em lojas esportivas.</p>
            </CardItem>
            <CardItem>
                <div className="header"/>
                <img src={shopIcon} alt="ícone de Carrinho de Compras"/> 
                <p>Descontos em restaurantes, supermercados e farmácias.</p>
            </CardItem>
           
        </Container>
     );
}
