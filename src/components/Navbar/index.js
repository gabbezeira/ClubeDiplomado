import { NavContainer, Content} from './styles';
import Logo from '../../assets/images/logo.webp';

export default function Navbar(){
    return (
        <NavContainer>
            <Content>
                <img class="logo" src={Logo} alt="Logo Clube Diplomado" />
                <ul class="list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Vantagens</a></li>
                    <li><a href="/">Conveniados</a></li>
                    <button class="btn-subscribe">Inscreva-se</button>
                </ul>
            </Content>     
        </NavContainer>
    )
} 