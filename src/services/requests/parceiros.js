import api from "../api";

async function buscaParceiros(filtroBusca) {
  try {
    let resultado;

    console.log(filtroBusca);

    if (filtroBusca) {
      resultado = await api.get(
<<<<<<< HEAD
        `/Parceiro/PesquisarParceirosComContratosNaoVencidos/${filtroBusca}`
      );
    } else {
      resultado = await api.get(
        "/Parceiro/ListarParceirosComContratosNaoVencidos"
=======
        `/br.edu.unipam.clubediplomado.api/api/v1/Parceiro/PesquisarParceirosComContratosNaoVencidos/${filtroBusca}`
      );
    } else {
      resultado = await api.get(
        "/br.edu.unipam.clubediplomado.api/api/v1/Parceiro/ListarParceirosComContratosNaoVencidos"
>>>>>>> 66195253b2cb598aec781368be7e034cdea4c368
      );
    }

    return resultado.data.Result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { buscaParceiros };
