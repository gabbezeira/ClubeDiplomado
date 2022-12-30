import api from "../api";

async function buscaCursos() {
  try {
    
    const resultado = await api.get(
        `/br.edu.unipam.rm.api.Infraestrutura/api/curso/ListarCursos/1/t`
      );

    return resultado.data.Result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { buscaCursos };
