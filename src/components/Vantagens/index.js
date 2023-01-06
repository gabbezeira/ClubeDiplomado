import { Container } from "../../styles/global";
import Armchair from "../../assets/images/armchair.webp";
import { HashLink as Link } from "react-router-hash-link";
import { Content } from "./styles";

export function Vantagens() {
  return (
    <Container id="vantagens">
      <Content>
        <div className="left">
          <img
            className="logo"
            src={Armchair}
            alt="Poltrona com cartão do clube Diplomado"
          />
        </div>
        <div className="right">
          <div className="content-right">
            <h1>Vantagens</h1>
            <div className="underline" />
            <p className="text-right">
              Aluno do Unipam é mesmo muito especial. Mas e o que acontece
              quando ele se forma e segue uma carreira? Continua mais especial
              ainda, é claro.
              <br></br>
              <br></br>
              Por isso, criamos o CLUBE DIPLOMADO UNIPAM. Se você se formou na
              instituição, já faz parte dele e pode retirar o seu cartão
              especial de descontos. Com ele, você tem direito a inúmeras
              <br></br>vantagens. E aí? Isso é ou não é ser especial.
            </p>
            <button className="btn-vantagens">
              <Link className="btn-solicitar" to="#formulario" smooth>
                Solicitar
              </Link>
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
