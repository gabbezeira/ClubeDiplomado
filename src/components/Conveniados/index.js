import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import {
  Container,
  DialogFooter,
  DialogClose,
  DialogTitleMobile,
} from "./styles";
import { buscaParceiros } from "../../services/requests/parceiros";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { isMobile } from "react-device-detect";
import { FormularioParceiro } from "../FormularioParceiro";
import {
  DialogOverlay,
  DialogContent,
  DialogDescription,
} from "../Formulario/styles";
import { DialogContentFormParceiro } from "../FormularioParceiro/styles";
import * as Dialog from "@radix-ui/react-dialog";

export function Conveniados() {
  const [parceiros, setParceiros] = useState([]);
  const [filtroBusca, setFiltroBusca] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsFormOpen, setIsFormOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState("");
  const [modalBenefit, setModalBenefit] = useState([]);
  const [modalAddress, setModalAddress] = useState("");
  const [modalTelefone, setModalTelefone] = useState("");

  function openModal(parceiro) {
    setIsOpen(true);

    setModalTitle(
      parceiro.PessoaJuridica?.NomeFantasia
        ? ajustaNome(parceiro.PessoaJuridica?.NomeFantasia)
        : ajustaNome(parceiro.Nome)
    );
    setModalBenefit(parceiro.Contratos);
    setModalAddress(parceiro.Endereco);
    setModalTelefone(parceiro.Telefones);
  }

  const linkEndereco = (latitude, longitude) => {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  };

  const ajustaNome = (nome) => {
    let lowerName = nome.toLowerCase();

    let capitalizeName = lowerName
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return capitalizeName;
  };

  useEffect(() => {
    const carregaParceiros = async () => {
      const resultado = await buscaParceiros(filtroBusca);
      setParceiros(resultado);
    };
    carregaParceiros();
  }, [filtroBusca]);

  return (
    <Container id="conveniados">
      <div className="header">
        <h2>Conveniados</h2>
        <div className="underline"></div>
      </div>

      <div className="input">
        <img src={SearchSVG} alt="ícone de lupa" />
        <input
          onChange={(e) => setFiltroBusca(e.target.value)}
          placeholder="Procure por um termo específico. Exemplo: “Academia”"
        />
      </div>

      <Dialog.Root open={modalIsFormOpen} onOpenChange={setIsFormOpen}>
        <Dialog.Portal>
          <DialogOverlay style={{ zIndex: 200 }}>
            <DialogContentFormParceiro>
              <FormularioParceiro />
            </DialogContentFormParceiro>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={modalIsOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <DialogOverlay>
            <DialogContent>
              <DialogTitleMobile>{modalTitle}</DialogTitleMobile>
              <DialogDescription>
                {modalBenefit.map((c) => {
                  return (
                    <div key={c.IdContrato}>
                      {c.Observacao && (
                        <p>
                          {c.Observacao} <br />
                          <br />
                        </p>
                      )}
                      {c.Beneficios.map((b) => {
                        return (
                          <p key={b.IdBeneficio}>
                            <b>Benefício: </b>
                            {b.PercDesconto > 0
                              ? b.PercDesconto + "%"
                              : b.ValorDesconto + " reais"}{" "}
                            {b.Observacao}
                            <br />
                            <br />
                            <b className="b-categoria">Categoria:</b>{" "}
                            {b.BeneficioCategoria}
                          </p>
                        );
                      })}
                    </div>
                  );
                })}
              </DialogDescription>
              <DialogDescription>
                {modalAddress.TipoLogradouro +
                  " " +
                  modalAddress?.Logradouro +
                  " " +
                  modalAddress?.Numero +
                  ", " +
                  modalAddress?.Complemento +
                  " " +
                  modalAddress?.Bairro +
                  " " +
                  modalAddress?.Cidade +
                  ", " +
                  modalAddress?.UF}
              </DialogDescription>
              <DialogFooter>
                <div className="mobileModalIcons">
                  <a href={`tel:${modalTelefone[0]?.Numero}`}>
                    <PhoneIcon width={20} height={20} color={"#034870"} />
                  </a>
                  <a
                    href={linkEndereco(
                      modalAddress?.Latitude,
                      modalAddress?.Longitude
                    )}
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    <MapPinIcon width={20} height={20} color={"#034870"} />
                  </a>
                </div>
                <DialogClose>Fechar</DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogOverlay>
        </Dialog.Portal>
      </Dialog.Root>

      {parceiros.length >= 1 ? (
        <div className="overflow">
          <div className="table">
            {parceiros.map((parceiro) =>
              isMobile ? (
                <div
                  className="tr"
                  key={parceiro.IdPessoa}
                  onClick={() => openModal(parceiro)}
                >
                  <div className="td">
                    <b>
                      {parceiro.PessoaJuridica?.NomeFantasia
                        ? ajustaNome(parceiro.PessoaJuridica?.NomeFantasia)
                        : ajustaNome(parceiro.Nome)}
                    </b>
                  </div>
                </div>
              ) : (
                <div className="tr" key={parceiro.IdPessoa}>
                  <div className="td">
                    <b>
                      {parceiro.PessoaJuridica?.NomeFantasia
                        ? ajustaNome(parceiro.PessoaJuridica?.NomeFantasia)
                        : ajustaNome(parceiro.Nome)}
                    </b>
                  </div>
                  <div className="td" id="hide">
                    {parceiro.Contratos.map((c) => {
                      return (
                        <div key={c.IdContrato}>
                          {c.Observacao && (
                            <p>
                              {c.Observacao} <br />
                              <br />
                            </p>
                          )}
                          {c.Beneficios.map((b) => {
                            return (
                              <p key={b.IdBeneficio}>
                                <b>Benefício: </b>
                                {b.PercDesconto > 0
                                  ? b.PercDesconto + "%"
                                  : b.ValorDesconto + " reais"}{" "}
                                {b.Observacao}
                                <b className="b-categoria">Categoria:</b>{" "}
                                {b.BeneficioCategoria}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="td"
                    id="hide"
                    style={{ justifyContent: "space-between" }}
                  >
                    <div style={{ width: "80%", marginRight: "1rem" }}>
                      {parceiro.Endereco?.TipoLogradouro +
                        " " +
                        parceiro.Endereco?.Logradouro +
                        " " +
                        parceiro.Endereco?.Numero +
                        ", " +
                        parceiro.Endereco?.Complemento +
                        " " +
                        parceiro.Endereco?.Bairro +
                        " " +
                        parceiro.Endereco?.Cidade +
                        ", " +
                        parceiro.Endereco?.UF}
                    </div>
                    <div>
                      {/* { parceiro.Telefones?.map( (t, index) => {
                        return (
                          <a key={index} href={`tel:${t.Numero}`} >
                            <PhoneIcon width={20} height={20} color={"#034870"} />
                          </a>
                        )}
                      )} */}
                      <a href={`tel:${parceiro.Telefones[0]?.Numero}`}>
                        <PhoneIcon width={20} height={20} color={"#034870"} />
                      </a>
                      <a
                        href={linkEndereco(
                          parceiro.Endereco?.Latitude,
                          parceiro.Endereco?.Longitude
                        )}
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginLeft: "0.5rem" }}
                      >
                        <MapPinIcon width={20} height={20} color={"#034870"} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <p className="none-search">
          Nenhum parceiro encontrado para o termo buscado
        </p>
      )}
      <div className="footerTable">
        <p onClick={() => setIsFormOpen(true)}>
          Quero me tornar um conveniado.
        </p>
      </div>
    </Container>
  );
}
