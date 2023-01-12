import { useState } from "react";
import { inscreverParceiro } from "../../services/requests/inscricoes";
import {
  Container,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogCloseX,
} from "./styles";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";

export function FormularioParceiro() {
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [confirmacaoCadastro, setConfirmacaoCadastro] = useState(false);

  const [parceiro, setParceiro] = useState({
    Nome: "",
    Email: "",
    CNPJ: "",
    Telefone: "",
    Observacoes: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setParceiro({ ...parceiro, [name]: value });
  };

  const inscrever = async (event) => {
    event.preventDefault();
    const response = await inscreverParceiro(parceiro);

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
    setParceiro({
      Nome: "",
      Email: "",
      CNPJ: "",
      Telefone: "",
      Observacoes: "",
    });
    event.target.reset();
  };

  return (
    <Container id="formulario">
      <DialogCloseX asChild>
        <XMarkIcon />
      </DialogCloseX>
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
              value={parceiro.Nome}
              onChange={inputsHandler}
              required
            />
          </div>
          <div className="input ">
            <label>CNPJ</label>
            <input
              placeholder="Digite seu CNPJ"
              aria-label="CNPJ"
              name="CNPJ"
              value={parceiro.CNPJ}
              onChange={inputsHandler}
              required
            />
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
              value={parceiro.Email}
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
              value={parceiro.Telefone}
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
              value={parceiro.Observacoes}
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
          <DialogOverlay style={{ zIndex: 10000 }}>
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
