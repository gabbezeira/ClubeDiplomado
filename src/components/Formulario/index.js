import { Container } from "./styles";

export default function Formulario() {
  return (
    <Container id="formulario">
      <div className="header">
        <h2>Inscreva-se</h2>
        <div className="underline"></div>
      </div>

      <div className="form">
        <div className="row">
          <div className="input ">
            <label>Nome</label>
            <input required placeholder="Digite seu nome completo" aria-label="Nome"/>
          </div>
          <div className="input ">
            <label>Curso</label>
            <select name="courses" id="courses">
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
              aria-label="Email"
            />
          </div>
          <div id="telefone" className="input ">
            <label>Telefone</label>
            <input type="number" placeholder="Digite seu telefone" aria-label="Telefone"/>
          </div>
        </div>
        <div className="row">
          <div className="input ">
            <label>Observações</label>
            <input required style={{ minHeight: 85 }} aria-label="Observações"/>
          </div>
        </div>

        <button>Enviar</button>
      </div>
    </Container>
  );
}
