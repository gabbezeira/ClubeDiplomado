import api from "../api";

async function inscreverAluno(aluno) {
  try {
    const resultado = await api.post(
      `/br.edu.unipam.clubediplomado.api/api/v1/Inscricao/InscricaoAluno`,
      aluno
    );

    console.log(resultado);

    return resultado.data;
  } catch (error) {
    return [];
  }
}

async function inscreverParceiro(parceiro) {
  try {
    const resultado = await api.post(
      `/br.edu.unipam.clubediplomado.api/api/v1/Inscricao/InscricaoParceiro`,
      parceiro
    );

    return resultado.data;
  } catch (error) {
    return [];
  }
}

export { inscreverAluno, inscreverParceiro };
