import { useState, useEffect } from "react";
import { buscaCursos } from "../../services/requests/cursos";
import { inscreverAluno } from "../../services/requests/inscricoes";
import InputMask from "react-input-mask";
import {
  Container,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

export function Formulario() {
  const [cursos, setCursos] = useState([]);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [confirmacaoCadastro, setConfirmacaoCadastro] = useState(false);

  const [aluno, setAluno] = useState({
    Nome: "",
    Email: "",
    Curso: "",
    Telefone: "",
    Observacoes: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const inscrever = async (event) => {
    event.preventDefault();
    const response = await inscreverAluno(aluno);

    if (response.StatusCode === 200) {
      setDialogTitle("Solicitação efetuada com sucesso!");
      setDialogDescription(
        "Obrigado! Seus dados foram enviados com sucesso! Em breve, entraremos em contato."
      );
      setConfirmacaoCadastro(true);
    } else {
      setDialogTitle("Ops... Houve uma falha ao tentar enviar a solicitação");
      setDialogDescription("Tente novamente mais tarde");
    }
    setAluno({
      Nome: "",
      Email: "",
      Curso: "",
      Telefone: "",
      Observacoes: "",
    });
    event.target.reset();
  };

  useEffect(() => {
    const carregaCursos = async () => {
      const resultado = await buscaCursos();
      setCursos(resultado);
    };
    carregaCursos();
  }, []);

  return (
    <Container id="formulario">
      <div className="header">
        <h2>Inscreva-se</h2>
        <div className="underline"></div>
      </div>

      <form className="form" onSubmit={inscrever}>
        <div className="row">
          <div className="input ">
            <label>Nome</label>
            <input
              placeholder="Digite seu nome completo"
              aria-label="Nome"
              name="Nome"
              value={aluno.Nome}
              onChange={inputsHandler}
              required
            />
          </div>
          <div className="input ">
            <label>Curso</label>

            <select
              name="Curso"
              id="courses"
              value={aluno.Curso}
              onChange={inputsHandler}
              required
            >
              <option value="">Selecione o curso concluído</option>
              {cursos.map((item) => (
                <option key={item.IdCurso} value={item.Nome}>
                  {item.Nome}
                </option>
              ))}
            </select>
          </div>
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
            <InputMask
              mask="(99) 99999 9999"
              name="Telefone"
              placeholder="Digite seu telefone"
              aria-label="Telefone"
              value={aluno.Telefone}
              onChange={inputsHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="input">
            <label>Observações</label>
            <input
              name="Observacoes"
              className="text-area"
              aria-label="Observações"
              value={aluno.Observacoes}
              onChange={inputsHandler}
            />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
      <Dialog.Root
        open={confirmacaoCadastro}
        onOpenChange={setConfirmacaoCadastro}
      >
        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
              <DialogClose>Fechar</DialogClose>
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  );
}
