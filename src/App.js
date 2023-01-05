import { BrowserRouter } from "react-router-dom";
import { NavContainer, NavContainerMobile, Content } from "./styles/menu";
import Logo from "./assets/images/logo.webp";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "./components/Slider";
import Card from "./components/Card";
import Vantagens from "./components/Vantagens";
import Conveniados from "./components/Conveniados";
import Solicitar from "./components/Solicitar";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import { isMobile } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import BurgerIcon from "./assets/images/burguer-menu-icon.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {!isMobile ? (
          <NavContainer>
            <Content>
              <Link className="logo" to="#slider" smooth>
                <img src={Logo} alt="Logo Clube Diplomado" />
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
            <Link className="logo" to="#slider" smooth>
              <img src={Logo} alt="Logo Clube Diplomado" />
            </Link>
            <div id="outer-container">
              <Menu
                customBurgerIcon={
                  <img
                    className="menu-burguer"
                    src={BurgerIcon}
                    alt="Menu para dispositivos mobile"
                  />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
