import api from "../api";

async function listaParceiros() {
  try {
    const resultado = await api.get(
      "/Parceiro/ListarParceirosComContratosNaoVencidos"
    );
    return resultado.data.Result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function buscaParceiros(filtroBusca) {
  try {
    let resultado;

    if (filtroBusca) {
      // resultado = await api.get(`/parceiros/beneficios/${filtroBusca}`);
      resultado = await api.get(
        `/Parceiro/PesquisarParceirosComContratosNaoVencidos/${filtroBusca}`
      );
    } else {
      // resultado =  await api.get('/parceiros/beneficios');
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

export { listaParceiros, buscaParceiros };
