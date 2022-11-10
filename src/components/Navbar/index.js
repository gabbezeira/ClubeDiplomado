import { useState } from "react";
import { NavContainer, Content } from "./styles";
import Logo from "../../assets/images/logo.webp";

import { SlMenu } from "react-icons/sl";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <NavContainer>
      <Content toggleMenu={toggleMenu}>
        <img class="logo" src={Logo} alt="Logo Clube Diplomado" />
        <div className="invi"></div>
        <ul class="list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#vantagens">Vantagens</a>
          </li>
          <li>
            <a href="#conveniados">Conveniados</a>
          </li>
          <a href="#inscrever" class="btn-subscribe">
            Inscreva-se
          </a>
        </ul>
        <button
          onClick={() => setToggleMenu((state) => !state)}
          className="menu"
        >
          <SlMenu />
        </button>
      </Content>
    </NavContainer>
  );
}
