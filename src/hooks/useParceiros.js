import { useState } from "react";
import { listaParceiros, buscaParceiros } from "../services/requests/parceiros";

export default function useParceiros() {
  const [parceiros, setParceiros] = useState([]);

  const carregaParceiros = async () => {
    const resultado = await listaParceiros();
    setParceiros(resultado);
  };

  const pesquisaParceiros = async (filtroBusca) => {
    const resultado = await buscaParceiros(filtroBusca);
    setParceiros(resultado);
  };

  return { parceiros, carregaParceiros, pesquisaParceiros };
}
