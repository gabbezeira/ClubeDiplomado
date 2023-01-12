import { useState, useEffect } from "react";

import { useCookies } from 'react-cookie';
import {
  AStyled,
  ButtonStyled,
  H1Styled,
  WrapperContent,
  WrapperPolitica,
} from "./styles";

export function PoliticaPrivacidade({
  timeSavedCookiesInSeconds,
  saveCookiesOneDay,
}) {
  const [visible, setVisible] = useState(true);
  const [cookies, setCookie] = useCookies(['cookie-diplomado']);
  const oneDayInSeconds = 86400;

  const savedCookies = () => {
    const expires = saveCookiesOneDay ? oneDayInSeconds : timeSavedCookiesInSeconds;
    setCookie('ACCEPTCOOKIE', 'accept', {path: '/',  maxAge: expires });
    setVisible(false);
  };

  useEffect(() => {

    if (cookies.ACCEPTCOOKIE !== undefined) {
      setVisible(false);
    }

    console.log(cookies);
  }, [cookies, visible]);

  return (
    <WrapperPolitica visible={visible}>
      <WrapperContent>
        <H1Styled>
          Usamos cookies para analisar suas interações neste site e melhorar a
          sua experiência de navegação. Ao usar nosso site, entendemos que você
          está ciente da nossa
          <AStyled target="_blank" href="https://privacidade.unipam.edu.br/">
            {" "}
            Política de Privacidade
          </AStyled>{" "}
          e concorda com o uso de cookies.
        </H1Styled>
        <ButtonStyled onClick={savedCookies}>Aceitar</ButtonStyled>
      </WrapperContent>
    </WrapperPolitica>
  );
}
