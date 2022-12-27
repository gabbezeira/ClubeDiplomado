import { BrowserRouter } from 'react-router-dom'
import { NavContainer, Content} from './styles/menu';
import Logo from './assets/images/logo.webp';
import { HashLink as Link } from 'react-router-hash-link';
import Slider from "./components/Slider";
import Card from "./components/Card";
import Vantagens from "./components/Vantagens";
import Conveniados from "./components/Conveniados";
import Solicitar from "./components/Solicitar";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavContainer>
            <Content>
                <img class="logo" src={Logo} alt="Logo Clube Diplomado" />
                <ul class="list">
                  <li><Link to='#vantagens' smooth>Vantagens</Link></li> 
                  <li><Link to='#conveniados' smooth>Conveniados</Link></li>
                  <Link to='#formulario' class="btn-subscribe" smooth>Inscreva-se</Link>
                </ul>
            </Content>     
        </NavContainer>
        <Slider />
        <Vantagens />
        <Card />
        <Conveniados />
        <Solicitar />
        <Formulario />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
