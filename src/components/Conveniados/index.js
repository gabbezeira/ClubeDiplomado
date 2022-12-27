import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import { Container } from "./styles";
import { buscaParceiros } from "../../services/requests/parceiros";

export default function Conveniados() {

  const [ parceiros, setParceiros ] = useState([]);
  const [filtroBusca, setFiltroBusca] = useState("");

  const linkEndereco = (latitude, longitude) => {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  };

  const ajustaNome = (nome) => {
    let lowerName = nome.toLowerCase();

    let capitalizeName = lowerName.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    return capitalizeName;
  };

  useEffect( () => {
    const carregaParceiros = async() => { 
      const resultado = await buscaParceiros(filtroBusca);
      setParceiros(resultado);
    }
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
              <div className="td" id="hide" >
                <div style={{textAlign: "center", marginInline: '2rem'}}>
                  { 
                      item.Endereco?.TipoLogradouro + ' ' + item.Endereco?.Logradouro + ' ' + item.Endereco?.Numero + ', ' 
                      + item.Endereco?.Complemento + ' ' + item.Endereco?.Bairro + ' ' + item.Endereco?.Cidade + ', ' 
                      + item.Endereco?.UF
                  }
                </div>
                <div >
                  <a href={linkEndereco(item.Endereco?.Latitude, item.Endereco?.Longitude)}>
                    <button >Localizar no mapa</button>
                  </a>
                </div>
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
