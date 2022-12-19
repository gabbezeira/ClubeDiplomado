import { Container } from './styles';
import LogoFooter from '../../assets/images/logofooter.png';

export default function Footer() {
    return (
        <Container>
            <div className="logoFooter">
                <img src={LogoFooter} alt="Logo Unipam" />
            </div>
            <div className="copyright">
            UNIPAM - Copyright © 2022
            </div>
        </Container>
    )
}