import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import { Container } from "./styles";

export default function ModalConveniado(parceiro) {

  // const ajustaNome = (nome) => {
  //   let lowerName = nome.toLowerCase();

  //   let capitalizeName = lowerName
  //     .split(" ")
  //     .map((word) => {
  //       return word.charAt(0).toUpperCase() + word.slice(1);
  //     })
  //     .join(" ");
  //   return capitalizeName;
  // };
  
  return (
    <Container id="conveniados">
      <p>teste</p>
      {/* <div className="header">
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

      {parceiros.length >= 1 ? (
        <div className="overflow">
          <div className="table">
            {parceiros.map((parceiro) => (
              isMobile ?
              <div className="tr" key={parceiro.IdPessoa}>
                <div className="td">
                  <b>
                    {parceiro.PessoaJuridica?.NomeFantasia
                      ? ajustaNome(parceiro.PessoaJuridica?.NomeFantasia)
                      : ajustaNome(parceiro.Nome)}
                  </b>
                </div>
              </div> :
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
                <div className="td" id="hide" style={{justifyContent: "space-between"}}>
                  <div style={{width: '80%', marginRight: '1rem'}}>
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
                    <a href="tel:34996937841" >
                      <PhoneIcon width={20} height={20} color={'#034870'} />
                    </a>
                    <a href={linkEndereco(parceiro.Endereco?.Latitude, parceiro.Endereco?.Longitude)} target='_blank' style={{marginLeft: "0.5rem"}}>
                      <MapPinIcon width={20} height={20} color={'#034870'} />
                    </a>
                  </div>
                </div>
              </div>
             
            ))}
          </div>
        </div>
      ) : (
        <p className="none-search">
          Nenhum parceiro encontrado para o termo buscado
        </p>
      )} */}
    </Container>
  );
}
