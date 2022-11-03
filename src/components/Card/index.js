import { Container,CardItem } from "./styles";
import heartIcon from '../../assets/images/Icons/heart.svg';
import lightIcon from '../../assets/images/Icons/lightning.svg';
import shopIcon from '../../assets/images/Icons/supermarket.svg';

export default function card() {
    return ( 
        <Container>
            <CardItem>
                <div className="header"/>
                <img src={heartIcon} /> 
                <p>Descontos com profissionais da saúde e de alimentação.</p>
            </CardItem>
            <CardItem>
                <div className="header"/>
                <img src={lightIcon} /> 
                <p>Descontos em academias e em lojas esportivas.</p>
            </CardItem>
            <CardItem>
                <div className="header"/>
                <img src={shopIcon} /> 
                <p>Descontos em restaurantes, supermercados e farmácias.</p>
            </CardItem>
           
        </Container>
     );
}
