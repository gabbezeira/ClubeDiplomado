import { BrowserRouter } from "react-router-dom";
import { NavContainer, NavContainerMobile, Content } from "./styles/menu";
import Logo from "./assets/images/logo.webp";
import { HashLink as Link } from "react-router-hash-link";
import { isMobile } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import BurgerIcon from "./assets/images/burger-menu-icon.png";
import {
  Vantagens, 
  Conveniados, 
  Solicitar, 
  Formulario, 
  Footer, 
  PoliticaPrivacidade,
  Slider, 
} from "./components";
import { Card } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {!isMobile ? (
          <NavContainer>
            <Content>
              <Link to="#slider" smooth>
                <img className="logo" src={Logo} alt="Logo Clube Diplomado" />
              </Link>
              <ul className="list">
                <li>
                  <Link to="#vantagens" smooth>
                    Vantagens
                  </Link>
                </li>
                <li>
                  <Link to="#conveniados" smooth>
                    Conveniados
                  </Link>
                </li>
                <Link to="#formulario" className="btn-subscribe" smooth>
                  Inscreva-se
                </Link>
              </ul>
            </Content>
          </NavContainer>
        ) : (
          <NavContainerMobile>
            <Link to="#slider" smooth>
              <img className="logo" src={Logo} alt="Logo Clube Diplomado" />
            </Link>
            <div id="outer-container">
              <Menu
                customBurgerIcon={
                  <img src={BurgerIcon} alt="Menu para dispositivos mobile" />
                }
              >
                <Link to="#vantagens" smooth>
                  Vantagens
                </Link>
                <Link to="#conveniados" smooth>
                  Conveniados
                </Link>
                <Link to="#formulario" className="btn-subscribe" smooth>
                  Inscreva-se
                </Link>
              </Menu>
            </div>
          </NavContainerMobile>
        )}
        <Slider />
        <Vantagens />
        <Card />
        <Conveniados />
        <Solicitar />
        <Formulario />
        <Footer />
        <PoliticaPrivacidade saveCookiesOneDay />
      </div>
    </BrowserRouter>
  );
}

export default App;
