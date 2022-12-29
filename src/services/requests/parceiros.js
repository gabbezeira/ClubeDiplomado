import api from "../api";

async function buscaParceiros(filtroBusca) {
  try {
    let resultado;

    console.log(filtroBusca);

    if (filtroBusca) {
      resultado = await api.get(
        `/Parceiro/PesquisarParceirosComContratosNaoVencidos/${filtroBusca}`
      );
    } else {
      resultado = await api.get(
        "/Parceiro/ListarParceirosComContratosNaoVencidos"
      );
    }

    return resultado.data.Result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { buscaParceiros };
