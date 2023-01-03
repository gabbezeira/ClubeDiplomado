import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import { Container } from "./styles";
import { buscaParceiros } from "../../services/requests/parceiros";

export default function Conveniados() {
  const [parceiros, setParceiros] = useState([]);
  const [filtroBusca, setFiltroBusca] = useState("");

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
      <div className="header" style={{ marginTop: "5rem" }}>
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
              <div className="tr" key={parceiro.IdPessoa}>
                <div className="td" style={{ justifyContent: "left" }}>
                  <b>
                  { parceiro.PessoaJuridica?.NomeFantasia ? 
                      ajustaNome(parceiro.PessoaJuridica?.NomeFantasia) :
                      ajustaNome(parceiro.Nome)
                  }
                  </b>
                </div>
                <div className="td" id="hide" style={{ flex: 2 }}>
                  {parceiro.Contratos.map((c) => {
                    return (
                      <p id={c.IdContrato}>
                        {c.Observacao && (
                          <p>
                            {c.Observacao} <br />
                            <br />
                          </p>
                        )}
                        {c.Beneficios.map((b) => {
                          return (
                            <p>
                              <b>Benefício: </b>
                              {b.PercDesconto > 0
                                ? b.PercDesconto + "%"
                                : b.ValorDesconto + " reais"}{" "}
                              {b.Observacao}
                              <b style={{ marginLeft: "0.575rem" }}>
                                Categoria:
                              </b>{" "}
                              {b.BeneficioCategoria}
                            </p>
                          );
                        })}
                      </p>
                    );
                  })}
                </div>
                <div className="td" id="hide">
                  <div style={{ textAlign: "left" }}>
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
                    <a
                      href={linkEndereco(
                        parceiro.Endereco?.Latitude,
                        parceiro.Endereco?.Longitude
                      )}
                    >
                      <button style={{ marginLeft: "0.875rem" }}>
                        Localizar no mapa
                      </button>
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
      )}
    </Container>
  );
}
