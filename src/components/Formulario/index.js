import { useState, useEffect } from "react";
import { buscaCursos } from "../../services/requests/cursos";
import { inscreverAluno } from "../../services/requests/inscricoes";
import { Container } from "./styles";

export default function Formulario() {

  const [cursos, setCursos] = useState([]);
  const [msg, setMsg] = useState('');

  const [aluno, setAluno] = useState({
    Nome: '',
    Email: '',
    Curso: '',
    Telefone: '',
    Observacoes: '',
  });

  const inputsHandler = (e) =>{
    const {name, value} = e.target;
    setAluno( {...aluno, [name]: value} )
}

  const inscrever = async (event) => {

    event.preventDefault();
    const response = await inscreverAluno(aluno);
    setMsg(response?.Result);
      setTimeout(() => {
        setMsg('')
      }, 2000);
  }

  useEffect(() => {
    const carregaCursos = async () => {
      const resultado = await buscaCursos();
      setCursos(resultado);
    };
    carregaCursos();
  }, []);


  return (
    <Container id="formulario" >
      <div className="header" style={{ marginTop: '5rem' }}>
        <h2>Inscreva-se</h2>
        <div className="underline"></div>
      </div>

      <form className="form" onSubmit={inscrever}>
        <div className="row">
          <div className="input ">
            <label>Nome</label>
            <input placeholder="Digite seu nome completo" 
                aria-label="Nome"
                name="Nome"
                value={aluno.Nome}
                onChange={inputsHandler}
                required />
          </div>
          <div className="input ">
            <label>Curso</label>

            <select 
                name="Curso" 
                id="courses"  
                required>
              <option value="">Selecione o curso concluído</option>
              {cursos.map((item) => 
                <option key={item.IdCurso} value={item.Nome}>{item.Nome}</option>
              )}
            </select>
          </div>
          {msg !== '' && msg}
        </div>

        <div className="row">
          <div className="input ">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Digite seu email principal"
              aria-label="Email"
              value={aluno.Email}
              onChange={inputsHandler}
              required
            />
          </div>
          <div id="telefone" className="input ">
            <label>Telefone</label>
            <input 
              type="number"
              name="Telefone"
              placeholder="Digite seu telefone" 
              aria-label="Telefone"
              value={aluno.Telefone}
              onChange={inputsHandler} 
              required/>
          </div>
        </div>
        <div className="row">
          <div className="input ">
            <label>Observações</label>
            <input  
              name="Observacoes"
              style={{ minHeight: 85 }} 
              aria-label="Observações"
              value={aluno.Observacoes}
              onChange={inputsHandler} />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
