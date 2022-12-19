import React, { useState, useEffect } from "react";
import SearchSVG from "../../assets/images/Icons/search.png";
import { Container } from "./styles";
import useParceiros from "../../hooks/useParceiros";

export default function Conveniados() {
  const { parceiros, carregaParceiros, pesquisaParceiros } = useParceiros();
  const [categoriaFiltrada, setCategoriaFiltrada] = useState();
  const [filtroBusca, setFiltroBusca] = useState("");
  const [notFound, setNotFound] = useState(false);

  const linkEndereco = (latitude, longitude) => {
    return `https://www.google.com/maps/search/?api=1&query=${longitude},${latitude}`;
  };

  const ajustaNome = (nome) => {
    let lowerName = nome.toLowerCase();
    let capitalizeName = lowerName.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
    return capitalizeName;
  };

  useEffect(() => {
    if (filtroBusca && filtroBusca.length > 0) {
      pesquisaParceiros(filtroBusca);
      parceiros.length === 0 ? setNotFound(true) : setNotFound(false);
    } else {
      setNotFound(false);
      carregaParceiros(categoriaFiltrada);
    }
  }, [categoriaFiltrada, filtroBusca]);

  return (
    <Container>
      <div className="header">
        <h2>Conveniados</h2>
        <div className="underline"></div>
      </div>

      <div className="input">
        <img src={SearchSVG} alt="ícone de lupa" />
        <input
          onChange={(e) => pesquisaParceiros(e.target.value)}
          placeholder="Procure por um termo específico. Exemplo: “Academia”"
        />
      </div>

      <div className="overflow">
        <div className="table">
          {parceiros.map((item) => (
            <div className="tr">
              <div className="td">
                <b>Conveniado: </b> {ajustaNome(item.Nome)}
              </div>
              <div className="td" id="hide" style={{ flex: 2 }}>
                <p>
                  <b>Benefício:</b> {item.benef} <br />{" "}
                  <b>Categoria: {item.category}</b>{" "}
                </p>{" "}
              </div>
              <div className="td" id="hide">
                <a href={linkEndereco(item.Latitude, item.Longitude)}>
                  <button>Endereço</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
