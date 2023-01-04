import { Container } from "./styles";
import { HashLink as Link } from "react-router-hash-link";

export default function Solicitar() {
  return (
    <Container>
      <div className="text-solicitar">
        Para fazer parte deste clube é fácil, basta fazer a sua solicitação e
        começar a aproveitar as vantagens!
      </div>
      <button className="btn-solicitar">
        <Link className="btn-solicitar" to="#formulario" smooth>
          Solicitar
        </Link>
      </button>
    </Container>
  );
}
