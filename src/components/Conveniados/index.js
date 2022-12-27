import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import { Container } from "./styles";
import useParceiros from "../../hooks/useParceiros";

export default function Conveniados() {

  const { parceiros, pesquisaParceiros } = useParceiros();
  const [filtroBusca, setFiltroBusca] = useState("");

  const linkEndereco = (latitude, longitude) => {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  };

  const ajustaNome = (nome) => {
    let lowerName = nome.toLowerCase();
    let capitalizeName = lowerName.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
    return capitalizeName;
  };

  useEffect(() => {
      pesquisaParceiros(filtroBusca);
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

      { parceiros.length >= 1 ? 
      <div className="overflow">
        <div className="table">
          {parceiros.map((item) => (
            <div className="tr" key={item.IdPessoa}>
              <div className="td">
                <b>{ajustaNome(item.Nome)}</b>
              </div>
              <div className="td" id="hide" style={{ flex: 2 }}>
                { item.Contratos.map((c) => {
                  return (
                    <p id={c.IdContrato}>
                      {c.Observacao &&
                        <p>
                          {c.Observacao} <br /><br />
                        </p>
                      }
                      {c.Beneficios.map((b) => {
                        return (
                          <p>
                            <b>Benefício: </b> 
                              { b.PercDesconto > 0 ?
                                b.PercDesconto + '%' : b.ValorDesconto + ' reais'} {b.Observacao}
                            <b>Categoria:</b> {b.BeneficioCategoria}
                          </p>
                          );
                      })}
                    </p>
                  )})}
              </div>
              <div className="td" id="hide">
                { 
                    item.Endereco.TipoLogradouro + ' ' + item.Endereco.Logradouro + ' ' + item.Endereco.Numero + ', ' 
                    + item.Endereco.Complemento + ' ' + item.Endereco.Bairro + ' ' + item.Endereco.Cidade + ', ' + item.Endereco.UF
                }
                <a href={linkEndereco(item.Endereco.Latitude, item.Endereco.Longitude)}>
                  <button>Localizar no mapa</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      :
        <p>Nenhum parceiro encontrado para o termo buscado</p>
      }
    </Container>
  );
}
