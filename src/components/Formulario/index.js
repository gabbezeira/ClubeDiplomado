import { Container } from "./styles";
import InputMask from "react-input-mask";

export default function Formulario() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container id="inscrever">
      <div className="header">
        <h2>Inscreva-se</h2>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input ">
            <label>Nome</label>
            <input required placeholder="Digite seu nome completo" />
          </div>
          <div className="input ">
            <label>Curso</label>
            <select name="cars" id="cars">
              <option value="0">Selecione o curso concluído</option>
              <option value="saab">Curso 1</option>
              <option value="opel">Curso 2</option>
              <option value="audi">Curso 3</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input ">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Digite seu email principal"
            />
          </div>
          <div id="telefone" className="input ">
            <label>Telefone</label>
            <InputMask
              mask="(99)99999-9999"
              placeholder="Digite seu telefone"
            />
          </div>
        </div>
        <div className="row">
          <div className="input ">
            <label>Observações</label>
            <input required style={{ minHeight: 85 }} />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
