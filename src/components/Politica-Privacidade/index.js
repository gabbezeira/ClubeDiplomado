import { useState, useEffect } from 'react'

import { setCookie, parseCookies } from 'nookies'
import { 
AStyled,
ButtonStyled,
H1Styled,
WrapperContent,
WrapperPolitica 
} from './styles'

export function PoliticaPrivacidade({
timeSavedCookiesInSeconds,
saveCookiesOneDay,
}) {
const [visible, setVisible] = useState(true)
const oneDayInSeconds = 86400
const savedCookies = () => {
  setCookie(null, 'ACCEPTCOOKIE', 'accept', {
    maxAge: saveCookiesOneDay ? oneDayInSeconds : timeSavedCookiesInSeconds,
    path: '/',
  })
  setVisible(false)
}

useEffect(() => {
  const cookies = parseCookies()
  const valueCookies = cookies.ACCEPTCOOKIE

  if (valueCookies !== undefined) {
    setVisible(false)
  }
}, [visible])

return (
  <WrapperPolitica visible={visible}>
    <WrapperContent>
      <H1Styled>
        Usamos cookies para analisar suas interações neste site e melhorar a sua experiência de navegação. Ao usar nosso site, entendemos que você está ciente da nossa
      <AStyled target='_blank' href='https://privacidade.unipam.edu.br/'>{' '}
        Política de Privacidade
      </AStyled>{' '}
        e concorda com o uso de cookies.
      </H1Styled>
      <ButtonStyled onClick={savedCookies}>
        Aceitar
      </ButtonStyled>
    </WrapperContent>
  </WrapperPolitica>
)
}
